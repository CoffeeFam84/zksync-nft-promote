import { Contract, Web3Provider } from 'zksync-web3';

// TODO: adjust if needed
const ABI = require('./NFT.json');

export default function getNFTContract(provider: Web3Provider) {
  // TODO: fill this out
  return new Contract('0xEe359c57bcd7F0152fEa7674C49B1b92f2B19aA0', ABI, provider.getSigner());
}
