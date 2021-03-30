{
    function doSomething(){
        throw { error: "Tis broke", code: -1};
    }

    try{
        doSomething();
    } catch(e){
        console.log(e);
        console.log("Error");
    } finally {
        console.log("Wrapping things up...")
    }
}