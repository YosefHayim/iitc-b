// Your Code Goes Here:
let azLetters = [];
let maxLetter = 90
let minLetter = 64
let i;

while (minLetter < maxLetter) { 
    minLetter++
    i = String.fromCharCode(minLetter)
    azLetters.push(i)

}
console.log(azLetters);