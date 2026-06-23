for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

const numbers = [1, 2, 3, 4, 5];
let total = 0

for (const number of numbers) {
    total += number
}
console.log(total)

const names = ["דנה", "יוסי", "מיכל", "רון"]; 

for (const name of names) {
    console.log(name)
}

const numbers = [2, 5, 8, 11, 14, 17, 20];

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

const numbers = [3, 99, 12, 45, 78];
const maxNumber = Math.max(...numbers)

for (const number of numbers) {
    if (number === maxNumber) {
        console.log(number)
    }
}

const word = "javascript";

for (const letter of word) {
    console.log(letter)
}

const numbers = [1, 2, 3, 4];

for (const number of numbers) {
    console.log(number * 2)
}

let input = "";

while (input !== "stop") {
    console.log('Enter your input')
}

let total = 0;
let input
while (input !== 0) {
    total += input
}
console.log(total)

const secret = 7;
let guess 
while (guess !== secret) {
    console.log('Enter your guess')
}

let x = 1;
while (x < 20) {
    console.log(x)
    x++
}

let password = "";
let userInput
while (userInput !== password) {
    console.log('Try again')
}

let count = 0;
do {
    console.log(count)
} while (count !== 5)

let choice;
do {
    console.log('Menu: ')
} while (choice !== 'exit')

const numbers = [1, 3, 7, 9, 15, 2];

for (const number of numbers) {
    if (number > 10) {
        break
    }
}

const numbers = [5, -1, 8, -3, 10];

for (const number of numbers) {
    if (number < 0) {
        continue
    }
    console.log(number)
}


const ages = [12, 15, 18, 21, 25];
for (const age of ages) {
    console.log(age)
    if (age >= 18) {
        break
    }
}


const arr = [10, 20, 30, 40, 50];
for (const number of arr) {
    console.log(number)
}

const numbers = [1, 2, 3, 4, 5, 6];
let total = 0

for (const number of numbers) {
    if (number % 2 === 0) {
        total += number
    }
}
console.log(total)

const target = 25;
const numbers = [10, 15, 20, 25, 30];

for (const number of numbers) {
    if (number === target) {
        console.log(`target (${number}) in numbers`)
    }
}

const word = "hello world";

for (const letter of word) {
    console.log(letter.toUpperCase())
}

const numbers = [2, 4, 6, 8, 10, 12];

for (const number of numbers) {
    console.log(number)
    if (number > 8 && number % 2 ==0) {
        break
    }
}

const students = [
  { name: "דנה", grade: 55 },
  { name: "יוסי", grade: 90 },
  { name: "מיכל", grade: 78 },
  { name: "רון", grade: 45 }
];

for (const student of students) {
    if (student.grade > 60) {
        console.log(student.name)
        if (student.grade === 100) {
        break
    }
    }
    
}