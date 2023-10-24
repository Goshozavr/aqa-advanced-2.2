function divide(numerator, denominator){
        if(denominator === 0){
            throw new Error('Хто тебе генія вчив ділити на нуль? Повернися до школи, будь ласка')
        }
        if(typeof numerator !== 'number' && typeof denominator !== 'number'){
            throw new Error('Ну ти правда якийсь цікавий, як можна виконувати операцію ділення не з числом?')
        }
        return numerator / denominator
    }
    try{ 
        console.log(divide(10, 2))
        console.log(divide('pupa', 'lupa'))
        //console.log(divide(10, 0))
    }catch (e) {
        console.log(e.message)
    }
    finally{
        console.log('Робота завершена')
    }