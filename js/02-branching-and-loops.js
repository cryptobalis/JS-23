function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  
  const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
    // Change code above this line
    return message;
  }

//   console.log(makeOrderMessage(2, 100, 50));
//   console.log(makeOrderMessage(4, 300, 100));
//   console.log(makeOrderMessage(10, 70, 200));


  function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;
  
    // Change code above this line
    return passed;
  }

//   console.log(isAdult(19));


// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD;
  
//     // Change code above this line
//     return isMatch;
//   }

//   console.log(isValidPassword('kiwirul3z'));

function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }

//   console.log(checkAge(20));

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered > available) {
//       message = "Not enough goods in stock!";
//       }
//       else {
//       message = "Order is processed, our manager will contact you.";
//       }
  
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;
  
    if (totalPrice > customerCredits) {
      message = "Insufficient funds!";
    }
    else {
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
  
    // Change code above this line
    return message;
  }

  
//   console.log(makeTransaction(3000, 5, 23000));

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     if (ordered === 0) {
//       message = "There are no products in the order!";
//       } else if (ordered > available) {
//       message = "Your order is too large, there are not enough items in stock!";
//       }
//     else {
//       message = "The order is accepted, our manager will contact you";
//     }
    
  
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(10, 20));
//   console.log(checkStorage(10, 5));

function isNumberInRange(start, end, number) {
    const isInRange = (number >= start && number <= end); // Change this line
  
    return isInRange;
  }

//   console.log(isNumberInRange(10, 30, 17));

function checkIfCanAccessContent(subType) {
    const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line
  
    return canAccessContent;
  }

//   console.log(checkIfCanAccessContent("vip"));

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }

//   console.log(isNumberNotInRange(10, 30, 17));

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
    if (totalSpent >= 50000){
      discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
      discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
    } else {
      discount = BASE_DISCOUNT;
    }
  
    // Change code above this line
    return discount;
  }

//   console.log(getDiscount(137000));
//   console.log(getDiscount(46900));
//   console.log(getDiscount(8250));

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
    // if (ordered > available) {
    //   message = "Not enough goods in stock!";
    // } else {
    //   message = "The order is accepted, our manager will contact you";
    // }
  
    // Change code above this line
    return message;
  }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword('jqueryismyjam'));
//   console.log(checkPassword('angul4r1sl1f3'));
//   console.log(checkPassword('r3actsux'));

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

// console.log(getSubscriptionPrice("professional"));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;

    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;

  default:
    message = "Access denied, wrong password!";
      
  }

  // if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }

  // Change code above this line
  return message;
}

// console.log(checkPassword("sdfdsfgdfgdf"));

function getShippingCost(country) {
  let message;
  // Change code below this line
  let cost;
  switch (country){
    case "China":
      cost = 100;
      message = `Shipping to ${country} will cost ${cost} credits`;
      break;

          case "Chile":
            cost = 250;
      message = `Shipping to ${country} will cost ${cost} credits`;
      break;

          case "Australia":
            cost = 170;
   message = `Shipping to ${country} will cost ${cost} credits`;
      break;

          case "Jamaica":
            cost = 120;
      message = `Shipping to ${country} will cost ${cost} credits`;
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code above this line
  return message;
}
// console.log(getShippingCost("Australia"));

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

// console.log(getNameLength("Poly"));

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

// console.log(lastElement);

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

// console.log(getSubstring('Hello world', 3));

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  if (message.length <= maxLength) {
    result = message;
  } else {
    result = `${message.slice(0, maxLength)}...`;
  }

  /// Change code above this line
  return result;
}

// console.log(formatMessage('Curabitur ligula sapien', 16));

// Функция возвращает введенные данные в нижнем регистре:

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

// console.log(normalizeInput("ASFsdfsFASF"));

// Метод проверяет вхождение подряда (name) в ряд (fullName):

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
   return result;
 }
//  console.log(checkForName('Egor Kolbasov', 'Egor'));
//  console.log(checkForName('Egor Kolbasov', 'egor'));



function checkForSpam(message) {
  let result;
  // Change code below this line

  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("spam")) {
    result = true;
  }
  else if (normalizedMessage.includes("sale")) {
     result = true;
  }
    
  // Change code above this line
  return result;
}


// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
