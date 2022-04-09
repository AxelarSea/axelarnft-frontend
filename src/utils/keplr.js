import { BroadcastMode, makeSignDoc, makeStdTx, SigningCosmosClient } from "@cosmjs/launchpad";
import Long from "long";
import { SigningStargateClient } from "@cosmjs/stargate";

const STARGATE_CLIENT_OPTIONS = {
  gasLimits: {
    send: 80000,
    transfer: 270000,
    delegate: 250000,
    undelegate: 250000,
    redelegate: 250000,

    // The gas multiplication per rewards.
    withdrawRewards: 140000,
    govVote: 250000,
  },
  gasPrice: 0.015,
};

// Returns a promise to the txId that should be sent to checkStatus endpoint
export async function executeCosmosTransaction(cosmos) {
  const keplr = window.keplr;

  if (!keplr) throw Error("Keplr not found");

  try {
    const {
      memo = "", // Not used
      sequence = "", // Not used
      accountNumber = 0, // Not used
      chainId,
      msgs,
      fee = undefined,
      signType = "DIRECT",
      rpcUrl,
    } = cosmos;

    // Remove __type field that comes from server

    // And also do a a small manipulation to messages

    const msgsWithoutType = msgs.map((m) => ({
      ...manipulateMsg(m),
      __type: undefined,
    }));

    if (!chainId) throw Error("ChainId is null from server");

    // if (!accountNumber) throw Error("AccountNumber is null from server");

    // if (!sequence) throw Error("Sequence is null from server");

    if (signType === "AMINO") {
      const signDoc = makeSignDoc(
        msgsWithoutType,
        fee,
        chainId,
        memo || undefined,
        accountNumber,
        sequence
      );

      const signResponse = await keplr.signAmino(
        chainId,
        cosmos.fromWalletAddress,
        signDoc
      );

      const signedTx = makeStdTx(signResponse.signed, signResponse.signature);

      const result = await keplr.sendTx(chainId, signedTx, BroadcastMode.Async);

      return uint8ArrayToHex(result);
    } else if (signType === "DIRECT") {
      const sendingSigner = keplr?.getOfflineSigner(chainId);
      const accounts = await sendingSigner.getAccounts();

      const sendingStargateClient =
        await SigningStargateClient?.connectWithSigner(
          rpcUrl,
          sendingSigner,
          STARGATE_CLIENT_OPTIONS,
        );

      const feeArray = !!fee?.amount[0]
        ? [
            {
              denom: fee.amount[0].denom,
              amount: fee?.amount[0].amount,
            },
          ]
        : [];

      let broadcastTxRes;

      if (msgs.length == 1 && msgs[0].type.endsWith("MsgTransfer")) {
        console.log(
          accounts[0]?.address,
          msgs[0].value.receiver,
          msgs[0].value.token,
          msgs[0].value.source_port,
          msgs[0].value.source_channel,
          msgs[0].value.timeout_height,
          msgs[0].value.timeout_timestamp,
          !!fee?.amount[0] ? {gas: fee.gas, amount: feeArray} : "auto",
          memo,
        )
        broadcastTxRes = await sendingStargateClient.sendIbcTokens(
          accounts[0]?.address,
          msgs[0].value.receiver,
          msgs[0].value.token,
          msgs[0].value.source_port,
          msgs[0].value.source_channel,
          msgs[0].value.timeout_height,
          msgs[0].value.timeout_timestamp,
          !!fee?.amount[0] ? {gas: fee.gas, amount: feeArray} : "auto",
          memo,
        );
      } else {
        broadcastTxRes = await sendingStargateClient.signAndBroadcast(
          accounts[0]?.address,
          msgs,
          !!fee?.amount[0] ? {amount: feeArray} : "auto",
        );
      }


      return broadcastTxRes.transactionHash;
    } else if (signType === "COSMOS") {
      const sendingSigner = keplr?.getOfflineSigner(chainId);
      const accounts = await sendingSigner.getAccounts();
			const lcdUrl = rpcUrl;

      const client = new SigningCosmosClient(
        lcdUrl,
        accounts[0].address,
        sendingSigner
      );

      const broadcastTxRes = await client.signAndBroadcast(msgs, !!fee?.amount[0] ? fee : "auto");

      return broadcastTxRes.transactionHash;
    } else {
      throw Error("Sign type for cosmos not supported, type: " + signType);
    }
  } catch (err) {
    throw err;
  }
}

const uint8ArrayToHex = (buffer) => {
  // buffer is an ArrayBuffer
  return [...buffer].map((x) => x.toString(16).padStart(2, "0")).join("");
};

function manipulateMsg(m) {
  if (!m.__type) return m;

  if (m.__type === "DirectCosmosIBCTransferMessage") {
    const result = { ...m };

    const v = result.value;

    if (v.timeoutTimestamp)
      v.timeoutTimestamp = Long.fromString(v.timeoutTimestamp);

    if (!!v.timeoutHeight?.revisionHeight)
      v.timeoutHeight.revisionHeight = Long.fromString(
        v.timeoutHeight.revisionHeight
      );

    if (!!result.value.timeoutHeight?.revisionNumber)
      v.timeoutHeight.revisionNumber = Long.fromString(
        v.timeoutHeight.revisionNumber
      );

    return result;
  }

  return { ...m };
}
