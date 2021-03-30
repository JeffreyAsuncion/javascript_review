{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
    }

    let me = new User("Caleb", ["cooking", "eatting", "exercise"]);
    let you = new User("Camila", ["kickboxing", "swimming", "eatting"]);
    console.log(me, you);

    // you can add properties after constructor
    me.membership = "Gold";
    console.log(me);
}