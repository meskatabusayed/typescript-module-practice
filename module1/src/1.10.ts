{
    //union and intersection types
    //union types : means OR(|)
   // type FrontendDeveloper = "badDeveloper" | "GoodDeveloper"
    //const newDeveloper : FrontendDeveloper = "GoodDeveloper";

    //intersection types : mesns logical and (&)
    type FrontendDeveloper = {
        skils : string[];
        designation1 : "F-dev"
    }

    type BackendDeveloper = {
        skils : string[];
        designation2 : "B-dev"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper : FullstackDeveloper = {
        skils : ["html" , "css"],
        designation1 : "F-dev",
        designation2 : "B-dev"
    }





}