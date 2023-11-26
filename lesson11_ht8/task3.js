const BASE_URL = "https://jsonplaceholder.typicode.com"

async function fetchTodoById(id){
    return fetch(`${BASE_URL}/todos/1`)
    .then((response) => response.json())
}

fetchTodoById(1).then((value) => console.log("To do:", value))

async function fetchUserById(id){
    const response = await fetch(`${BASE_URL}/users/1`) 
    const jsonBody = await response.json()
    return jsonBody
}

fetchUserById(1).then((value) => console.log("User 1:", value))
