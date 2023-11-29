const BASE_URL = "https://jsonplaceholder.typicode.com"

function fetchToDoById(){
    return fetch(`${BASE_URL}/todos/1`)
    .then((response) => response.json())
}

function fetchUserById(){
    return fetch(`${BASE_URL}/users/1`)
    .then((response) => response.json())
}

Promise.race([fetchToDoById(), fetchUserById()])
    .then ((result) => {
        console.log("Перший виконаний проміс:", result)
    })
    .catch ((error) => {
        console.log("Something went wrong", error)
    })

Promise.all([fetchToDoById(), fetchUserById()])
    .then((result) => {
        console.log("Promises values:", result)
    })
    .catch((error) => {
        console.log("Some error", error)
    })