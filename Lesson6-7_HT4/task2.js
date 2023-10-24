
function printAge(age){
    if(age >=18){
        const isAdult = true
        console.log("isAdult", isAdult, "because the age of this person is", age, "years old")
    }
    else{
        const isAdult = false
        console.log("isAdult", isAdult, "because the age of this person is", age, "years old")
    }
}

printAge(15)
printAge(25)
