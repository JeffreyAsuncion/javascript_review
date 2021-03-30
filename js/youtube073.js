{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
    }

    // Factory Function
    function newUser(name, interests){
        let person = {
            name: name,
            interests: interests
        };

        return person;
    }


    let me = new User("Caleb", ["cooking", "eatting", "exercise"]);
    let you = new User("Camila", ["kickboxing", "swimming", "eatting"]);
    let other = newUser("FactoryMan", ["working"])
    console.log(me, you);
    console.log(other);
    // you can add properties after constructor
    me.membership = "Gold";
    console.log(me);
}