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
array = ['Hello', ' ', 'World', '!']
const connectStrings = () => {
  let completeWord = ""
  array.forEach(function (string) {
    completeWord += string
  })
  console.log(completeWord);
}
// connectStrings()

//Q6
array = [5,4,3,2,1]
const multipleByTwoArray = () => {
  let updatedArray = array.map(function (number) {
    number * 2
    return number * 2
  })
  console.log(updatedArray);
  
}
// multipleByTwoArray()

//Q7
array = ['תפוח', 'בננה', 'דובדבן']
const lengthArray = () => {
  lengthCount = array.map(function (string) {
    return string.length
    
  })
  console.log(lengthCount);
  
}
// lengthArray()

//Q8
array = [1,4,9,16,25]
const squareNumbersFunc = () => {
  newSquareNumbers = array.map(function (n) {
    return n ** 2
  })
  console.log(newSquareNumbers);
}
// squareNumbersFunc()

//Q9
array = ['hello', 'world']
const trumpCaseFunc = () => {
  trumpCaseArray = array.map(function (string) {
    return string.toUpperCase();
  })
  console.log(trumpCaseArray);
}
// trumpCaseFunc()

// Q10
array = [true, false, true]
const newBoolean = () => {
  let booleanNewArray = array.map(function (condition) {
    return !condition; // Negate the boolean value
  });
  console.log(booleanNewArray);
}
// newBoolean();

//Q11
array = [6,5,4,3,2,1]
const divideByTwoNumbersFunc = () => {
  filterByTwo = array.filter(function (num) {
    return num % 2 === 0
  })
  console.log(filterByTwo);
}
// divideByTwoNumbersFunc()

//Q12
array = ['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי']
const fiveLetterFunc = () => {
  fiveOnly = array.filter(function (word) {
    return word.length > 5
  })
  console.log(fiveOnly);
}

// fiveLetterFunc()

//Q13
array = [5, 10, 15, 20, 25]
const aboveTenFunc = () => {
  onlyTenAbove = array.filter(function (number) {
    return number > 10
  })
  console.log(onlyTenAbove);
}
// aboveTenFunc()

//Q14
array = ['תפוח', 'בננה', 'תפוז', 'דובדבן']
const onlyTafFunc = () => {
  onlyTafArray = array.filter(function (string) {
    return string[0] === 'ת'
  })
  console.log(onlyTafArray);
}
// onlyTafFunc()

//Q15
array = [6,5,4,3,2,1]
const pairsOnlyFunc = () => {
  pairsOnly = array.filter(function (number) {
    return number % 2 === 0
  })
  console.log(pairsOnly);
  
}
// pairsOnlyFunc()

//Q16
array = [5,4,3,2,1]
const sumUseReduceFunc = () => {
  sumNumbers = array.reduce(function (total,number) {
    return total + number
  }, [])
  console.log(sumNumbers);
}
// sumUseReduceFunc()

//Q17
const factorialFunc = () => {
  factorialNumbers = array.reduce(function (total,number) {
    return total *= number
  }, [])
  console.log(factorialNumbers);
}
// factorialFunc()

//Q18
array = [10, 5, 15, 20, 25];
const biggestNumberFunc = () => {
  let biggestNum = array.reduce(function (total, number) {
    return total > number ? total : number;
  },[]);
  console.log(biggestNum);
}
// biggestNumberFunc();

//Q19
array = ['שלום', ' ', 'עולם', '!']
const connectUseReduce = () => {
  let connectWords = array.reduce(function (firstAString,firstBString) {
    return firstAString+firstBString
  },[])
  console.log(connectWords);
}
// connectUseReduce()

// Q20
array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const countNumTimesFunc = () => {
  let countNumbersTimes = array.reduce(function (acc, currentNum) {
    if (acc[currentNum]) {
      acc[currentNum]++;
    } else {
      acc[currentNum] = 1;
    }
    return acc; 
  }, {}); 

  console.log(countNumbersTimes);
}

// countNumTimesFunc();


