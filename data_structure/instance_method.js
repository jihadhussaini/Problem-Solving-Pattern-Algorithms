class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b) {return a+b});
        return sum/this.scores.length;
    }
    static EnrollStudents() {
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Jihad", "Akbar", 10);
let secondStudent = new Student("Faiza", "Ummul", 7);

// console.log(firstStudent);
// console.log(secondStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
firstStudent.addScore(90);
firstStudent.addScore(95);
firstStudent.EnrollStudents();
console.log(firstStudent.calculateAverage());
console.log(firstStudent);