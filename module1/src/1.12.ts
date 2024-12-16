{
    //nullable types
    const searchName = (value : string | null) => {
        if(value){
            console.log("Searching")
        }else{
            console.log("nothing to search")
        }

    }
    searchName("jshd");

    //unknown types
    const valueType = (value : unknown) => {

        if(typeof value === "number"){
            console.log(typeof value)
        }
        else if(typeof value === "string"){
            console.log(typeof value)
        }
        else{
            console.log("Nothing")
        }
    }
    valueType("sdf");
    //

    //never type
    /* const throwError = (msg : string) : never => {
        throw new Error(msg);
    }
    throwError("error now sdfdtg"); */
}