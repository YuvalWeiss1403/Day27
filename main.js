const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "Sara", age: 28 },
   };
   
//EX2 
//1)
// Write a function that takes an object as an argument and 
// returns an array of the object's keys.

const arrayOfObjectkeys = (obj) =>(Object.keys(obj));

//2)
// Write a function that takes an object as an argument and 
// returns a new object with all of the keys in the original
// object converted to uppercase.

const convertKeysToUpperCase =(obj) => {
    for(const key in boj){
        key.toUpperCase();
    }
}

//3)
// Write a function that takes an object as an argument and 
// returns an array of the object's values.

const arrayOfObjectValues = (obj) => (Object.values(obj));

//4)
// Write a function that takes an object as an argument and 
// returns a new object with all of the values in the original
// object multiplied by 2.

const multipliedByTwo = (obj) =>{
for(const value of boj){
    value*=2;
}};

//5)
// Write a function that takes an object as an argument and 
// returns a new object with all the keys and values from the
// original object, but with the keys and values reversed.

const reverseKeyAndValue =(obj)=>{
    for (const [key,value] of Object.entries(obj)){
        obj[value] = key;
        obj[key] = value;
    }
};

//6)
// Write a function that takes an object as an argument and 
// returns the sum of all of the values in the object.

const sumOfAllValues = (obj) =>{
    let sumOfAll = 0;
    for(const value of Object.values(obj)){
        sumOfAll+=value;
    }
    return sumOfAll;
}

//7)
// Write a function that takes an object as an argument and 
// returns the average value of all of the object's properties.
const AvgOfAllValues = (obj) =>{
    let sumOfAll = 0;
    for(const value of Object.values(obj)){
        sumOfAll+=value;
    }
    return sumOfAll/Object.values(obj).length;
}


//8)
// Write a function that takes an object as an argument and 
// returns a new object with all the key-value pairs from the original object,
// sorted alphabetically by the keys.

//9)
//Use Object.values() and forEach() to check if an object contains a specific name.

const checkIfPersonExist =(obj,checkName) => {
    console.log(Object.values(obj));     
    Object.values(obj).forEach(person=>{
        console.log(person);
        if(person.name === checkName){
            return true;
        }
    })
    return false;
};
console.log(checkIfPersonExist(people,"Mike"));
// checkIfPersonExist(people,"Mike");


//10)
// Write a function called wordFrequency that takes an array of strings
// as an argument and counts how many times each word appears in the array. 
// Use for..of
// Bonus - use reduce to solve the exercise

const wordFrequency = (words) => {
    let wordCounts = {};
    words.forEach((word) => {
      if (wordCounts.hasOwnProperty(word.toLowerCase())) {
        wordCounts[word]++;
      } else {
        wordCounts[word.toLowerCase()] = 1;
      }
    });
    return wordCounts;
  };
