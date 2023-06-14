// program 1
const num1 = 3;
const num2 = 2;
const num3 = 10;
const num4 = 5;
const num5 = 7;
let largest;


if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    largest = num2;
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    largest = num3;
}
else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    largest = num4;
}
else {
    largest = num5;
}


 console.log("The largest number is " + largest);

// program 3
const Names = ["Akhil", "Srinath", "Surya", "Siva"];
console.log(Names.sort());
console.log(Names.reverse());

const names = ["Akhil", "Srinath", "Surya", "Siva"];
const decending = names.sort((Akhil, Srinath) => (Akhil > Srinath ? -1 : 1));
console.log(decending);

// program 4

let array = ["Html", "Css", "js",
            "Angular", "Html", "Css"];
 
    function removeDuplicates(array) {
        let newArray = [];
        array.forEach(element => {
            if (!newArray.includes(element)) {
                newArray.push(element);
            }
        });
        return newArray;
    }
 
    console.log(removeDuplicates(array));

// program 6
let person = {
    firstName: "Akhil",
    lastName: "Thatiparthy",
    age: 22,

};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// program 2

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd + '/' + yyyy;
console.log(formattedToday);
 var date = new Date();
 console.log(date);

// program 5


function array3(array1, array2){

   
    let arr = array1.concat(array2);
    let newArray = [];

   
    for(let i of arr) {
        if(newArray.indexOf(i) === -1) {
            newArray.push(i);
        }
    }
    console.log(newArray);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]


array3(array1, array2);