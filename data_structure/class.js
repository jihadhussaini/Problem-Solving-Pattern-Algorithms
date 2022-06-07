class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Jihad", "Akbar", 10);
let secondStudent = new Student("Faiza", "Ummul", 7);

console.log(firstStudent);
console.log(secondStudent);