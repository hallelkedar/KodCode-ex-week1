const { use } = require("react");

const age = 20;

if (age > 18) {
    console.log('Adult')
} else {
    console.log('Minor')
}

const number = 7;

if (number % 2 === 0) {
    console.log('Number is even ' + number)
} else {
    console.log('Number is not even ' + number)
}

const isLoggedIn = true;
if (isLoggedIn)
{
    console.log('Welcome!')
}
else
{
    console.log('Please login in')
}

const num = -5;

if (num > 0) {
    console.log('num is positive')
} else if (num === 0) {
    console.log('num is zero')
} else {
    console.log('num is negative')
}

const a = 10;
const b = 20;

if (a > b) {
    console.log('a is greater than b')
} else if (b > a) {
    console.log('b is greater than a')
} else {
    console.log('They are equals')
}

const password = '1234';

if (password === '1234') {
    console.log('Permission approved')
} else {
    console.log('Wrong password')
}

const x = 15;

if (x >= 10 && x <= 20) {
    console.log('x is in range of 10 to 20')
}

const grade = 83;

if (grade >= 90) {
    console.log('Excelent')
} else if (grade >= 75) {
    console.log('Good')
} else if (grade >= 60) {
    console.log('Pass')
} else {
    console.log('Fail')
}

const temp = 28;

if (temp > 30) {
    console.log('Very hot, drink water')
} else if (temp >= 20) {
    console.log('It is nice outside')
} else {
    console.log('It is cold. take a jacket')
}

const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
    console.log('Welcome')
}

const isAdmin = false;
const isManager = true;

if (isAdmin || isManager) {
    console.log('Permission allowed')
}

const hasCard = false;
if (hasCard === false) {
    console.log('Permission denied')
} else {
    console.log('Permission allowed')
}

const name = '' || 'Guest'

const arr = [];
if (!arr) {
    console.log('Array is empty')
}

const x = "5";
const y = 5;

if (x == y) {
    console.log('x and y are equal only in value')
} else if (x === y) {
    console.log('x and y are absolut equal - value and type')
}

const username = "admin";
const password = "1234";

if (username && password) {
    console.log('Welcome')
} else {
    console.log('Permission denied')
}

const age = 67;
if (age < 18) {
    console.log('Teen discount')
} else if (age >= 65) {
    console.log('Pensioner discount')
} else {
    console.log('There is no discount')
}

const day = "שני";
if (day === 'שישי' || day === 'שבת') {
    console.log('Today is weekend')
} else {
    console.log('Today is weekday')
}

const total = 250;
if (total > 300) {
    console.log('Free delivery')
} else if (300 > total >= 150) {
    console.log('Delivaery is 20 shekels')
} else {
    console.log('Delivary is 40 shekels')
}

const role = "editor";
if (role === 'admin') {
    console.log('All permission')
} else if (role === 'editor') {
    console.log('Editing only')
} else if (role === 'viewer') {
    console.log('Reading only')
} else {
    console.log('No permission')
}
