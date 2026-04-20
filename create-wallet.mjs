import { generateKeyPairSigner, createSolanaRpc, devnet, } from "@solana/kit";

const rpc = createSolanaRpc(devnet(`https://api.devnet.solana.com`));
const wallet = await generateKeyPairSigner();

console.log(`Wallet address:`,  "85SV866XjLfRvmXnbwAuQnEo17qfejzwEsyD9ASFxZHn");
console.log(`\n— Go to https://faucet.solana.com/ and airdrop SOL to this address —`);
console.log(`Then run this script again with the same address to check the balance —\n`);

// To check a specific address you’ve already funded, replace the line below:
// const { value: balance } = await rpc.getBalance(address(“YOUR_ADDRESS_HERE”)).send();
const { value: balance } = await rpc.getBalance( `85SV866XjLfRvmXnbwAuQnEo17qfejzwEsyD9ASFxZHn`).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);