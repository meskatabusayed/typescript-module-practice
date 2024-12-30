{
    //function with generic
    const getContent =<T>(content : T) : T => {
        return content;
    }

    const result = getContent<boolean>(true);
    // console.log(result);

    //generic function
    const createArrayWithGeneric = <T> (param : T) : T[] => {
        return [param];

    }

    const res1Generic = createArrayWithGeneric<string[]>(["Bangladesh" , "India" , "USA" , "Chaina"] );
    // console.log(res1Generic);

    type User = {id : number; name : string ; email : string}

    const resGenericObj = createArrayWithGeneric<User>({
        id : 2324,
        name : "Msed",
        email : "dsdd"
    });

    //generic Array with tuple

    const createArrayWithTuple = <T,Q> (param1 : T , param2 :Q) : [T , Q] => {
        return [param1 , param2];


    }


    const res21 = createArrayWithTuple<string , number>("Meskat" , 56);
    // console.log(res21);

    const res22 = createArrayWithTuple<string , {id : number , email : string}>("Meskat vai" , {id : 324 , email : "sds"});
    // console.log(res22);

    //3

    const addCourseToStudent = <T> (student : T) => {
        const Course : string  = 'NLWD';
        return {
            ...student,
            Course
        }

    }

    type S_User = {
        name : string;
        email : string;
        devType : string;
    }

    const student1 = addCourseToStudent<S_User>({name : "sd" , email : "ds" , devType : "df"})
    console.log(student1);





}