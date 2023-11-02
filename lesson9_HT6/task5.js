const users = [
    {
        name: "John",
        job: "Robber",
        age: 30
    },
    {
        name: "Carry",
        job: "Singer",
        age: 27
    },
    {
        name: "Harry",
        job: "Auror",
        age: 24
    }
]
for (const {name, job, age} of users) {
    console.log(`${name} is ${age} years old and this person is effective ${job}`)
}