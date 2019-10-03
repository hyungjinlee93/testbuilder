// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if(cardNumber.length === 14){
    if((cardNumber[0] + cardNumber[1]) === '38' || (cardNumber[0] + cardNumber[1]) === '39'){
      return 'Diner\'s Club';
    }
  }
  if(cardNumber.length === 15){
    if((cardNumber[0] + cardNumber[1]) === '34' || (cardNumber[0] + cardNumber[1]) === '37'){
      return 'American Express';
    }
  }
  if(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
    if(cardNumber[0] === '4'){
      return 'Visa';
    }
  }
  if(cardNumber.length === 16){
    let firstTwo = cardNumber[0] + cardNumber[1];
    let firstThree = cardNumber[0] + cardNumber[1] + cardNumber[2];
    let firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
    if(firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo == '55'){
      return 'MasterCard';
    }
    if(firstFour === '6011'){
      return 'Discover';
    }
    if(Number(firstThree) >= 644 && Number(firstThree) <= 649){
      return 'Discover';
    }
    if(firstTwo === '65'){
      return 'Discover';
    }
  }
  if(cardNumber.length === 19){
    let firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
    if(firstFour === '6011'){
      return 'Discover';
    }
  }
  if(cardNumber.length <= 19 && cardNumber.length >= 12){
    let firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
    if(firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304'){
      return 'Maestro';
    }
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
