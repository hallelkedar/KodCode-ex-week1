// מחיר בסיס לכרטיס - לא משתנה במהלך הריצה
const BASE_PRICE = 45;

// גיל מינימלי לסרטי '12+' ו-'18+' - כנ'ל
const AGE_LIMIT_12 = 12;
const AGE_LIMIT_18 = 18;

// משתנים שיצטברו / ישתנו במהלך התוכנית
let totalTicketsSold = 0;
let totalRevenue = 0;

const customers = [
  { name: 'Dana',  age: 17, movieRating: '12+', isStudent: true  },
  { name: 'Yossi', age: 25, movieRating: '18+', isStudent: false },
  { name: 'Michal', age: 10, movieRating: '12+', isStudent: false },
  { name: 'Ron',  age: 16, movieRating: '18+', isStudent: true  },
  { name: 'Liat', age: 30, movieRating: 'All ages', isStudent: false },
  { name: 'Avi',  age: 8,  movieRating: 'All ages', isStudent: false }
];

let totalTicketsSold = 0
let totalRevenue = 0

for (const customer of customers) {
    let isAllowed = false
    if ((customer.movieRating === '18+' && customer.age < 18) || (customer.movieRating === '12+' && customer.age < 12)) {
        console.log('Not allowed')
    } else {
        let isAllowed = true
    }
    
    let price = BASE_PRICE;

    switch (customer.movieRating) {
  case "18+":
    price = BASE_PRICE + 10;
    break;
  case "12+":
    price = BASE_PRICE + 5;
    break;
  case "כל הגילאים":
    price = BASE_PRICE;
    break;
  default:
    price = BASE_PRICE;
}
    price -= customer.age > 65 ? (price * 0.20):  ((customer.isStudent) ? price * 0.15: 0)

    if (isAllowed) {
       totalTicketsSold++;
       totalRevenue += price; 
    }
    console.log(`${customer.name} (${customer.age}) - Ticket for ${customer.movieRating} - price: ${price} shekels`)
}
