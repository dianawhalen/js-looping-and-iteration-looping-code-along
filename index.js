// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// }

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

let thankYouCards = writeCards(["Ada", "Brendan", "Ali"], "birthday");
console.log(thankYouCards);

function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10);
