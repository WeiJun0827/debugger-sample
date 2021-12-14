const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const RPC_ENDPOINT = isProduction ? 'https://mainnet-node.like.co/rpc/' : 'https://node.iscn-dev-2.like.co/rpc/';
console.log('Link to:', RPC_ENDPOINT);

const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put';

async function run() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
  const [{ address }] = await wallet.getAccounts();
  console.log(address);
}

run();
