Check_Chain_Validity(){
        for(let i = 1; i < this.blockchain.length; i++){
            const currentBlock = this.blockchain[i];
            const precedingBlock= this.blockchain[i-1];

          if(currentBlock.hash !== currentBlock.compute_Hash()){
              return false;
          }
          if(currentBlock.preceding_Hash !== precedingBlock.hash)
            return false;
        }
        return true;
    }
