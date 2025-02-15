{
    //type gurd using instanceof
    class Animal {
        constructor(public name : string , public species : string){


        }

        makeSound(){
            return "I am making sound";
        }
    }

    class Dog extends Animal{
        constructor(public name : string, public species : string){
            super(name , species);
        }
        makeBark(){
            console.log("I am barking");
        }
    }

    class Cat extends Animal{
        constructor(public name: string, public species : string){
            super(name , species);
        }

        makeMeaw(){
            console.log("I am meawing");
        }
    }

    const cat = new Cat("skdj" , "sewe");
    cat.makeMeaw()
   
}