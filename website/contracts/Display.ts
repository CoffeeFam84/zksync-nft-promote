import { Contract, Web3Provider } from 'zksync-web3';

// TODO: adjust if needed
const ABI = require('./Display.json');

export default function getDisplayContract(provider: Web3Provider) {
  // TODO: fill this out
  return new Contract('0x7C7e30D397e48D2D82452aec1C5aB7642b600f39', ABI, provider.getSigner());
}
