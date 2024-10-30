let array = [1, 2, 3, 4, 5];

//Q1
const logNumbers = () => {
  array.forEach(function (number) {
    console.log(number);
  });
};
// logNumbers()

//Q2
const multipleNumbers = () => {
  array.forEach(function (number) {
    console.log(number * number);
  });
};
// multipleNumbers()

//Q3
const newArray = () => {
  let updatedArray = array.map(function (number) {
    return number * 2;
  });
  console.log(updatedArray);
};
// newArray()

//Q4
const sumArray = () => {
  let sum = 0;
  array.forEach(function (n) {
    sum += n;
  });
  console.log(sum);
};
// sumArray()

//Q5
array = ["Hello", " ", "World", "!"];
const connectStrings = () => {
  let completeWord = "";
  array.forEach(function (string) {
    completeWord += string;
  });
  console.log(completeWord);
};
// connectStrings()

//Q6
array = [5, 4, 3, 2, 1];
const multipleByTwoArray = () => {
  let updatedArray = array.map(function (number) {
    number * 2;
    return number * 2;
  });
  console.log(updatedArray);
};
// multipleByTwoArray()

//Q7
array = ["תפוח", "בננה", "דובדבן"];
const lengthArray = () => {
  lengthCount = array.map(function (string) {
    return string.length;
  });
  console.log(lengthCount);
};
// lengthArray()

//Q8
array = [1, 4, 9, 16, 25];
const squareNumbersFunc = () => {
  newSquareNumbers = array.map(function (n) {
    return n ** 2;
  });
  console.log(newSquareNumbers);
};
// squareNumbersFunc()

//Q9
array = ["hello", "world"];
const trumpCaseFunc = () => {
  trumpCaseArray = array.map(function (string) {
    return string.toUpperCase();
  });
  console.log(trumpCaseArray);
};
// trumpCaseFunc()

// Q10
array = [true, false, true];
const newBoolean = () => {
  let booleanNewArray = array.map(function (condition) {
    return !condition; // Negate the boolean value
  });
  console.log(booleanNewArray);
};
// newBoolean();

//Q11
array = [6, 5, 4, 3, 2, 1];
const divideByTwoNumbersFunc = () => {
  filterByTwo = array.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(filterByTwo);
};
// divideByTwoNumbersFunc()

//Q12
array = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
const fiveLetterFunc = () => {
  fiveOnly = array.filter(function (word) {
    return word.length > 5;
  });
  console.log(fiveOnly);
};

// fiveLetterFunc()

//Q13
array = [5, 10, 15, 20, 25];
const aboveTenFunc = () => {
  onlyTenAbove = array.filter(function (number) {
    return number > 10;
  });
  console.log(onlyTenAbove);
};
// aboveTenFunc()

//Q14
array = ["תפוח", "בננה", "תפוז", "דובדבן"];
const onlyTafFunc = () => {
  onlyTafArray = array.filter(function (string) {
    return string[0] === "ת";
  });
  console.log(onlyTafArray);
};
// onlyTafFunc()

//Q15
array = [6, 5, 4, 3, 2, 1];
const pairsOnlyFunc = () => {
  pairsOnly = array.filter(function (number) {
    return number % 2 === 0;
  });
  console.log(pairsOnly);
};
// pairsOnlyFunc()

//Q16
array = [5, 4, 3, 2, 1];
const sumUseReduceFunc = () => {
  sumNumbers = array.reduce(function (total, number) {
    return total + number;
  }, []);
  console.log(sumNumbers);
};
// sumUseReduceFunc()

//Q17
const factorialFunc = () => {
  factorialNumbers = array.reduce(function (total, number) {
    return (total *= number);
  }, []);
  console.log(factorialNumbers);
};
// factorialFunc()

//Q18
array = [10, 5, 15, 20, 25];
const biggestNumberFunc = () => {
  let biggestNum = array.reduce(function (total, number) {
    return total > number ? total : number;
  }, []);
  console.log(biggestNum);
};
// biggestNumberFunc();

//Q19
array = ["שלום", " ", "עולם", "!"];
const connectUseReduce = () => {
  let connectWords = array.reduce(function (firstAString, firstBString) {
    return firstAString + firstBString;
  }, []);
  console.log(connectWords);
};
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
};
// countNumTimesFunc();

