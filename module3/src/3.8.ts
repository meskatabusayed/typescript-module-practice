{
    //Polymorphism
    class Person{
        getSleep(){
            console.log("I want to sleep every day at least 10 hours");
        }
    }

    class Student extends Person{
        getSleep(): void {
            console.log("I want to sleep every day at least 6 hours");
        }
    }

    class Developer extends Person{
        getSleep(): void {
            console.log("I want to sleep every day at least 7 hours")
        }
    }

    const d1 = new Student();
    d1.getSleep();
}