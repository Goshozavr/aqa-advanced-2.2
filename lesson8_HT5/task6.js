const numberList = [1, 10, 14, 2, 4, 5, 43, 34]
const numberList1 = numberList.slice()
numberList1.sort(function (a, b) {
    return a - b
})
console.log(numberList, numberList1)