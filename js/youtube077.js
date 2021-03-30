{
    let user = {
        active: true
    };

    let teacher = {
        teaching: ["math", "science"]
    };

    // inheritance
    // how to set the prototype of an object
    Object.setPrototypeOf(teacher, user);
    console.log(teacher);
    console.log(teacher.active);
}