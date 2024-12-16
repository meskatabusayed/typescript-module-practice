{
    //type assertion / type narrowing
    type CustomError = {
        message : string;
    }

    try{

    }catch(error){
        console.log((error as CustomError).message)

    }
}