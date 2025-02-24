{
    //conditional types : typescript a jodi kono type onno kono akti type ar oporee conditionaly dependent thake tahole seti hobe conditional type
    //1
    type a1 = number;
    type b1 = string;
    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
      //2
      type Sheikh = {
        bike : string;
        car : string;
        ship : string;
        plane : string;
      }

      type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
      type HasPlane = CheckVehicle<"plane">



    
}