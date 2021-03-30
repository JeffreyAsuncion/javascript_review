{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
        // this.outputStuff = function(){
        //     console.log("My name  " + this.name, this.interests);
        // }
    }
    User.prototype.greet = function(){
        console.log("My name is " + this.name, this.interests);
    }

    let me = new User("Caleb", ["cooking", "eating", "exercise"]);
    let you = new User("Camila", ["hotwheels"]);
    console.log(me, you);

    me.greet();
    you.greet();
}