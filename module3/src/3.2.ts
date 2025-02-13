{
    //inheritance :

    class Person{
        constructor(public name : string , public age : number , public f_name : string , public has_bike : boolean){}
        sleap_time(time : string){
            console.log(`Sleap time ${time}`);
        }
    }

    const person1 = new Person("Meskat" , 24, "mal" , false);
    console.log(person1)
    person1.sleap_time("9H");

    class Student extends Person{
        constructor(public name : string , public age : number , public f_name : string , public has_bike : boolean){
            super(name , age, f_name , has_bike)
        }

        university_class(u_class: number){
            console.log(`${u_class} total / day`);
        }

    }

    const student = new Student("Rahim" , 27, "sbd" , true);
    student.university_class(7);

    class Teacher extends Person{
        constructor(public name : string , public age : number , public f_name : string , public has_bike : boolean , public profession : string){
            super(name , age, f_name , has_bike)
        }
    }

    const teacher = new Teacher("karim" , 34 , "ds" , true , "HOD");
    console.log(teacher);


    

}