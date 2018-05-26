//libraries
const sha256 = require('sha256');

// Creating Blockchain using constructor function
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

// Method for creating new block
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };


    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

// Get last block method
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

//New transaction method  
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    
    this.pendingTransactions.push(newTransaction);
// Returning block where we find newTransaction in, and that will be next mined block    
    return this.getLastBlock()['index'] + 1;
}

//Hashning method SHA256
Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}



module.exports = Blockchain;