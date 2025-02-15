{
    //type gurd
    //type of gurd

    type productPrice = number | string;

    const add = (param1 : productPrice , param2 : productPrice) => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;

        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    const result = add(23 , 56);
    console.log(result);

    //in gurd

    type NormailUser = {
        name : string;
    }

    type AdminUser = {
        name : string;
        role : string;
    }

    const getUser = (user : NormailUser | AdminUser) => {
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normailUser : NormailUser = {
        name : "Meskat"
    }

    const adminUser : AdminUser = {
        name : "Abu Sayed",
        role : "Admin"
    }

    getUser(adminUser);


}