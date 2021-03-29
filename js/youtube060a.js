{
    let me = {
        name: "Caleb",
        outputMe: function(){
            console.log(this);
            console.log(this.name);
        }
    };

    me.outputMe(); // invoke a function as a method

}