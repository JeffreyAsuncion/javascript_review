{
    let user = {
        active: true
    };

    let student = {
        major: "English"
    };

    let teacher = {
        teaching: ["math", "science"]
    };

    // inheritance
    // how to set the prototype of an object
    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);
    console.log("student: " + student.active);
    console.log("teacher: " + teacher.active);

    // overide??
    student.active = false;
    console.log("student: " + student.active);
    console.log("teacher: " + teacher.active);

}