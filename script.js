// 1
for (i = 1; i < 8; i++){
    console.log(i);
  };

console.log('======================');

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
}

console.log('======================');

// 3a
const wizards= [
    `Harry Potter`, 
    `Hermione Granger`, 
    `Ron Weasley`
];

// 3b
for (names of wizards){
    console.log(names);
  }

  /* if you wanted to do this as a "for" loop, you could do the following:
  for (i = 0; i < wizards.length; i++){
    console.log(wizards(i));
  }
  */

console.log('======================');

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies <= 7) {
    // console.log(harryPotterMovies);
    harryPotterMovies++;
};

// 4c
console.log(harryPotterMovies); 

console.log('======================');

// BONUS
// 5a
const hogwartsHouses = [
    `Gryffindor`, 
    `Hufflepuff`, 
    `Ravenclaw`, 
    `Slytherin`
];

// 5b
for (list of hogwartsHouses){
  for (letters of list){
      console.log(letters);
    }
  } 

  console.log('======================');

// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b
let magicQuote = ``;
for (i = 0; i < quote.length; i++){
  magicQuote+= ` ${quote[i]}`;
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

console.log('======================');

// 7
// Inspired by FizzBuzz
for (i = 1; i <= 25; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`Expecto Patronum`);
  } else if (i % 3 === 0){
    console.log(`Expecto`);
  } else if (i % 5 === 0){
    console.log(`Patronum`);
  } else {
    console.log(i);
  }
}
