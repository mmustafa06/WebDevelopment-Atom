// CONCAT METHOD()

/* const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e'];

const newArr = arr1.concat(arr2);
console.log(newArr); */

/* const numbers = [[1,2],[3,4]];
const numbersNew = numbers.concat([[5, 6]]);
console.log(numbersNew); */



// EVERY METHOD()

const array1 = [2, 4, 6, 8, 10];

const check1 = (number) => {
    return number >= 2;
}
const result1 = array1.every(check1);

const result2 = array1.every((number) => {return number % 2 === 0});

const users =  [
    {
        name : "Omer",
        age : 8
    },
    {
        name : "Hamza",
        age : 2
    },
    {
        name : "Sumeyye",
        age : 28
    }
];
const result3 = users.every((user) => {return user.age==32})

//console.log(result3);


// FILTER METHOD()

const number2 = [12, 5, 8, 130, 44];

//console.log(number2.filter((number) => {return number>10}) );

const array2 = ['Cenk', 'Cem', 'Ece', 'Ali', 'Hasan', 'Huseyin'];

//?? const search = function(keyword, array) { array.filter(function(item){ item.toLowerCase().includes(keyword.toLowerCase()) })  };
//console.log(search("ce", array2));

