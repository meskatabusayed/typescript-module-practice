{
    //type alies in typescript
    type Student = {
        name : string;
        roll : number;
        address : string;
        father_name : string;
        mother_name : string;
        source_of_earning? : number;
    }

    const student1 : Student = {
        name : "Meskat",
        roll : 23,
        address : "Bheramara",
        father_name : "Lotif",
        mother_name : "muslima"
    }

    const student2 : Student = {
        name : "Rahim",
        roll : 12,
        address : "Usa",
        father_name : "ja1",
        mother_name : "m2",
        source_of_earning : 67000000,
    }

    type UserName = string;
    type IsGoing = boolean;
    const adminName : UserName ="Karim";
    const goingUSA : IsGoing = true;

    type Add = (num1 : number , num2 : number) => number;
    const add : Add = (num1 , num2) => num1 + num2;

    
}