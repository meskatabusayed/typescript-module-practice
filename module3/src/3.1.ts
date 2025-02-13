{
    //class and object
    class Book{
    
        constructor(public name : string ,  public author : string , public price : number ){}

        review(comment : string){
            console.log(`the review is ${comment}`)
        }
    }

    const book1 = new Book("Na bole programming" , "Meskat" , 560);
    console.log(book1);
    console.log(book1.author);
    console.log(book1.name);
    console.log(book1.price);
    book1.review("Awesome book");


}