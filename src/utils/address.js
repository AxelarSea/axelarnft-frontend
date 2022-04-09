export function chainLabel(chainId) {
  switch (parseInt(chainId)) {
<<<<<<< HEAD
    case 3: return 'ETH';
    case 43113: return 'AVAX';
    case 4002: return 'FTM';
=======
    case 3:
      return "ETH";
    case 80001:
      return "POLYGON";
    case 43113:
      return "AVAX";
    case 4002:
      return "FTM";
    case 1287:
      return "MOONBEAM";
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
  }
  return "UNKNOWN";
}

export function maskAddress(address) {
  // console.log(address);
  if (!address) return address;
<<<<<<< HEAD
  if (address.startsWith('0x')) {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
  } else {
    return address.substring(0, 9) + '...' + address.substring(address.length - 4);
  }
}
=======
  if (address.startsWith("0x")) {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  } else {
    return (
      address.substring(0, 9) + "..." + address.substring(address.length - 4)
    );
  }
}
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
