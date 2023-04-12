// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Викликаємо у глобальному контексті
//   showThis(); // this in showThis: Window

//   const user = {
//     username: "Mango",
//   };
  
//   // Записуємо посилання на функцію у властивість об'єкта
//   // Зверніть увагу, що це не виклик - немає ()
//   user.showContext = showThis;

//   user.showContext();

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// ЗАДАЧА: АКАУНТ КОРИСТУВАЧА

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ЗАДАЧА: ІСТОРІЯ ЗАМОВЛЕНЬ

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(parent.isPrototypeOf("child"));
// console.log(ancestor.surname);
// console.log(child.hasOwnProperty("surname"));
// console.log(child.surname);

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// class Car {
//   // Change code below this line

//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }


//   // Change code above this line
// }

// const audi = new Car("Audi", "Q3", 36000);

// console.log(audi);

// const bmw = new Car("BMW", "X5", 58900);

// console.log(bmw);

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
//  Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями.
//  Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це
//  просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// getPrice(){

//   return this.price;
// }

//   changePrice(newPrice) {

//     return this.price = newPrice;
//   }


//   // Change code above this line
// }

// ЗАДАЧА: СКЛАД

// class Storage {

//     constructor(items) {
//       this.items = items;
//     } 
  
//     getItems() {
//       return this.items;
//     }
  
//     addItem(newItem) {
//       return this.items.push(newItem);
//     }
  
//     removeItem(itemRemove) {
  
//       return this.items.splice(this.items.indexOf(itemRemove), 1);
//     }
//   }
  
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ

// class StringBuilder {

//     constructor(initialValue) {
//       this.value = initialValue;
//     }
  
//     getValue(){
//       return this.value;
//     }
  
//     padEnd(str){
//       this.value += str;
//     }
  
//     padStart(str){
//       this.value = str + this.value;
//     }
  
//     padBoth(str){
//       this.value = str + this.value + str;
//     }
//   }
  
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

// Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.

// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
//   mango.changeEmail("mango@supermail.com");
//   console.log(mango.getEmail()); // mango@supermail.com
//   console.log(mango.#email); // Виникне помилка, це приватна властивість

// class Car {
//     // Change code below this line
//   #brand;

//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand(){
//       return this.#brand;
//     }
  
//     changeBrand(newBrand) {
  
//       this.#brand = newBrand;
//     }
//     // Change code above this line
//   }

//   const mango = new Car({
//     brand: "Mango",
//     model: "BMW",
//     price: 123,
//   });

//   mango.changeBrand("Audi");

//   console.log(mango.getBrand());

// ЗАДАЧА: СКЛАД 2.0

// class Storage {
//     // Change code below this line
  
//     #items;
  
//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ 2.0

// class StringBuilder {
//     // Change code below this line
  
//     #value;
  
//     constructor(initialValue) {
//       this.#value = initialValue;
//     }
  
//     getValue() {
//       return this.#value;
//     }
  
//     padEnd(str) {
//       this.#value += str;
//     }
  
//     padStart(str) {
//       this.#value = str + this.#value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

// Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.

// class User {
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     // Геттер email
//     get email() {
//       return this.#email;
//     }
  
//     // Сеттер email
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }

//   Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сетер застосовуються в парі та повинні називатися однаково. 

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// Звертаючись до mango.email, викликається гетер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сетер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

// Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//     if(newEmail === "") {
//       console.error("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }
  
//     this.#email = newEmail;
//   }

// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     get price() {
//       return this.#price;
//     }
    
  
    
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }
  

// Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.

// class User {
//     // Оголошення та ініціалізація статичної властивості
//     static Roles = {
//       ADMIN: "admin",
//       EDITOR: "editor",
//     };
  
//     #email;
//     #role;
  
//     constructor({ email, role }) {
//       this.#email = email;
//       this.#role = role;
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.ADMIN,
//   });
  
//   console.log(mango.Roles); // undefined
//   console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
  
//   console.log(mango.role); // "admin"
//   mango.role = User.Roles.EDITOR;
//   console.log(mango.role); // "editor"

// class Car {
//     // Change code below this line
//   static MAX_PRICE = 50000;
  
    
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
  
//       if (newPrice <= Car.MAX_PRICE) {
//         this.#price = newPrice;
//       }
      
//     }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

// В класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.

// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
  
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  

// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості та методи іншого класу (батьківського).

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     // Тіло класу ContentEditor
//   }
  
//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); // { email: "mango@mail.com" }
//   console.log(editor.email); // "mango@mail.com"

//   Клас ContentEditor наслідує від класу User його конструктор, гетер і сетер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"};
//   }
//   // Change code below this lin

//   console.log(Admin.AccessLevel.BASIC);
//   console.log(Admin.AccessLevel.SUPERUSER);

// Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//    onstructor(email) {
//       t chis.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     constructor({ email, posts }) {
//       // Виклик конструктора батьківського класу User
//       super(email);
//       this.posts = posts;
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); // { email: 'mango@mail.com', posts: [] }
//   console.log(editor.email); // 'mango@mail.com'

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor ({email, accessLevel}) {
  
//       super(email);
//   this.accessLevel = accessLevel;
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  

// В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//     constructor({ email, posts }) {
//       super(email);
//       this.posts = posts;
//     }
  
//     addPost(post) {
//       this.posts.push(post);
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); // { email: 'mango@mail.com', posts: [] }
//   console.log(editor.email); // 'mango@mail.com'
//   editor.addPost("post-1");
//   console.log(editor.posts); // ['post-1']

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel}) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }
  
//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }
  
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }
  
    
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  