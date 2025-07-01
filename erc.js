// Import ethers.js library
const { ethers } = require("ethers");

// Function to generate bulk random wallets
function generateRandomWallets(count) {
  const wallets = [];
  for (let i = 0; i < count; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });
  }
  return wallets;
}

// Number of wallets to generate
const numberOfWallets = 10; // Change this number as needed

// Generate wallets
const randomWallets = generateRandomWallets(numberOfWallets);

// Output wallets
randomWallets.forEach((wallet, index) => {
  console.log(`Wallet ${index + 1}:`);
  console.log(`Address: ${wallet.address}`);
  console.log(`Private Key: ${wallet.privateKey}`);
  console.log('---------------------------');
});
