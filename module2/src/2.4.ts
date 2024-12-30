{
    type GenericArray<t> = Array<t>
    interface User {
        name : string;
        email : string;
        age : number;
    }

    const user : GenericArray<User> = [
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        },
        {
            name : "sw",
            email : "m@gmail.com",
            age : 21,
        }

        
    
    ]

    //generic interface

    interface Developer<T , X = null> {
        name : string;
        computer : {
            brand : string;
            model : string;
            releaseYear : number;
        };
        smartWatch : T;
        bike ? : X;

    }

    const poorUser : Developer<{
        s_Brand : string;
        s_Price : number;

    }> = {

        name : "Meskat",
        computer : {
            brand : "hp",
            model : "2023",
            releaseYear : 2220
        },
        smartWatch : {
            s_Brand : "boAt",
            s_Price : 223,
        }

    }
    
    interface AppleWatch {
        name : string,
        brand : string,
        price : number

    }
    interface Bike {
        name : string,
        brand : string,
        price : number

    }

    const richDeveloper : Developer<AppleWatch , Bike> = {
        name : "maam",
        computer : {
            brand : "Dell",
            model : "34",
            releaseYear : 435
        }, 
        smartWatch : {
            name : "Apple 3.0",
            brand : "Apple",
            price : 1232

        },
        bike : {
            name : "Suzuki",
            brand : "d",
            price : 2232324
        }



    }



}