//Q21
array = [1, 2, 3, 4, 5];
const ifAboveThree = () => {
  let isAboveThree = array.some(function (number) {
    return number > 3;
  });
  console.log(isAboveThree);
};
// ifAboveThree()

//Q22
array = [2, 4, 6, 8, 10];
const ifAllPairs = () => {
  let onlyPairs = array.every(function (number) {
    return number % 2 === 0;
  });
  console.log(onlyPairs);
};
// ifAllPairs()

//Q23
array = ["תפוח", "בננה", "דובדבן"];
const ifMoreThanSix = () => {
  let isAboveSix = array.some(function (string) {
    return string.length > 6;
  });
  console.log(isAboveSix);
};
// ifMoreThanSix()

//Q24
array = ["cat", "dog", "elephant"];
const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const funcIsZleli = () => {
  let letterConstant = array.every(function (string) {
    // Check if the first character of the string is in the consonants array
    return consonants.includes(string[0]);
  });
  console.log(letterConstant);
};
// funcIsZleli();

//Q25
array = [false, false, true, false];
const isTrueFunc = () => {
  let isTruthy = array.some(function (condition) {
    return condition;
  });

  console.log(isTruthy);
};

// isTrueFunc();

//Q26
array = [1, 2, 3, 4, 5];
const findFBigNum = () => {
  let firstAboveThree = array.find(function (number) {
    return number > 3;
  });
  console.log(firstAboveThree);
};
// findFBigNum()

//Q27
array = [1, 3, 5, 2, 4, 6];
const findFirstPair = () => {
  let firstIndexPairMatch = array.findIndex(function (number) {
    return number % 2 === 0;
  });

  console.log(firstIndexPairMatch);
};

// findFirstPair();

//Q28
array = ["תפוח", "בננה", "דובדבן"];
const firstAboveFiveL = () => {
  let firstAboveFive = array.find(function (string) {
    return string.length > 5;
  });
  console.log(firstAboveFive);
};
// firstAboveFiveL()

//Q29
array = ["תפוח", "בננה", "דובדבן", "תמר"];
const findCherryFunc = () => {
  let findCherry = array.findIndex(function (word) {
    return word === "דובדבן";
  });

  if (findCherry !== -1) {
    console.log(`Found 'דובדבן' at index ${findCherry}`);
  } else {
    console.log("Didn't find דובדבן.");
  }
};
// findCherryFunc();

//Q30
array = [1, 2, 3, -4, 5, -6];
const findFNegativeFunc = () => {
  let firstN = array.find(function (n) {
    return n < 0;
  });
  console.log(firstN);
};
// findFNegativeFunc()

//Q31
array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const upOrderFunc = () => {
  let upOrder = array.sort(function (a, b) {
    return a - b;
  });
  console.log(upOrder);
};
// upOrderFunc()

//Q32
array = ["banana", "cherry", "apple", "date"];
const alphabetOrderFunc = () => {
  let alphabetOrder = array.sort(function (a, b) {
    return a.localeCompare(b);
  });

  console.log(alphabetOrder);
};
// alphabetOrderFunc();

//Q33
array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const downOrderFunc = () => {
  let upOrder = array.sort(function (a, b) {
    return b - a;
  });
  console.log(upOrder);
};
// downOrderFunc()

//Q34
array = ["banana", "cherry", "apple", "date"];
const lengthFunc = () => {
  let lengthSort = array.sort(function (a, b) {
    return a.length - b.length; // Sort based on string length
  });

  console.log(lengthSort);
};
// lengthFunc();

//Q35
let arrayObj = [
  { name: "יוחנן", age: 25 },
  { name: "יעל", age: 30 },
  { name: "בועז", age: 20 },
];
const sortArrayObj = () => {
  let sortThis = arrayObj.sort(function (a, b) {
    return b.age - a.age;
  });
  console.log(sortThis);
};
// sortArrayObj()

//Q36
array = [1, [2, 3], [4, [5, 6]]];
const flatArrayFunc = () => {
  let flatArray = array.flat(4);
  console.log(flatArray);
};
// flatArrayFunc()

//Q37
array = [1, [2, [3, [4]]]];
const flatArrayFuncTwo = () => {
  let flatArray = array.flat(2);
  console.log(flatArray);
};
// flatArrayFuncTwo()

//Q38
array = [1, 2, , 4, 5];
const flatClean = () => {
  let newFClean = array.flat(1);
  console.log(newFClean);
};
// flatClean()

