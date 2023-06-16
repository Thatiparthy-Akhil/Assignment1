// program 1
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// Object.keys(student).forEach((prop)=> console.log(prop));


// program 2
// var obj = {
// 	"One":"1",
// 	"Two":"2",
// 	"Three":"3",
// 	"Four":"4"
// 	}
// const x= Object.values(obj);
// console.log(x);

// program 3
// var library = [
// 	{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
// 	{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
// 	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// 	];
// library.sort((p1,p2) => p1.title > p2.title ? 1 : -1);
// console.log(library);

// program 4

// let sample = "gmail.com";
// let count = (sample.match(/m/g) || []).length;
// console.log(count);

// (or)

// let z = "gmail.com";
    
// let ch = 'm';
// let count1 = 0;

// for(let i = 0; i<z.length; i++){
//   if(z.charAt(i) == ch){
//     count1 ++;
//   }
// }

// console.log(count1);

// program5
// var myObj =
// 	[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
// 	{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
// 	{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
// 	{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
// 	{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
// 	{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}
// ];
// let o=myObj.filter(obj => obj.occupation ==="Programmer");
// console.log(o);
// myObj.sort((p1,p2) => p2.age < p1.age ? -1 : 0);

// console.log(myObj);
// var newArray = myObj.map(function(obj) {
//     return obj.name;
//   });
  
//   console.log(newArray);
// var newObj = myObj.reduce(function(acc, obj) {
//     if (!acc[obj.occupation]) {
//       acc[obj.occupation] = [];
//     }
//     acc[obj.occupation].push({'name': obj.name, 'age': obj.age});
//     return acc;
//   }, {});
  
//   console.log(newObj);

// program 6
// var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';	
// const obj = JSON.parse(jsonStr);
// console.log(obj);
// console.log(obj.chels);

//  Question1
// What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
// In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code.
// in strict mode Using a variable without declaring it, is not allowed.

// Question2

// function average(a, b) {
//   return a + b / 2;
// }
// console.log(average(2, 1));
// operator precedence will be followed by one rule that is BODMAS(Bracket of Division Multiplication Addition And Subtraction)
// according to this rule division has more precedence.\

// Question3
// Does JavaScript pass parameter by value or by reference?
// In javascript, all function arguments are always passed by value.
// Where as in objects and arrays are passed by reference.

// Question4

// function f(a,b,c) {
//     m=["1","2","3"];
//     a = 3;
//     b[0]= "X";
//     c.first = false;
// }
// var x = 4;
// var y = ["A", "B", "C"];
// var z = {first: true};
// f(x,y,z);
// console.log(x, y, z);

// function g(a){
//   a={first: true};
//   console.log(a);
// }

// g(z);
// console.log(z);


// Question4
//  What is the difference between “undefined” and “not defined” in JavaScript?
// undefined: it means the variable which we have created is not assigned to any value.
// let x;
// console.log(x);//here x is undefined.
// not defined : it means without declaring a variable if we ascess ,it will show error as not defined.
// console.log(y); // ReferenceError: y is not defined

// Question5
// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }
// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(foo1());
// console.log(foo2());
// output: { bar: 'hello' }   undefined
// In the case of foo1 it is return the string hello
// where as in the case of foo2 after return statement the bar is in the next line javascript interprets the return as an independent statement and shows the output as undefined.  


// Question6
// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();
// // output is 1 4 3 2
// in case of 1 and 4 it is directly logging the value so it will print according to the order
// but in the case of 2 and 3 there is a function called setTimeout which is used to delay the output.
// 3 is delayed for 0 milliseconds and 2 is delayed for 1 seconds(1000milliseconds) so after 1 second it will print 2.

// Question7
//    function sum(x) {
//     var totalSum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       totalSum += arguments[i];
//     }
//     console.log(totalSum);
//   }
  
//   sum(3, 4);

// Question8

// for (var i = 0; i < 5; i++) {
// 	(function(x) {
//     	setTimeout(function() { console.log(x); },  1000 );
//     })(i);
// }
// here we are printing 0 to 4 numbers using for loop.
// but we are setting timeout to 1 second so after one second it will print the output.
// out put : 0 1 2 3 4

// Question9

// var x= 5;
// function check(){
//   y = 10;
//   console.log(x);
//   var x =10;
// }
// function check2(){  
//   console.log(y);
// }
// check();
// check2();

// output:  undefined 10
// first x is declared globally as 5 but in check function it is declared as 10 after console so the variable is there but not assigned it will print as undefined.
// in check2 function there is no y so y is checked outside the function so it will print as 10.

// Question10
// var arrayList =  ['a','b','c','d','e','f'];
// arrayList = [];
// console.log(arrayList);

// Question: What is typeof []
// console.log(typeof[]);
// Answer : Object

// Question: What is typeof arguments
//   console.log(typeof arguments);
// Answer: Object

// Question: What is 2+true
// console.log( 2+true);
// Answer: 3

// Question: What is '6'+9
// console.log('6'+9);
// Answer: 69

// Question: What is the value of 4+3+2+"1"
// console.log(4+3+2+"1");
// Answer: 91 

// Question: What is the value of "1"+2+4
// console.log("1"+2+4);
// Answer: 124

// Question: What is the value of -'34'+10
// console.log(-'34'+10);
// Answer: -24

// Question: What is the value of +'dude'
// console.log(+'dude');
// Answer:NaN

// Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// var y=1;
// console.log( x = y = typeof x);
// Answer:undefined

// Question: for var a = (2, 3, 5); what is the value of a?
// var a = (2, 3, 5);
// console.log(a);
// Answer: 5

// for var a = (1, 5 - 1) * 2 what is the value of a?
// var a = (1, 5 - 1) * 2 
// console.log(a);
// Answer:8

// Question: What is the value of !'bang'
// console.log(!'bang');
// Answer:false

// Question: What is the value of parseFloat('12.3.4')
// console.log(parseFloat('12.3.4'));
// Answer:12.3

// Question: What is the value of Math.max([2,3,4,5]);
// console.log(Math.max([2,3,4,5]));
// Answer:NaN

// Question: What is the output of 3 instanceof Number
// console.log(3 instanceof Number);
// Answer:false

// Question: What is the output of null == undefined
// console.log(null == undefined);
// Answer:true

// Question:What is the value of !!function(){};
// console.log(!!function(){});
// Answer:true

// Question: What is the value of typeof bar
// console.log(typeof bar);
// Answer:undefined

//  Question: What is the value of typeof null
// console.log( typeof null);
// Answer:object

//  Question: If var a = 2, b =3 what would be value of a && b
// var a=2,b=3;
// console.log(a && b);
// Answer:3

// Question: What would be consoled var foo = 'outside'; function logIt(){console.log(foo); var foo = 'inside';} logIt();
//  var foo = 'outside'; function logIt(){console.log(foo); var foo = 'inside';} logIt();
// Answer:undefined

// Question: What is -5%2
// console.log(-5%2);
// Answer:-1

// Question: Why .1+.2 != .3
// console.log(.1+.2 != .3);
// Answer:true

// Question: What is the output of 42..toString()
// console.log(42..toString());
// Answer:42

// Question: What is the output of 4.2..toString
// console.log(4.2.toString);
// Answer:[Function: toString]

// Question: What is the output of 42 . toString()
// console.log(42 . toString());
// Answer:42

// Question: What is the output of typeof(NaN)
// console.log(typeof(NaN));
// Answer:number

// Question: What is the output of  2 in [1,2]
// console.log(2 in [1,2]);
// Answer:false