export function chainLabel(chainId) {
  switch (parseInt(chainId)) {
    case 3: return 'ETH';
    case 80001: return 'POLYGON';
    case 43113: return 'AVAX';
    case 4002: return 'FTM';
    case 1287: return 'MOONBEAM';
  }
  return "UNKNOWN";
}

export function maskAddress(address) {
  // console.log(address);
  if (!address) return address;
  if (address.startsWith('0x')) {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
  } else {
    return address.substring(0, 9) + '...' + address.substring(address.length - 4);
  }
}