let array = [1,2,3,4,5]


//Q1
const logNumbers = () => {
  array.forEach(function (number) {
    console.log(number);
    
  }) 
}
// logNumbers()

//Q2 
const multipleNumbers = () => {
  array.forEach(function (number) {
    console.log(number * number);
    
  })
}
// multipleNumbers()

//Q3
const newArray = () => {
  let updatedArray = array.map(function(number) {    
    return number * 2
    
  }
)
console.log(updatedArray);
}
// newArray()

//Q4 
const sumArray = () => {
  let sum = 0
  array.forEach(function (n) {
    sum += n
  })
  console.log(sum);
}
// sumArray()

//Q5 
