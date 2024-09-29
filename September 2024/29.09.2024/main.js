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

//Q21
array = [1, 2, 3, 4, 5] 
const ifAboveThree = () => {
let isAboveThree = array.some(function (number) {
    return number > 3
  })
  console.log(isAboveThree);
  
}
// ifAboveThree()

//Q22
array = [2, 4, 6, 8, 10] 
const ifAllPairs = () => {
  let onlyPairs = array.every(function (number){
    return number % 2 === 0
  })
  console.log(onlyPairs);
}
// ifAllPairs()

//Q23
array = ['תפוח', 'בננה', 'דובדבן']
const ifMoreThanSix = () => {
let isAboveSix = array.some(function (string) {
    return string.length > 6
  })
  console.log(isAboveSix);
}
// ifMoreThanSix()

//Q24
array = ['cat', 'dog', 'elephant'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const funcIsZleli = () => {
  let letterConstant = array.every(function (string) {
    // Check if the first character of the string is in the consonants array
    return consonants.includes(string[0]);
  });
  console.log(letterConstant);
}
// funcIsZleli();

//Q25
array = [false, false, true, false];
const isTrueFunc = () => {
  let isTruthy = array.some(function (condition) {
    return condition;
  });
  
  console.log(isTruthy);
}

// isTrueFunc();

//Q26
array = [1, 2, 3, 4, 5]
const findFBigNum = () => {
  let firstAboveThree = array.find(function (number){
    return number > 3
  })
  console.log(firstAboveThree);
  
}
// findFBigNum()

//Q27
array = [1, 3, 5, 2, 4, 6]
const findFirstPair = () => {
  let firstIndexPairMatch = array.findIndex(function (number) {
    return number % 2 === 0;
  });
  
  console.log(firstIndexPairMatch);
}

// findFirstPair();

//Q28
array = ['תפוח', 'בננה', 'דובדבן']
const firstAboveFiveL = () => {
  let firstAboveFive = array.find(function (string) {
    return string.length > 5
  })
  console.log(firstAboveFive);
  
}
// firstAboveFiveL()

//Q29
array = ['תפוח', 'בננה', 'דובדבן', 'תמר'];
const findCherryFunc = () => {
  let findCherry = array.findIndex(function (word) {
    return word === 'דובדבן';
  });
  
  if (findCherry !== -1) {
    console.log(`Found 'דובדבן' at index ${findCherry}`);
  } else {
    console.log('Didn\'t find דובדבן.');
  }
}
// findCherryFunc();

//Q30
array = [1, 2, 3, -4, 5, -6]
const findFNegativeFunc = () => {
  let firstN = array.find(function (n) {
    return n < 0
  })
  console.log(firstN);
  
}
// findFNegativeFunc()

//Q31
array = [3, 1, 4, 1, 5, 9, 2, 6, 5]
const upOrderFunc = () => {
  let upOrder = array.sort(function (a,b) {
    return a-b 
  })
  console.log(upOrder);
  
}
// upOrderFunc()

//Q32
array = ['banana', 'cherry', 'apple', 'date'];
const alphabetOrderFunc = () => {
  let alphabetOrder = array.sort(function (a, b) {
    return a.localeCompare(b);
  });
  
  console.log(alphabetOrder);
}
// alphabetOrderFunc();

//Q33
array =  [3, 1, 4, 1, 5, 9, 2, 6, 5]
const downOrderFunc = () => {
  let upOrder = array.sort(function (a,b) {
    return b-a 
  })
  console.log(upOrder);
  
}
// downOrderFunc()

//Q34
array = ['banana', 'cherry', 'apple', 'date'];
const lengthFunc = () => {
  let lengthSort = array.sort(function (a, b) {
    return a.length - b.length; // Sort based on string length
  });
  
  console.log(lengthSort);
}
// lengthFunc();

//Q35
let arrayObj =  [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}]
const sortArrayObj = () => {
  let sortThis = arrayObj.sort(function (a,b) {
    return b.age - a.age
  })
  console.log(sortThis);
}
// sortArrayObj()

//Q36
array = [1, [2, 3], [4, [5, 6]]]
const flatArrayFunc = () => {
  let flatArray = array.flat(4)
  console.log(flatArray);
  
}
// flatArrayFunc()

//Q37
array = [1, [2, [3, [4]]]]
const flatArrayFuncTwo = () => {
  let flatArray = array.flat(2)
  console.log(flatArray);
}
// flatArrayFuncTwo()

//Q38
array = [1, 2, , 4, 5]
const flatClean = () => {
  let newFClean = array.flat(1)
  console.log(newFClean);
}
// flatClean()

//Q39
array = ['א', ['ב', 'ג'], 'ד']
const alefBetFunc = () => {
  let newAlef = array.flat(2)
  console.log(newAlef);
}
// alefBetFunc()

//Q40
array = [1, [2, [3, [4, [5]]]]]
const infinityFlat = () => {
  let infinityUse = array.flat(Infinity)
  console.log(infinityUse);
}
// infinityFlat()

//Q41
array = ['א', 'ב', 'ג', 'ד']
const forEachFunc = () => {
  let logEachLetter = array.forEach(function (letter){
    console.log(letter);
    
  })
}
// forEachFunc()

//Q42
