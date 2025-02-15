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

    //smart way

    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog("dewr" , "wedwe");
    const cat = new Cat("dewrC" , "wedweC2");
    getAnimal(dog);
}