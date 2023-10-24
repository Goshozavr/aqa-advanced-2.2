function divide(numerator, denominator){
    try{
        if(denominator === 0){
            throw new Error('Хто тебе генія вчив ділити на нуль? Повернися до школи, будь ласка')
        }
        if(typeof numerator !== 'number' && typeof denominator !== 'number'){
            throw new Error('Ну ти правда якийсь цікавий, як можна виконувати операцію ділення не з числом?')
        }
        return numerator / denominator
    }catch (e) {
        console.log(e.message)
    }
    finally{
        console.log('Робота завершена')
    }
}

console.log(divide(4,0))
console.log(divide('pupa', 'lupa'))
console.log(divide(20,5))