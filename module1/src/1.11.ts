{
    //Ternary Operator
    //nullish coalescing operator
    const isAuthenticated = undefined;
    const result1 = isAuthenticated ?? "Guest";
    console.log({result1}); 

    //optional chaining
    type User = {
        name : string;
        
        address : {
            city : string,
            road : string;
            address ? : string;
        }
    }

    const user : User = {
        name : "ndksj",
        address : {
            city : "Kushtia",
            road : "23235",
            
        }
    }

    const address = user?.address?.address ?? "No address available";
    console.log({address});
    
}