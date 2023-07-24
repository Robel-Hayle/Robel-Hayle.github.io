// Exercise 1
String.prototype.filter = function (bannedWords) {
    return this.split(' ')
        .filter(word => !bannedWords.includes(word))
        .join(' ');
};

console.log("This house is not nice!".filter(['not']));
// Output: "This house is nice!"

// Exercise 2
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());
// Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3 using object prototype approach for inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method for Person
Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

// Method for Person
Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

// Function Constructor for Teacher derived from Person
function Teacher(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

// Setting up inheritance using Object.create
Teacher.prototype = Object.create(Person.prototype);

// Method for Teacher
Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
};

// Creating a Teacher object and calling its teach method
const teacher = new Teacher("John Doe", 35, "Mathematics");
teacher.teach("WAP");



// Exercise 3 using Object.create and a factory function
function createPerson(name, age) {
    return {
        name,
        age,
        greeting() {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute() {
            console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
        },
    };
}

// Factory function for creating a Teacher derived from a Person
function createTeacher(name, age, department) {
    const teacher = Object.create(personMethods);
    teacher.name = name;
    teacher.age = age;
    teacher.department = department;
    return teacher;
}

// Common methods for both Person and Teacher
const personMethods = {
    greeting() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
    },
};

// Method for Teacher
personMethods.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
};

// Creating a Teacher object and calling its teach method
const teacher2 = createTeacher("Sam Smith", 40, "History");
teacher2.teach("World History");


// // Exercise 4 using object prototype approach for inheritance
// Function Constructor for Student derived from Person
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

// Setting up inheritance using Object.create
Student.prototype = Object.create(Person.prototype);

// Method for Student
Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Function Constructor for Professor derived from Person
function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

// Setting up inheritance using Object.create
Professor.prototype = Object.create(Person.prototype);

// Method for Professor
Professor.prototype.salutation = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Creating a Student object and calling its greeting method
const student = new Student("Alice", 20, "Computer Science");
student.greeting();

// Creating a Professor object and calling its salutation method
const professor = new Professor("Dr. Smith", 45, "Computer Science");
professor.salutation();

// // Exercise 4 using Object.create and a factory function
// Factory function for creating a Student derived from a Person
function createStudent(name, age, major) {
    const student = Object.create(personMethods);
    student.name = name;
    student.age = age;
    student.major = major;
    return student;
}

// Factory function for creating a Professor derived from a Person
function createProfessor(name, age, department) {
    const professor = Object.create(personMethods);
    professor.name = name;
    professor.age = age;
    professor.department = department;
    return professor;
}

// Method for Student
personMethods.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Method for Professor
personMethods.salutation = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Creating a Student object and calling its greeting method
const student2 = createStudent("Bob", 22, "Biology");
student2.greeting();

// Creating a Professor object and calling its salutation method
const professor2 = createProfessor("Dr. Johnson", 50, "Physics");
professor2.salutation();
