// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
  
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted")

//   console.log(apartment);

// Цикл for...in

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
  
//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   };

//   console.log(keys);
//   console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){  //   Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, використовується метод hasOwnProperty(key), який повертає true або false.
//   keys.push(key);
//   values.push(apartment[key]);
//    }

//   // Change code above this line
// }

// ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)){

//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }

// Object.keys(obj) приймає об'єкт і повертає масив ключів його власних властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {

//   values.push(apartment[key]);
// }

// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
  
//   propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salary = Object.values(salaries);

//   for (const sal of salary) {

//     totalSalary += sal;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }

// return null;
//  // Change code above this line
// }

// console.log(getProductPrice('Engine'));
// console.log(getProductPrice('Radar'));

// ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const productValues = [];
    
// for (const product of products) {
  
//   if (Object.keys(product)[0] === propName) {

//     productValues.push(product.name);

//   } else if (Object.keys(product)[1] === propName) {

//     productValues.push(product.price);
    
//   } else if (Object.keys(product)[2] === propName) {

//     productValues.push(product.quantity);
    
//   } else {
//     continue;
//   }
  
// }
// return productValues;

//   // Change code above this line
// }


// console.log(getAllPropValues("price"));

// ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
  
//    let amount;
      
//   for (const product of products) {
  
//     if (product.name === productName) {
      
//       amount = product.price * product.quantity;
//       return amount;
//     }
    
//   }
//   return 0;
  
//     // Change code above this line
//   }

// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow} = highTemperatures;
  
//   // const yesterday = highTemperatures.yesterday;
//   // const today = highTemperatures.today;
//   // const tomorrow = highTemperatures.tomorrow;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday,
//          today,
//          tomorrow,
//          icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // const yesterday = highTemperatures.yesterday;
//   // const today = highTemperatures.today;
//   // const tomorrow = highTemperatures.tomorrow;
//   // const icon = highTemperatures.icon;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday: highYesterday,
//         today: highToday,
//         tomorrow: highTomorrow,
//         icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // const highYesterday = highTemperatures.yesterday;
//   // const highToday = highTemperatures.today;
//   // const highTomorrow = highTemperatures.tomorrow;
//   // const highIcon = highTemperatures.icon;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const { hex, rgb } of colors) {
    
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
  
// console.log(hexColors);
  
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//       tomorrow: {low: lowTomorrow , high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// Патерн «Об'єкт налаштувань»

// function calculateMeanTemperature(forecast) {

//     const { today: {low: todayLow, high: todayHigh},
//           tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
    
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;
    
  
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }

// Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// Операція .spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Операція spread дозволяє розподілити властивості довільної кількості об'єктів в один новий.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};

// ЗАДАЧА. КАРТКИ ЗАВДАНЬ

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//   const finalData = {category, priority, completed, ...data};
  
//     return finalData;
//     // Change code above this line
//   }
  
  
//   console.log(makeTask({}));
//   console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash'}));
  
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію

// Change code below this line
// function add(...args) {
//     let sum = 0;
//       for (const arg of args) {
//         sum += arg;
//       }
//     return sum;

//     }
    
// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».

// Change code below this line
// function addOverNum(firstArg, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if (arg > firstArg) {
//       total += arg;
//         }
//     }
  
//     return total;
//     // Change code above this line
//   }

// ЗАДАЧА. МАСИВ ЗБІГІВ

// Change code below this line
// function findMatches([...array], ...args) {
//     const matches = []; // Don't change this line
  
//     for (const arg of args) {
  
//       if (array.includes(arg)) {
  
//         matches.push(arg);
//       }
//     }
//     // Change code above this line
//     return matches;
//   }
  
// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
  
//     removeBook(bookName) {
//       return `Deleting book ${bookName}`;
//     },
  
//     updateBook(oldName, newName) {
//       return `Updating book ${oldName} to ${newName}`;
//     },
//     // Change code above this line
//   };

// Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
  
//       // Change code above this line
//     },
//   };
  
// ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//     // Change code below this line
//   potions: [],
//     // Change code above this line
//   };

// ОТРИМУЄМО ВСЕ ЗІЛЛЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//   getPotions() {
//      return this.potions;
//   }
//     // Change code above this line
//   };

// ДОДАЄМО НОВЕ ЗІЛЛЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
  
//     this.potions.push(potionName);
  
//       // Change code above this line
//     },
//   };

// ВИДАЛЯЄМО ЗІЛЛЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//   const potionIndex = this.potions.indexOf(potionName);
//   this.potions.splice(potionIndex, 1);
  
//       // Change code above this line
//     },
//   };
  
// ОНОВЛЮЄМО ЗІЛЛЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
  
//       const potionIndex = this.potions.indexOf(oldName);
  
//       this.potions.splice(potionIndex, 1, newName);
  
//       // Change code above this line
//     },
//   };
  
// РОЗШИРЮЄМО ІНВЕНТАР

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {

//       // if (this.potions.includes(newPotion)) {
//       //   return `Error! Potion ${newPotion} is already in your inventory!`;
//       // }
//     const {potions} = this;

//       for (const potion of potions) {
      
//         if (newPotion.name === potion.name) {

//           console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);   
//           return;
          
//         } 
//       }

//       potions.push(newPotion);
//     },
//     removePotion(potionName) {

//         const { potions } = this;

//         for (let i = 0; i < potions.length; i += 1) {
//           const {name} = potions[i];
    
//           if (potionName === name) {
    
//             potions.splice(i, 1);
//           }
//         }
//     //   const potionIndex = this.potions.indexOf(potionName);
  
//     //   if (potionIndex === -1) {
//     //     return `Potion ${potionName} is not in inventory!`;
//     //   }
  
//     //   this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {

//           // const potionIndex = this.potions.indexOf(oldName);
  
//       // if (potionIndex === -1) {
//       //   return `Potion ${oldName} is not in inventory!`;
//       // }
  
//       // this.potions.splice(potionIndex, 1, newName);

//       const {potions} = this;

//       for (const potion of potions) {
        
//         if (potion.name === oldName) {

//           potion.name = newName;
//         }

//       }

  
//     },
//     // Change code above this line
//   };

//   // atTheOldToad.removePotion('Dragon breath');

//   // atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
//   // atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
//   // atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });

//   // atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
//   // atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

//   console.log(atTheOldToad.getPotions());
  
  
