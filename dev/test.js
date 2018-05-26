const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = '929021JDW0D991I2JWADDWA12321DSA';
const currentBlockData = [
    {
        amount: 20,
        sender: '210DOWO23165777543554WOAJ',
        recipient: '281873901793KSNDKNKDNMKAD'
    },
    {
        amount: 120,
        sender: '310DOWO23165777543554WOAJ',
        recipient: '181873901793KSNDKNKDNMKAD'
    },
    {
        amount: 220,
        sender: '0333OWO23165777543554WOAJ',
        recipient: '081873901793KSNDKNKDNMKAD'
    },
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));