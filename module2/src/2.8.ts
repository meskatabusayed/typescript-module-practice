{
   //asyncronous typescript

    type TodoData  = {
         userId: number;
         id: number;
         title: string;
         completed: boolean;
    }


    const todoData  = async () : Promise<TodoData> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json()
        console.log(data)
        return data;
        
    }
    todoData();

    //promise

    type Something = {something : string};

    //simulate

    const createPromise = () : Promise<Something> => {
        return new Promise<Something>((resolve , reject) => {
            const data : Something = {something : "sedwd"};
            if(data){
                resolve(data)
            }else {
                reject("Fail to load data")
            }
        })
    }


    //calling create promise function

    const showData = async () : Promise<Something> => {
        const data : Something = await createPromise();
        console.log(data);
        return data;
    }

    showData();

    

    
}