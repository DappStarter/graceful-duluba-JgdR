require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain modify hockey prison obscure genuine'; 
let testAccounts = [
"0xb58e6bdfd36bc1a88738bec28d684381f81e4893727f45336c776a5c1c7882f5",
"0x07be28f4f077cdf5a6d2e20ee4169c3004ec6bc7c0b4e7bb3ff1c5a8ada2b60d",
"0xa56ce2308b375267acd5364d5952f6f061a678c442847aa8fdf2a5d1dfda41d9",
"0x4735d5fbafc9a8233600174b50750ff2dc805b043b7cf7706dae86501296af5b",
"0xb38b01cb2fb4bf15aa8e55b51c2dacccf520c12e3a020c53497674b5dbd957cf",
"0xe49e274da9b94073aef365ad1e43274b36532ab220ea7fa8b0a0eb9fcb2be68c",
"0x7c9f00342099b7982b95d95b273a7575f6f7754655c26b3fd9227c5a1ea71566",
"0xaf9750f8160df88ca2e865cdf4b01295f9dee6f59e05c93263818cc4f5601c97",
"0xaab9918c51ef73e7d1dac3778368ce2cc98d5bf861eb55c1d7288c651d7938b0",
"0xa9f70a81d082ef97f3b0265f08d6fc5c9650f6cdacd64108229e5f2d6a61c371"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

