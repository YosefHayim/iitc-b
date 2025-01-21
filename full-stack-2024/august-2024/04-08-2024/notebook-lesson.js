// let students = [
//     {id: "1", 
//     name: "omer", grade: 100},
//     {id: "2", 
//     name: "avi", grade: 40},
//     {id: "3", 
//     name: "gaga", grade: 80},

// ];

// function getValuesFromKey (array, key) {
//     let newArrayNames = []
    
//     for (i = 0; i < students.length; i++) {
//         let studentNames = students[i][key]
//         newArrayNames.push(studentNames)
//     }
//     return newArrayNames

// }
// // console.log(getValuesFromKey(students, `name`));


// function getPassStudent(array, number) {
//     let passStudents = [];
    
//     for (let i = 0; i < array.length; i++) {
//         let studentInfo = array[i];
        
//         if (studentInfo.grade > number) {
//             passStudents.push(studentInfo);
//         }
//     }
    
//     return passStudents;
// }

// // console.log(getPassStudent(students, 70));

// function createPersons(names) {
//     let persons = []

//     for (i = 0; i < 3; i++) {

//         //What Omer did:
//         // let newPerson = { "name:": name[i] };
//         // persons.push(newPerson)

//         let name = names[i] 
//         persons.push([`name:`,name])
//     }
//     console.log(persons);
    
//     return persons

//     }


// // createPersons([`yossi`,`liraz`,`baba`])


// let employees = [
//     { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
//     { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
//     { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
//     { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
//     { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
//     { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
//   ];
  
//   console.log(groupBy(employees, "department"));
  
//   /*
//   {
//     Engineering: [
//       { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
//       { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
//       { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
//     ],
//     Marketing: [
//       { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
//       { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
//       { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
//     ]
//   }
//   */

// function groupBy (array , key) {
//     let group = {}
//     //What i did:
//     // for (i = 0 ; i < array.length; i++) {
//     //     let departmentType = array[i]
//     //     console.log(departmentType);

//     //What Omer did:s
//     for (i = 0; i < array.length; i++) {
//         let item = array[i]
//         // console.log(item);
        
//         let groupKey = item[key]
//         // console.log(groupKey);
//          if (group[groupKey] === undefined) {
//             group[groupKey] = []

//          }
//          group[groupKey].push(item)
//     }
//  return group
// }
// groupBy(employees, "department")

    