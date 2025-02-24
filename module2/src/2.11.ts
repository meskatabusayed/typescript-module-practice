{
    //utility types
    type Person = {
        name : string;
        age : number;
        email ? : string;
        contactInfo : string;

    }
    //pick
    type person1 = Pick<Person , "name" | "contactInfo">
    //Omit --  bad dauwa

    type Person2 = Omit<Person , "age">

    //Required
    type Person3 = Required<Person>
    //Partial
    type Person4 = Partial<Person>

    //readonly

    type Person5 = Readonly<Person>;

    //record -- Dynamically value add korer jonno (used in Object)

    type Person6 = Record<string , string>;

    const obj : Person6 = {
        name : "wedsw" ,
        age : "wed",
        add : "sd"
    }
} 