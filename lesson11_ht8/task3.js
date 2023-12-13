const BASE_URL = "https://jsonplaceholder.typicode.com"

async function fetchToDoById(id){
    return fetch(`${BASE_URL}/todos/1`)
    .then((response) => response.json())
}

async function fetchUserById(id){
    const response = await fetch(`${BASE_URL}/users/1`) 
    const jsonBody = await response.json()
    return jsonBody
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