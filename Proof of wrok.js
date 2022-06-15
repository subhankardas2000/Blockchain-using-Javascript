Proof_of_Work(difficulty){
      while(this.hash.substring(0, difficulty) !==Array(difficulty + 1).join("0")){
          this.nonce++;
          this.hash = this.compute_Hash();
      }        
  }
