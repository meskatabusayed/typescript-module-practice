{
   
    //map types
     type AreaNumber = {
        height : number;
        width : number;
     } 

    //  type AreaString = {
    //     [key in keyof AreaNumber] : string;
    //  }

     //look up type
    //  type Height = AreaString["height"]

     type AreaString<T> = {
        [key in keyof T] : T[key]
     }

     const area1 : AreaString<{height : string ; width : number ; random : string}> = {
        height : "sd",
        width : 44,
        random : "sd"
     } 





    
 

}