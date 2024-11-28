{
    //spread operator: //in array
    const friend1 : string[] = ["rahim" , "Karim" , "disha" , "paku"];
    const friends2 : string[] = ["mm" , "mtm" , "sdc"];
    /* const allFriends : string[] = [...friend1 , ...friends2]
    console.log(allFriends) */
    friend1.push(...friends2);
    console.log(friend1);

    //spread operator : object
    const familly = {
        fatherName : "Mr. Abdul Lotif",
        motherName : "Mst. Muslima"

    }

    const study = {
        schoolName : "PDB High School",
        collegeName : "Police linec school and college",
        universityName : "Brainware University"
    }

    const allThings = {
        ...familly,
        ...study
    }
    console.log(allThings);


    //rest operator : array
    const myAllFriends = (...friends : string[])  => {
        friends.forEach((friend : string) => console.log(`Hello ${friend}`))


    }

    myAllFriends("Abdul" , "Jihan" , "Rahim");

    //rest operator : object

    const country = {
        name : "Bangladesh",
        origin : "Asian",
        population : 18
    }

    const {name , ...rest} = country;
    console.log(name);
    console.log(rest);




}