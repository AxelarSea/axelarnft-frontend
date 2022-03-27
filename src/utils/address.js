export function maskAddress(address) {
  if (!address) return address;
  if (address.startsWith('0x')) {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
  } else {
    return address.substring(0, 9) + '...' + address.substring(address.length - 4);
  }
}