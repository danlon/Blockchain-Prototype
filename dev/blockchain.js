// Creating Blockchain using constructor function
function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

// Method for creating new block
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

// Get last block method
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1]
}

//New transaction method 
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    
    this.newTransactions.push(newTransaction);
}


module.exports = Blockchain;