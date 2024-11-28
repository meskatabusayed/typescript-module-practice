{
    //destructuring - object
    const user : {
        name : string;
        email : string;
        password : string;
        address : {
            homeAddress : string;
            officeAddress : string;
        }
    } =  {
        name : "meskat",
        email : "meskat@gmail.com",
        password : "******",
        address : {
            homeAddress : "Kushtia , Bangladesh",
            officeAddress : "world"
        }
    }

    const {name , email , address :{officeAddress : ofA /* name alies */}} = user;
    console.log(name)
    console.log(email)
    console.log(ofA);


    //array destructuring
    const subjectName : string[] = ["dbmx" , "cloud" , "cN"];
    const [ , , sub3] = subjectName;
    console.log(sub3);



}