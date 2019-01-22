const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1616, 'SJFFJEVKNEVJAG', 'AMFDNVKEVJONE');
bitcoin.createNewTransaction(100, 'ALEXKJNEESCMS', 'JENNKSLVKWVWV');

console.log(bitcoin);