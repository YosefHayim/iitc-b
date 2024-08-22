// Task 1: Variable Declaration and Boolean Expressions
let firstName = "Yosef"
let lastName = "Sabag"
let age = 24
let isStudent = true


//Boolean Expressions:
isAdult = age
if (age > 18)
    console.log("The result is", isAdult)
else
console.log("The result is below 18.")

isJohn = "John"
if (Compare = firstName === isJohn) 
console.log("They are match", Compare)
else 
console.log("They arent match",Compare)

// Task 2: Functions and String Methods
function greet(firstName, lastName) 
{let FullName = firstName + " " + lastName
let BigCase = FullName.toUpperCase()
console.log("Hello, " + BigCase + "! Welcome to the IITC Bootcamp.")
return BigCase
}

greet(firstName, lastName)

// Task 3: Conditions
function checkAge(age) {
    if (age < 13)
    console.log("You are child.")

    else if (age > 13 && age <= 17)
    console.log("You are teenager.")

    else if (age > 18 && age <= 64)
    console.log("You are an adult")

    else if (age > 65)
    console.log("You are a senior.")
}

checkAge(age)

// Switch Statement:
function getDayMessage(dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
          console.log("Start of the work week!");
          break;
        default:
          console.log("Invalid day");
}}

getDayMessage("Monday")

// Complex Conditions:
function checkEligibility(age,isStudent) {
if (age < 18 && isStudent === true)
    console.log("You are a minor student.")

else if (age < 18 && isStudent === false)
    console.log("You are a minor non-student.")

else if (age > 18 && age <= 24 && isStudent === false)
    console.log("You are a young adult non-student.")

else if (age => 25 && isStudent === true)
    console.log("You are an adult student.")

else if (age => 25 && isStudent === false)
    console.log("You are an adult non-student.")
}

checkEligibility(age,isStudent)

// String Comparison and Manipulation:
let name = "    JOSEPH    "

function formatName(name) 
{
let RemoveSpaceName = name.trim()
let LowerName = RemoveSpaceName.toLowerCase()

if (LowerName === name)
console.log("Welcome,Admin!")

else 
console.log("Hello,",LowerName+"!")
return
}

formatName(name)

// Nested If Statements:
function checkDiscount(age,isMember)
{
if (age < 18)
    if (isMember === true)
        console.log("You get 20% discount.")
    else
        console.log("You get a 10% discount.")

if (age > 65)
    if (isMember === true)
        console.log("You get 30% discount.")
    else
    console.log("You get a 20% discount.")

if (age >= 18 && age <= 64)
    if (isMember === true)
        console.log("You get 10% discount.")
    else
    console.log("No discount available.")
}

// Additional Task: Combining Conditions and Functions
let username = "JosephSAB"
let password = "RealMadrid"
function validateLogin(username, password)
{
let storedUsername = "JosephSAB"
let storedPassword = "RealMadrid"

if (username === storedUsername && password === storedPassword)
console.log("Login successful")
else console.log("Invaild username or password.")
}

validateLogin(username,password)

//Substring Extraction:
function extractInitials(firstName,lastName)
{
let CharacterFirstName = firstName[0].toUpperCase()
let CharacterLastName = lastName[0].toUpperCase()
let TwoCharactersNameWithDot = CharacterFirstName+"."+CharacterLastName
console.log(TwoCharactersNameWithDot)
}

extractInitials(firstName,lastName)

//String Replacement:
let email = "yosefisabag@gmail.com"

function maskEmail(email)
{
let ReplaceEmail = email.replace("yosefisabag","*****")
console.log(ReplaceEmail)
}

maskEmail(email)

//Nested If-Else:
let score = 91

function gradeCalculator(score)
{
if (score >= 90)
    return console.log("A")
else if (score >= 80)
    return console.log("B")
else if (score >= 70)
    return console.log("C")
else if (score >= 60)
    return console.log("D")
else 
return console.log("F")
}
gradeCalculator(score)

//Complex Boolean Conditions:
isCitizen = true

function canVote(age,isCitizen)
{
if (age > 18 && isCitizen === true)
    return console.log("You are eligible to vote.")
else return console.log("You are not eligible to vote.")    
}

canVote(age,isCitizen)

//Capitalize First Letter:
let word = "java"
function capitalize(word)
{
let CapsFirstLetter = word[0].toUpperCase() + word[1] + word[2] + word[3]
return console.log(CapsFirstLetter)
    
}

capitalize(word)

//Check Substring:
let mainString = "Joseph"
let subString = "Yoseph"

function containSubstring(mainString, subString)
{
let CombineStrings = mainString + subString
let SpaceWords = CombineStrings.replace("JosephYoseph", "Joseph Yoseph")
let CheckMatch = SpaceWords.includes("oseph")
console.log(CheckMatch)
return
}

containSubstring(mainString,subString)

