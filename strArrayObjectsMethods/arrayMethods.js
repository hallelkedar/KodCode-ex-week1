// const nums = [1, 2, 3, 4, 5]
// const multiNums = nums.map((num) => num*2)

const strs = ["hello", "world"]
strs.forEach((str, i) => strs[i] = str.toUpperCase())

// const prices = [34, 78, 82, 1]
// prices.map((price, index) => prices[index] = price + (price*0.17))


const numbers = [1, 2, 3, 4, 5, 6]
const result = numbers.filter(num => {
    if (!(num % 2)) return num
})

const prices = [324, 78, 182, 100]
const priceResult = prices.filter(price => {
    if (price>100) return price
}).map(price => price+(price*0.10))

const myArr = [2, 4, 3, 2, 1]
const multiEvery = myArr.reduce((total, current) => total + (current * 2), 0)

const users = [{age: 21}, {age: 63}, {age: 18}]
const agesAverage = users.reduce(
    (total, user) => (total + user.age), 0
) / users.length

const numbersArr = [8, 4, 2, 1, 5]
const numbersDownToUp = numbersArr.sort((a, b) => b - a)

const items = ['Hey', 'how', 'are', 'you']
items.splice(1, 2)

const nestedArr = [[2, 4, 6], 3, [2, 3]]
const newArr = nestedArr.flat()

const numbersNew = [3, 2, 6, 4, 2]
const resultN = numbersNew.filter(number => {
    if (!(number % 2)) return number
}).map(number => number*2).reduce((total, number) => total+number)

const items = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }]
const groupBy = (items) => {
    result = {}
    for (const item of items) {
        if (result[item.type]){
            result[item.type].push(item)
        } else {
            result[item.type] = [item]
        }
    } return result
}

const toCheck = [2, 4, 3, 1]
const hasDuplicate = toCheck.length !== toCheck.filter(
    (item, index) => toCheck.indexOf(item) === index,
    []
).length

const products = [
  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
  { name: "Phone",  price: 400, inStock: false, category: "tech"    },
  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
];

const productResult = products.filter(
    (product) => product.inStock).filter(
    (product) => product.price > 100).sort(
        (a, b) => a.price - b.price
    ).map(product => product.name).join(' ')

