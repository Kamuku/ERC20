
# ERC20 - Random ERC-20 Wallet Address Generator

A simple Node.js tool to generate random Ethereum wallet addresses compatible with ERC-20 tokens.

## Features

- Generate random Ethereum wallet addresses with private keys.
- Bulk generation support.
- Easy to use with minimal dependencies.
- Built with [ethers.js](https://docs.ethers.io/v5/), a popular Ethereum library.

## Installation

Clone the repository:

```bash
git clone https://github.com/Wesker222/ERC20.git
cd ERC20
```

Install dependencies:

```bash
npm install
```

## Usage

Run the script to generate random ERC-20 wallet addresses:

```bash
node generateWallets.js
```

By default, the script generates 10 random wallets. You can modify the number of wallets by editing the `numberOfWallets` variable inside the script.

## Example Output

```
Wallet 1:
Address: 0x1234...abcd
Private Key: 0xabcdef1234567890...

Wallet 2:
Address: 0x5678...efgh
Private Key: 0x123456abcdef7890...
...
```

## How it works

The script uses `ethers.Wallet.createRandom()` to generate wallets with a cryptographically secure random private key and corresponding Ethereum address. These addresses are compatible with all ERC-20 tokens as they are standard Ethereum addresses.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.


