function Student(firstName, lastName, age, courses){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.courses = courses
}

const student1 = new Student("Godfrey", "Johnson", 27, ["Biology", "Chemistry", "Math"])
console.log(student1)