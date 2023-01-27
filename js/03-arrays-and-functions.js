
// Цикл for

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// Операторы break и continue

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// 2 вариант

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Присвоение по ссылке и по значению

// По значению 

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// По ссылке 

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(14));

// ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
  
//     if (password === ADMIN_PASSWORD) {
      
//       return  "Welcome!";
//     } 
    
//     return "Access denied, wrong password!";
//   }

//   console.log(checkPassword("dsfsdfsdfsdg"));
//   console.log(checkPassword("jqueryismyjam"));
  

// ЗАДАЧА: СКЛАД ТОВАРІВ 3.0

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
      
//       return "Your order is empty!";
      
//     } 
    
//     if (ordered > available) {
      
//       return "Your order is too large, not enough goods in stock!";
      
//     } 
      
//       return "The order is accepted, our manager will contact you";
    
//   }

//   console.log(checkStorage(5, 2));
//   console.log(checkStorage(3, 7));

// МАСИВИ: 

// const fruits = ["apple", "plum", "pear", "orange"];

// console.table(fruits);

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);

// На відміну від рядків, елементи масиву можна змінювати:

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// Довжина масиву, тобто кількість його елементів, зберігається у властивості length:

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ:

// function getExtremeElements(array) {
   
//     for (const argument of arguments) {
//       const firstElement = array[0];
//       const lastElement = array[array.length - 1];
  
//        return [firstElement, lastElement];
//     }
//   }

//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter:

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimiter);
//     // Change code above this line
//     return words;
//   }
  
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));


// ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС:

// function calculateEngravingPrice(message, pricePerWord) {
 
//  const words = message.split(" ");
 
//  const cost = words.length * pricePerWord; 

//    return cost;
 
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок:

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
  
//     string = array.join(delimiter);
  
//     // Change code above this line
//     return string;
//   }

//   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//   console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// ЗАДАЧА: ГЕНЕРАТОР SLUG:

// function slugify(title) {

//   const isInLowerCase = title.toLowerCase();

//   const words = isInLowerCase.split(" ");

//   const join = words.join("-");

//   return join;
  
//   }

//   console.log(slugify("Arrays for begginers"));
//   console.log(slugify("English for developer"));
//   console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його:

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий:

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ:

// function makeArray(firstArray, secondArray, maxLength) {


//   const allArray = firstArray.concat(secondArray);

//   const endArray = allArray.slice(0, maxLength);

//   return endArray;

//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// Цикл For:

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR):

// function calculateTotal(number) {
     
//      let total = 0;
     
//    for (let i = 0; i <= number; i += 1) {
   
//      total += i;
     
//    }
//      return total;

//    }


// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);
  
//     let total = 0;
  
//     for (const item of items) {
//       total += item;
//     }
  
//     return total;
//   };

// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно:

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ:

// function calculateTotalPrice(order) {

//     let total = 0;
    
//   for (const arg of order ) {
  
//     total += arg;
//   }

//     return total;
//   }  

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));

// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА:

// function findLongestWord(string) {
  
//     const words = string.split(" ");
  
//     let longestWord = words[0];
  
//     for (const word of words) {

//       if (longestWord.length < word.length) {
  
//         longestWord = word;
//       }
      
//     }
//    return longestWord;

//   }

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));

// Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються:

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
  
//     for (let i = min; i <= max; i += 1) {
  
//       numbers.push(i);
//     }
  
//     // Change code above this line
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(1, 3));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));

//   ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ:

// function filterArray(numbers, value) {

//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;

//   }

// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0:

// function filterArray(numbers, value) {

//  const filterNumbers = [];
 
//    for (const number of numbers) {
//      if (number > value) {
//        filterNumbers.push(number);
//      }
//    }
 
//    return filterNumbers;

//  }

//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
//  console.log(filterArray([1, 2, 3, 4, 5], 5));

// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false:

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit) ? true : false;
//   }

// ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ:

// function getCommonElements(array1, array2) {

//   const array = [];
  
//     for (const arg of array1) {
//       if (array2.includes(arg)) {
//         array.push(arg);
//       }
//     }

//     return array;
  
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Інструкція for...of:

// function calculateTotalPrice(order) {
//     let total = 0;
  
//     for (const ord of order) {
//       total += ord;
//     }
  
//     return total;
//   }
  

// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника:

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ЗАДАЧА: ПАРНІ ЧИСЛА:

// function getEvenNumbers(start, end) {

//  const numbers = [];
 
//    for (let i = start; i <= end; i += 1) {
 
//      if (i % 2 === 0) {
//        numbers.push(i);
//      }
//    }
 
//  return numbers;

//    }

//    console.log(getEvenNumbers(2, 5));
//    console.log(getEvenNumbers(3, 11));
//    console.log(getEvenNumbers(6, 12));
//    console.log(getEvenNumbers(8, 8));

// Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break:

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

// Для того щоб переривати виконання відразу циклу і функції, є оператор return:

// function findNumber(start, end, divisor) {

//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//       }
//     }
  
//   }

// ЗАДАЧА: ФУНКЦІЯ INCLUDES():

// function includes(array, value) {
  
//   for (const arg of array) {

//     if (arg === value) {

//         return true;

//     }
  
//   }
//     return false;
    
//   }

//   console.log(includes([1, 2, 3, 4, 5], 3));
//   console.log(includes([1, 2, 3, 4, 5], 17));