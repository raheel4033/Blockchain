function Blockchain()
{
    this.chain = [];
    this.newTransactions=[];
}


Blockchain.prototype.createNewBlockchain = function(nonce,previousBlockHash,hash)
{
    const NewBlock
    {
        index: this.chain.length+1;
        timestamp: Date.now();
        transactions: this.newTransactions;
        nonce: nonce;
        hash: hash;
        previousBlockHash: previousBlockHash
    };
    this.newTransactions = [];
    this.chain.push(NewBlock);

    return NewBlock;
}