const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1616, 'SJFFJEVKNEVJAG', 'AMFDNVKEVJONE');
bitcoin.createNewTransaction(100, 'ALEXKJNEESCMS', 'JENNKSLVKWVWV');

//bitcoin.sha256('sfjgg','ssghowg',25);

console.log(Blockchain.hash);