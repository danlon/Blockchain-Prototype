const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, '82317921ADUJ111', '82317921ADUJ222');

bitcoin.createNewTransaction(100, '82317921ADUJ333', '82317921ADUJDSU444');

bitcoin.createNewBlock(4321, '82317921ADUJ555', '82317921ADUJ665');

bitcoin.createNewTransaction(87, '82317921ADUJ333', '82317921ADUJDSU444');
bitcoin.createNewTransaction(230, '82317921ADUJ333', '82317921ADUJDSU444');
bitcoin.createNewTransaction(1002, '82317921ADUJ333', '82317921ADUJDSU444');

bitcoin.createNewBlock(5678, '82317921ADUJ777', '82317921ADUJ888');


console.log(bitcoin.chain[2]);