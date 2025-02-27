{

    class BankAccount {
        public readonly id : number;
        public name : string;
        protected _balance : number;
        constructor(id : number , name : string , balance : number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount : number) {
            return this._balance = this._balance + amount;
        }
    
         private getBalance(){
            return this._balance;
        }
      }

      class StudentAccount extends BankAccount{
        test(){
            this.addDeposit
        }
      }

      
    
}