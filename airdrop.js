const solanaWeb3 = require("@solana/web3.js");

const publickey = solanaWeb3.Keypair.generate().publicKey;
console.log(publickey);
// const Solana = new solanaWeb3.Connection(
//   "https://www.quicknode.com/guides/solana-development/how-to-create-an-address-in-solana-using-javascript"
// );

// const firstBlock = async () => {
//   const recentBlock = await Solana.getEpochInfo();
//   console.log("~~~~~~~~~~~~~~~~~NEW BLOCK~~~~~~~~~~~~\n", recentBlock);
//   const keyPair = solanaWeb3.Keypair.generate();

//   console.log("Public Key:", keyPair.publicKey.toString());
//   console.log("Secret Key:", keyPair.secretKey);
// };

// firstBlock();
