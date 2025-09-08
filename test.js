// let day;

// switch (true) {
//   case 1 > 4 : console.log('Sunday');
//   break;
//   case 3 < 1 : console.log('Monday');
//   break;
//   case 5 > 9 : console.log('Tesday');
//   break;
//   case 8 == 4 : console.log('Wednesday');
//   break;
//   case 2 < 7 : console.log('Thrusday');
//   break;
//   case 3 > 2 : console.log('Friday');
//   break;
//   case 5 == 3 : console.log('Saturday');
//   break;
//   default : console.log('Not a valid day !');
// }

// let students = {
//   name : 'Ritik',
//   class : 12,
//   roll_no : 34,
//   stream : 'Science',
//   grade : ['A', 'B', 'C', 'D'],
//   code : {
//     rj : 'alwar' , hr : 'rewari'
//   },
//   intr : function () {
//     console.log('My name is ritik kumar');
//   },
// }

// for (let key in students) {
//   console.log(key + ':' + students[key]);
// }
// console.log(students.code['hr']);

// let grade = ['A', 'B', 'C', 'D']

// // for(let i=0; i<grade.length; i++) {
// //   console.log(grade[i]);
// // }

// let group = [
//   ['Ritik', 'Anish', 'Aman', 'Ravi','Rohan'],
//   ['Bhiwadi', 'Rewari', 'Delhi', 'Mumbai', 'Kolkata'],
//   ['Raj', 'Hr', 'Dl', 'Mh', 'WB'],
// ]

// console.log(group);
// b[1][1] = 'Gurgoan'
// console.log(b);

// let temp = 'MY name is Ritik Kumar'
// console.log(temp.split(' '));

// group[1].map(fruit => console.log(fruit))

// let x = [
//   [
//     [1, 3, 5, 7, 9],
//     [2, 4, 6, 8, 10],
//     [0, 1, 1, 2, 3]
//   ],
//   [
//     ['A', 'B', 'C', 'D', 'E'],
//     ['Rj','Hr', 'Br', 'Up', 'Mh'],
//     ['a','b','a','d','a']
//   ]
// ]

// debugger

// intro()

// let name = 'Ritik kumar';
// let age = 20;

// function intro() {
//   var add = 'Bhiwadi';
//   let state = 'Rajasthen';
//   let school = 'MJPS';
//   adds(3,6);
//   sub(3,2);
// }

// console.log(add);

// function adds(a,b) {
//   mul(3 * 9);
//   return a+b;
// }

// function sub(x, y) {
//   mul(3 * 4);
//   return x-y;
// }

// function mul(z, l) {
//   return z*l;
// }

// intro()
// debugger

// function outer() {
//   let counter = 0; // local to outer

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner; // return inner function
// }

// const myCounter = outer();

// myCounter(); // 1
// myCounter(); // 2
// myCounter(); // 3

// let sumArguments = function (a,d) {
//   let sum=0 ;
//   for(let i=0; i<arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum
// }

// console.log(sumArguments(2, 34, 54));

// const newAccount  = initialBalance => {
//   let balance = initialBalance ;

//   return {
//     deposit(amount) {
//       balance += amount ;
//       console.log(`Rs ${amount} credited in account. Current amount is : ${balance}`);
//     },
//     withdraw(amount) {
//       if(amount <= balance) {
//         balance -= amount ;
//         console.log(`Rs ${amount} debited in account. Current amount is : ${balance}`);
//       }else {
//         console.log(`insufficient balance`);
//       }
//     },
//     checkBalance() {
//       console.log(`Current amount is : ${balance}`);
//     }
//   };
// }

// let openAccount = newAccount(500);

// console.log(openAccount.checkBalance());

// console.log(openAccount.withdraw(501));

//  let name = function () {
//   console.log(arguments);
// }

// name('ritik', 'ravi', 'shyam')

// let mainConatiner = document.querySelector('.container');

// mainConatiner.addEventListener('click', e => {
//   if(e.target.classList.contains('box')) {
//     console.log(e.target.textContent);
//   }
// })

const button = document.querySelector(".btn");

const dogImage = document.querySelector("img");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImage.src = json.message
    });
});
