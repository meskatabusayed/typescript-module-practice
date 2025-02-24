{
    //Mapped types
    //map
    const arrayofNumbers : number[] = [3, 5, 6, 7];
    const arrayOfString : string[] = arrayofNumbers.map((number : number)  => {
       return  number.toString()
    })

    console.log(arrayOfString);

    //map types - onek ta map ar motoi

    type AreaNumber = {
        height : number;
        width : number;
    }

    type AreaString = {
        [key in keyof AreaNumber] : string;
    }

    type Height = AreaNumber["height"];

    //map types with generic

    type AreaString1<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString1 <{height : string ; width : string}> = {
        height : "we",
        width : "se"
    }
}