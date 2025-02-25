{
    //abstraction : means idea --> 2 types : 1. interface and 2. abstract class

    interface Vehicle1 {
        startEngine() : void;
        endEngine() : void;
        move() : void;
    }

    class Toyota implements Vehicle1{
        startEngine(): void {
            console.log("This is start Engine")
        }
        endEngine(): void {
            console.log("This is End Engine")
        }
        move(): void {
            console.log("This is Move")
        }

        isGoing() : void{
            console.log("This is going");
        }
    }


    //abstract class

    abstract class Car {
        abstract startEngine() : void;
        abstract endEngine() : void;
        test(){
            console.log("This is test");
        };
    }

    class v2 extends Car{
        startEngine(): void {
            console.log("this is start engine")
        }
        endEngine(): void {
            console.log("this is end")
        }
        rest(){
            console.log("this is rest");
        }
    }
}