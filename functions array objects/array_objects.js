const numbers = [1, 2, 3];
console.log(numbers);

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0], fruits[fruits.length - 1]);

fruits[1] = "mango";
console.log(fruits);

const newLength = fruits.push("orange");
console.log(newLength, fruits);

const lastItem = fruits.pop();
console.log(lastItem, fruits);

fruits.unshift("kiwi");

fruits.shift();
console.log(fruits);

const arr = ["a", "b", "c", "d"];
arr.splice(1, 1, "X");

arr.splice(2, 1, "Y");

const nums = [2, 3, 6, 5, 4];
console.log(nums.length, nums[nums.length - 1]);

const mixArr = [2, "f", false];
for (const item of mixArr) console.log(item);

// const nums = [10, 20, 30];
// for (const num of nums) console.log(num);

// const numbers = [5, 10, 15]
// let total = 0
// for (const number of numbers) total += number
// console.log(total)

const numFilter = [3, 8, 12, 1];
for (const num of numFilter) if (num > 4) console.log(num);

// const person = {
//   name: 'Hallel',
//   age: 22
// }
const person = { name: "Dan", age: 25, city: "TLV"};
console.log(person.name, person.age)
console.log(person["name"], person["age"])

person.city = "Jlm"
console.log(person)

delete person.age
console.log(person.age in person)

const student = {
  name: "Yael",
  grades: [90, 80, 100]
};

console.log(student.grades[0])
student.grades.push(87)
student.grades.splice(2, 1)
console.log(student)

const product = {
  name: "Laptop",
  price: 3500,
  inStock: true
};

for (const key in product) console.log(`${key}: ${product[key]}`)

const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345"
    }
  }
};

console.log(order.customer.address.city)
order.customer.address.zip = "54321"
order.customer.phone = "+97253627181"
delete order.customer.address.city