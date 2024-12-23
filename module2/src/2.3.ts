{
    //Generic type
    type GenericArray<t> = Array<t>
    const names : GenericArray<string> = ["sd"];
    const roll : GenericArray<number> = [23 , 45, 55, 67];
    const user : GenericArray<{name : string ; IsAdmin : boolean}> = [
        {
            name : "M,",
            IsAdmin : true
        },
        {
            name : "M,",
            IsAdmin : true
        },
        {
            name : "M,",
            IsAdmin : true
        }
    ]

    //Generic tuple
    type GenericTuple<X , Y , Z> = [X , Y , Z];
    const person : GenericTuple<string , number , string> = ["sd" , 44 , "sdsd"];

    const user2 : GenericTuple<number , string , {name : string; age : number}> = [
        45, "edde", {
            name  : "d",
            age : 34
        }
    ]
}