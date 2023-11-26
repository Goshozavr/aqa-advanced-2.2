function printWithDelay(text, ms){   
    setTimeout(() => console.log(text), ms)
}

printWithDelay("This text will be shown after 2 sec", 2000)
printWithDelay("This text will be shown after 1 sec", 1000)