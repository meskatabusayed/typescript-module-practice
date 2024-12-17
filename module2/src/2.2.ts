{
    //interface , type vs interface
    //intersection

    interface User1 {
        name : string;
        email : string;
        money : number;
    }

   

    interface UserRoll extends User1 {
        roll : string;
    }
    const user : UserRoll = {
        name : "meskat",
        email : "m@gmail.com",
        money : 45,
        roll : "sds"
    }

    type Person = {
        name : string;
        age : number;
        address : string;
    }

    //type

    type Familly = Person & {member : number}

    const familly : Familly = {
        name : "sad",
        age : 34,
        address : "sd",
        member : 434
    }

    interface School {
        name : string;
    }

    

    


}