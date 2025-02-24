{
    //Mapped types
    //map
    const arrayofNumbers : number[] = [3, 5, 6, 7];
    const arrayOfString : string[] = arrayofNumbers.map((number : number)  => {
       return  number.toString()
    })

    console.log(arrayOfString);
}