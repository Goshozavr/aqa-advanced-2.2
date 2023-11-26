const BASE_URL = "https://jsonplaceholder.typicode.com"

function toDoById(){
    return Promise.resolve(fetch(`${BASE_URL}/todos/1`))
    .then((response) => response.json())
}

function userById(){
    return Promise.resolve(fetch(`${BASE_URL}/users/1`))
    .then((response) => response.json())
}


const promise1 = new Promise((resolve) => setTimeout(() => resolve(toDoById), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(userById), 500))

Promise.race([promise1, promise2])
    .then ((result) => {
        console.log("Перший виконаний проміс:", result)
    })
    .catch ((error) => {
        console.log("Something went wrong", error)
    })

Promise.all([toDoById(), userById()])
    .then((result) => {
        console.log("Promises values:", result)
    })
    .catch((error) => {
        console.log("Some error", error)
    })