//Q39
array = ["א", ["ב", "ג"], "ד"];
const alefBetFunc = () => {
  let newAlef = array.flat(2);
  console.log(newAlef);
};
// alefBetFunc()

//Q40
array = [1, [2, [3, [4, [5]]]]];
const infinityFlat = () => {
  let infinityUse = array.flat(Infinity);
  console.log(infinityUse);
};
// infinityFlat()

//Q41
array = ["א", "ב", "ג", "ד"];
const forEachFunc = () => {
  let logEachLetter = array.forEach(function (letter) {
    console.log(letter);
  });
};
// forEachFunc()

//Q42
array = [10, 20, 30, 40];
const arrayObjectFunc = () => {
  let objectArray = array.map((number, index) => {
    return { number: number, index: index };
  });
  console.log(objectArray);
};

// arrayObjectFunc()

//Q43
array = ["תפוח", "בננה", "אבטיח", "תמר"];
const HasAlefFunc = () => {
  let hasAlef = array.filter(function (word) {
    return word.includes("א");
  });
  console.log(hasAlef);
};
// HasAlefFunc()

//Q44
array = ["א", "ב", "א", "ג", "ב", "א"];
const lettersObjectFunc = () => {
  let lettersObject = array.reduce(function (accumulator, letter, index) {
    if (!accumulator[letter]) {
      accumulator[letter] = [];
    }
    accumulator[letter].push(index);
    return accumulator;
  }, {});
  console.log(lettersObject);
};

// lettersObjectFunc()

//Q45
array = ["שלום", "עולם", "אווהסקריפטז"];
const hasZainFunc = () => {
  let hasZ = array.some(function (word) {
    return word.includes("ז");
  });
  console.log(hasZ);
};
// hasZainFunc()

//Q46
array = [2, 4, 6, 8];
const isPairsArray = () => {
  let isPairs = array.every((number) => number % 2 === 0);
  console.log(isPairs);
  return isPairs;
};
// isPairsArray()

//Q47
array = [
  { id: 1, status: "לא פעיל" },
  { id: 2, status: "פעיל" },
];
const firstActivateFunc = () => {
  let firstActivate = array.find((isActive) => isActive.status === "פעיל");
  console.log(firstActivate);
  return firstActivate;
};
// firstActivateFunc()

//Q48
array = [3, 7, -2, 9, -5];
const firstNegativeFunc = () => {
  let firstNegative = array.find((firstNeg) => firstNeg < 0);
  console.log(firstNegative);
  return firstNegative;
};
// firstNegativeFunc()

//Q49
array = ["JavaScript", "Python", "Ruby", "Java"];
const arrangeArrayLengthFunc = () => {
  let arrangeArray = array.sort((a, b) => b.length - a.length);
  console.log(arrangeArray);
  return arrangeArray;
};
// arrangeArrayLengthFunc()

//Q50
array = [1, [2, [3]], [4, [5]]]
const flatFunc = () => {
  let flatArray = array.flat(1)
  console.log(flatArray);
  return flatArray
}
// flatFunc()

//Q51
array =['ש', 'ל', 'ו', 'ם']
const connectLettersFunc = () => {
  let word = ""
  let connectL = array.forEach(letter => word += letter)
  console.log(word);
}
// connectLettersFunc()

//Q52
array = [1, 2, 3, 4, 5] 
const newArrayFunc = () => {
  let newArrayPlusTen = array.map(number => number + 10)
  console.log(newArrayPlusTen);
  return newArrayPlusTen
}
// newArrayFunc()

//Q53
array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const divideByThreeFunc = () => {
  let divideByTh = array.filter(number => number % 3 === 0)
  console.log(divideByTh);
  return divideByTh
}
// divideByThreeFunc()

//Q54
array = ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר'];
const longestWFunc = () => {
  let longestW = array.reduce((wordA, wordB) => wordA.length > wordB.length ? wordA : wordB);
  console.log(longestW);
};
// longestWFunc()

//Q55
array = [1, 3, 5, 7, 9]
const pairNumber = () => {
  let pairN = array.some(number => number % 2 === 0);
  console.log(pairN);
  return pairN
}
// pairNumber()

