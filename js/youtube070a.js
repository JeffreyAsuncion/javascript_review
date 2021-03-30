{
    try{
        doesntexist;
    } catch(e){
        //print the catch exception
        console.log(e);
    } finally{
        // will always execute
        console.log("test");
    }
   
}