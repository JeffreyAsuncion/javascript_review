{
    // for a constructor
    function User(){
        this.active = false;
    }

    User.prototype.sayHello = function(){
        return this.name + " says hi!";
    };

    function Student(name, major){
        this.name = name;
        this.major = major;
    }

    Student.prototype = new User();

    function Teacher(name, teaching){
        this.name = name;
        this.teaching = teaching;
    }

    Teacher.prototype = new User();
    Teacher.prototype.sayHello = function(){
        return "Teacher says hi!";
    }

    // This way you can create a loop to create an array of students and teachers
    let student = new Student("Peasant student", "English");
    let teacher = new Teacher("Caleb Curry", ["math", "science"]);

    console.log(student, teacher);

}
