const SHA256 = require("crypto-js/sha256");
class Block {
    constructor(index, timestamp, data, preceding_Hash = " ") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.preceding_Hash = preceding_Hash;
        this.hash = this.preceding_Hash;
        this.nonce = 0;
    }

    compute_Hash() {
        return SHA256(
            this.index +
            this.preceding_Hash +
            this.timestamp +
            JSON.stringify(this.data) +
            this.nonce
        ).toString();
    }

    Proof_of_Work(difficulty) {
        while (
            this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
        ) {
            this.nonce++;
            this.hash = this.compute_Hash();
        }
    }
}
class Blockchain {
    constructor() {
        this.blockchain = [this.Genesis_Block()];
        this.difficulty = 4;
    }

    Genesis_Block() {
        return new Block(0, "06.06.2022", "Initial Block in the Chain", "0");
    }

    Latest_Block() {
        return this.blockchain[this.blockchain.length - 1];
    }
    Add_New_Block(newBlock) {
        newBlock.precedingHash = this.Latest_Block().hash;

        newBlock.Proof_of_Work(this.difficulty);
        this.blockchain.push(newBlock);
    }

    Check_Chain_Validity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.compute_Hash()) {
                return false;
            }
            if (currentBlock.precedingHash !== precedingBlock.hash)
                return false;
        }
        return true;
    }
}


let Sharmacoin = new Blockchain();
console.log("Mining is in progress!!!!!!!");


Sharmacoin.Add_New_Block(
    new Block(1, "06.06.2022", {
        sender: "Sharma",
        recipient: "Das",
        quantity: 5
    })
);

Sharmacoin.Add_New_Block(
    new Block(2, "08.06.2022", {
        sender: "Das",
        recipient: "Subhankar",
        quantity: 10
    })
);
console.log(JSON.stringify(Sharmacoin, null, 4));