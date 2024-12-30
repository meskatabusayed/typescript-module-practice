{
    //constraints In typescript

    const addCourseToStudent = <T extends {id : number , name : string , email : string; phone : string}> (student : T) => {
        const Course : string  = 'NLWD';
        return {
            ...student,
            Course
        }

    }

    
    

    const student1 = addCourseToStudent({id : 24 , name : "sd" , email : "ds" , phone : "sdsfd" , devType : "df" , u_name : "dsed"});
    console.log(student1);
}