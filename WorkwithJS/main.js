// var, let, const are ways to set variable in Javascript
// let as a variable is used to reassign values alright used

//Stirng, Numbers, Boolean, null, undefined, Symbol are types of data that can be assigned to the variables 
// quotes ("" or'') are uesd for strings
// const name='John'; //string
// const age=40; //numbers

//Concatenation
// console.log('My name is '+name+' and i am '+age+'');
// Template String
//console.log(`My name is ${name} and i am ${age}`);
// const hello= `My name is ${name} and i am ${age}`;

// console.log(hello);

// const s=`technology, computer, it, code`;

// console.log(s.substring(0,10) .toUpperCase());
// console.log(s.split(', '));

//Arrays - Are vriables that holds multiple values and they are 0 based

// const fruits =['apples', 'orange', 'pears'];

// This is to add grapes to the fourth place as array starts from 0 fruits[3]='grapes';

// This is to add the fruits to become the last item on the list  fruits.push('mangoes');

// This is to add the fruit to the beginning of the line fruits.unshift('strawberries');

// This is the delete the last item on the list of fruit fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('orange'));

// console.log(fruits);

// Object Literals

const person ={
    firstName: 'Emmanuella',
    lastName: 'Ogbu',
    age: 23,
    hobbies: ['podcast', 'reading', 'learning'],
    address:{
        street: "198 Valentio\'s Street",
        city: 'Abuja',
        state: 'FCT',
    }
    };

     //const{firstName,  lastName, address: {city}} =person;

    //console.log(city);

   // person.email='ellakosyogbu@gmail.com';
    //console.log(person);

   const todos =[
        {
            id:1,
            text:'Buy items needed for the house',
            isCompleted:true
        },
        {
            id:2,
            text:'Have my bath and take my medications',
            isCompleted:true
        },
        {
            id:3,
            text:'Design a Website',
            isCompleted:false
        }
    ];

/*const todoJSON =JSON.stringify(todos);
console.log(todoJSON);*/

/* for (let todo of todos){
console.log(todo.text);
}*/

//forEach, map, filter

/*todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText =todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoCompleted =todos.filter(function(todo){
return todo.isCompleted ===true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);*/

/*const x = 4;
const y =11;

if(x >5 && y >10) {
    console.log('x is more than 5 or y is more than 10');
} */

   /* const x=0.5;

const color ='x > 10 ? 'red' : 'blue'';

// console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');
            break;
}*/

/*const addNums = (num1 = 1, num2 =1)  =>(num1 + num2);

console.log(addNums(5,5));*/

//Constructor function
class Person{
function Person(firstName, lastName, dob){
this.firstName =firstName;
this.lastName =lastName;
this.dob = new Date (dob);
}
/*this.getBirthYear = function() {
    return this.dob.getFullYear();
}
this.getFullName =function(){
    return `${this.firstName} ${this.lastName}`;
}
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Class
class Person {
    constructor(firstName, lastName, dob){
this.firstName =firstName;
this.lastName =lastName;
this.dob = new Date (dob);
}

getBirthYear(){
    return this.dob.getFullYear();
}

getFullName(){
    return`${this.firstName} ${this.lastName}`;
}
}

//instantiate object
const person1 =new Person('Emmanuella', 'Ogbu', '5-3-2002');
const person2 =new Person('Andrew', 'Bob', '6-9-2000');

console.log(person1);
console.log(person2.getFullName());*/


/*const btn = document.querySelector('.btn')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ;

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background =
    '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1> Hello</h1>';
});*/

const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit'. onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}
            : ${emailInput.value}`));

            userList.appendChild(li);

            //Clear fields
            nameInput.value='';
            emailInput.value='';
            console.log('success');
    }
}