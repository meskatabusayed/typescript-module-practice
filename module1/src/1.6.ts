{
    //normal function
    function add(num1 : number , num2 : number) : number{
        return num1 + num2;
    }
    add(23 , 24);

    //arrow function
    const addNumber = (num1 : number , num2 : number) : number => num1 + num2;
    console.log(addNumber(12 , 45));

    //object in function called method
    const newObj  : {
        name : string;
        balance : number;
        addBalance(balance : number) : string;
    }  = {
        name : "Motors Mama",
        balance : 0,
        addBalance(balance : number) : string {
            return `Motors Mama has ${this.balance + balance} money`
        }

    }
    newObj.addBalance(20);

    //map 

    const rollArr : number[] = [23, 11, 15 , 34, 56];
    const squareValue : number[] =  rollArr.map((roll : number) : number => roll*roll);
    console.log(squareValue);

    
}