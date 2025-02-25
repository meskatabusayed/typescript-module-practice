{
    //getter and setter 
    class BankAccount {
        public readonly id : number;
        public name : string;
        protected _balance : number;
        constructor(id : number , name : string , balance : number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        set addDeposit(amount : number) {
              this._balance = this._balance + amount;
        }
    
        get getBalance(){
           return   this._balance;
        }
      }

      const r1 = new BankAccount(67 , "mm" , 897);
      r1.addDeposit = 56;
     

}