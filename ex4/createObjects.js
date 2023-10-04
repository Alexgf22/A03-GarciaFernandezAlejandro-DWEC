const Person = {
    name: "",
    age: 0,
    gender: "",
    getInfo: function() {
        return `Name: ${this.name}, is ${this.age} years old and identifies as ${this.gender}`;
    }
};

const person1 = Object.create(Person);
person1.name = "Alejandro";
person1.age = 20;
person1.gender = "male";

const resultElement = document.getElementById("result");
resultElement.innerHTML = person1.getInfo();


// Define the Student object that extends from Person
const Student = Object.create(Person);
Student.course = "";
Student.group = "";
Student.enroll = function(course, group) {
    this.course = course;
    this.group = group;
    const enrollmentMessage = `${this.name} has been enrolled in the course ${course} and is in group ${group}`;
    return enrollmentMessage;
};

const student1 = Object.create(Student);
student1.name = "Peter";
student1.age = 20;
student1.gender = "male";

const enrollmentMessage = student1.enroll("Biology", "B");

const studentInfoElement = document.getElementById("student-info");
studentInfoElement.innerHTML = student1.getInfo();

const courseInfoElement = document.getElementById("course-info");
courseInfoElement.innerHTML = `Course: ${student1.course}, Group: ${student1.group}`;


// Define the Teacher object that extends from Person
const Teacher = Object.create(Person);
Teacher.module = "";
Teacher.level = "";
Teacher.impart = function(module, level) {
    this.module = module;
    this.level = level;
    const impartMessage = `${this.name} imparts the module ${module} at level: ${level}`;
    return impartMessage;
};

const teacher1 = Object.create(Teacher);
teacher1.name = "Lucy";
teacher1.age = 32;
teacher1.gender = "female";

const impartMessage = teacher1.impart("English", "Advanced");

const impartInfoElement = document.getElementById("impart-info");
impartInfoElement.innerHTML = impartMessage;
