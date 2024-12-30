{
    //constraints using keyof

    type vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner1 = "bike" | "car" | "ship" //manually
    type Owner2 = keyof vehicle

    const myVehicle : Owner2 = "bike"

    //2

    const getPropertyValue = <X , Y extends keyof X>(obj : X , key : Y) => {
        return obj[key]
    };

    const user = {
        name : "skjie",
        age : 34,
        address : "sdsd"
    };

    const car = {
        model : "w-443",
        year : 2000
    }

    const result1 = getPropertyValue(car , "year");
    console.log(result1);


    
}