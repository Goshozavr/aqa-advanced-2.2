//method 1
function calculateAreaDeclaration(width1, height1){
    const area = width1 * height1
    return area 
}  
const area = calculateAreaDeclaration(5,10)
console.log('Rectangle area by declaration:') 
console.log(area) 

//method 2
const calculateAreaExpression = function (width2, height2){
    return width2 * height2
}
console.log('Rectangle area by expression:')
console.log(calculateAreaExpression(3,7))

//method 3
const calculateAreaArrow = (width3, height3) => width3 * height3
console.log('Rectangle area by arrow concise:')
console.log(calculateAreaArrow(8,5))