//Q56
array = ['תפוח', 'תפ', 'תפוז']
const hasTPFunc = () => {
  let hasTP = array.every(letters => letters.includes('תפ'))
  console.log(hasTP);
  return hasTP
}
// hasTPFunc()

//Q57
array = [{id: 1, completed: false}, {id: 2, completed: true}]
const firstCFunc = () => {
  let firstCFound = array.find(word => word.completed === true)
  console.log(firstCFound);
  return firstCFound
}
// firstCFunc()

//Q58
array = ['תפוח', 'בננה', 'דובדבן']
let result = array.findIndex(word => word === 'בננה')
// console.log(result);

//Q59
array = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}]
let byOrderName = array.sort((a, b) => a.name.localeCompare(b.name, 'he'));
// console.log(byOrderName);


//Q60
array = [1, [2, 3], [4, [5, 6]]]
let flatSquareBrackets = array.flat(2)
// console.log(flatSquareBrackets);

//Q61
let word = "שלום"; // Use spread syntax to convert string into an array of letters
// let letterLoop = [...word].forEach(letter => console.log(letter)) 


//Q62
array = ['תפוח', 'בננה', 'דובדבן']
// let fLetterOnly = array.map(word => console.log(word[0]))

//Q63
array = ['א', 'אב', 'אבג', 'אבגד'];
let up3Strings = array.filter(word => word.length > 3);
// console.log(up3Strings);

//Q64
array = ['תפוח', 'בננה', 'דובדבן'];
let count = array.reduce((accumulator, word) => accumulator + word.length, 0);
// console.log(count);

//Q65
array = ['שלום', 'עולם', 'ג\'אווהסקריפט'];
let above10L = array.some(word => word.length > 10)
// console.log(above10L);

//Q66
array = [10, 20, 30, 40, 50]
let above5Int = array.every(number => number > 5)
// console.log(above5Int);

//Q67
array = ['ספר', 'דלת', 'חלון']
let findFVav = array.find(word => word.includes('ו'))
// console.log(findFVav);

//Q68
array = [5, 10, 15, 20]
let findFIndexAboveTen = array.findIndex(n => n > 10)
// console.log(findFIndexAboveTen);

//Q69
array = ['אאא', 'בב', 'ג'];
let arrangeByLength = array.sort((a, b) =>  b.length - a.length);
// console.log(arrangeByLength);

//Q70
array = [1, [2, [3, [4]]]] 
let flatArr = array.flat(2)
// console.log(flatArr);

//Q71
array = [1, 4, 9, 16];
let squareNum = [];
array.forEach(n => {squareNum.push(n ** 2);});
// console.log(squareNum);

//Q72
array = ['א', 'ב', 'ג']
let doubledL = array.map(letter => letter + letter , [])
// console.log(doubledL);

//Q73
array = [5, 10, 15, 20, 25]
let between10ToTwenty = array.filter(n => n > 10 && n <= 20)
// console.log(between10ToTwenty);

//Q74
array = [{א: 1}, {ב: 2}, {ג: 3}];
// Merge total and current object
let oneObjectCreate = array.reduce((total, current) => {return {...total, ...current}; 
 // Initial value is an empty object
}, {});
// console.log(oneObjectCreate);

//Q75
array = [{x: 1}, {y: 2}, {z: 3}];
let checkIfHasY = array.some(letter => 'y' in letter);
// console.log(checkIfHasY);

//Q76
array = ['א1', 'ב2', 'ג3'];
let hasIntNString = array.every(word => {
  return /^[\u0590-\u05FF]/.test(word[0]) && /\d/.test(word[1]);
});
// console.log(hasIntNString);

//Q77
array = [{מחיר: 60}, {מחיר: 40}, {מחיר: 70}];
let firstBelowFifty = array.find(prices => prices.מחיר < 50);
// console.log(firstBelowFifty);

//Q78
array = [1, '', true, 0, null, 'שלום']
let firstNunIndex = array.findIndex(value => value === null)
// console.log(firstNunIndex);

//Q79
array = [3.14, 2.71, 1.41, 1.73]
let sortByFloat = array.sort((a,b) => a - b)
// console.log(sortByFloat);

//Q80
array = ['א', ['ב', ['ג']]]
let infiniteFlatQEighty = array.flat(Infinity)
// console.log(infiniteFlatQEighty);

//Q81
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterNMap = array.map(n => (n ** 2)).filter(n => n % 2 === 0);
// console.log(filterNMap);












