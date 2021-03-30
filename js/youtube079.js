{
    let user = {
        active: false,
        sayHello: function(){
            return this.name + " says hi!";
        }
    };

    let student = {
        name: "Jeff",
        major: "English"
    };

    let teacher = {
        name: "Caleb",
        teaching: ["math", "science"]
    };

    // inheritance
    // how to set the prototype of an object
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);
    console.log("student: " + student.active);
    console.log("teacher: " + teacher.active);

    // overide??
    student.active = true;
    console.log("student: " + student.sayHello());
    console.log("teacher: " + teacher.sayHello());

}