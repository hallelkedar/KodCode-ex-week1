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

