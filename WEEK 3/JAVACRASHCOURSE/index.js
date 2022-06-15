/* Data Types:
undefined, null, boolean, string, symbol, number, and object

var myName = "Caden";
// Used anywhere

myName = 8;

let ourName = "Caden Allen";
//Used within scope of local area

const pi = 3.14;
//Can not change const = constant

var a;
var b = 2;

a = 7;

b = a;

console.log(b);

var a = 9;

var a = 5;
var b = 6;
var c = 7;

a = 7 + a;
//INSTEAD DO THIS:

a += 7;
//You can replace + with - / * also with strings

var myStr = "I am a\"double quoted\" string inside \" double quotes";
console.log(myStr)

// putting \ before quote allows for more than two quotes

/****
CODE OUTPUT
\' Single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed



3 == 3 true
3 === '3' not true 




//Object

var ourDog = {
    "name": "Dog",
    "legs": 4,
    "tails": 1,
    "friends":["everything"]
}

*/


/** PRACTICE - BEGINNER*/
/** 
function isEven(num){
    return num % 2 === 0 ?  1 : -1;
                        ternary operator
}


console.log(isEven(3));
*/

/** 
function isLoggedInAndSubscribed(loggedIn, subscribed){
    return loggedIn || subscribed === true ? true : false;
}

console.log(isLoggedInAndSubscribed(false, true))
*/

/** PRACTICE MEDIUM

function filterOutFalsy(value1, value2){
    return !value1 ? value1:value2;
}

console.log(filterOutFalsy(0, 'Dog'))


function arrLength(arr){
    return arr.length;
}

console.log(arrLength([1, 2, 3, 6,]))


function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; ++i){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([200, 400, 600]))


function progressiveSum(num){
    let sum = num;
    for(let i = 0; i < num; ++i){
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(3))


function calcTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60)
    
    if (minutes.toString().length === 1){
        minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
}

console.log(calcTime(90))



function getMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([1000, 3, 400, 2000]))


function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString('abc'))



function convertToZeros(arr){
    for (let i = 0; i < arr.length; ++i){
        arr[i] = 0;
    }
    return arr

    return new Array(arr.length).fill(0);
    
    return arr.map(elem => 0);
}

console.log(convertToZeros([1, 2, 3]))


function removeApples(arr){
    let noApples = [];
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 'Apple' && arr[i] !== 'apple'){
            noApples.push(arr[i]);
        }
    }
    return noApples


    return arr.filter(elem => elem !== 'Apple)
}

console.log(removeApples(['Apple', 'Apple', 'apple', 'Orange']))

PRACITCE HARD


function showRating(rating){
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i){
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)){
        ratings += " .";
    }
    return ratings;
}

    console.log(showRating(4));



function sortLowToHigh(arr){
    return arr.sort((a, b) => b - a)


}

function getMax(arr){
    let testArray = [];
    for (let i = 1; i < arr.length; ++i){
        let max = arr[0];
        let array = arr;
        for (let i = 1; i < arr.length; ++i){
            if (arr[i] > max){
                max = arr[i];
                arr.push(max);
                delete arr[i]
                
            }
            max = arr[0];
        }
    }
    return arr;
}

console.log(getMax([1000, 3, 400, 2000]))
console.log(sortLowToHigh([1, -6, 499, -500, 6000, 3021, 529]))

function sortHighToLow (numbers){
    return numbers.sort((a, b)) => b.price - a.price
}

console.log(
    sortHighToLow([
        {id: 1, price: 50},
        {id: 2, price: 0},
        {id: 3, price: -500},
    ])
)





async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId);

    console.log(posts)
}

postsByUser(4);


async function firstSixIncomplete(){
    const list = await fetch("https://jsonplaceholder.typicode.com/todos");

    const list2 = await list.json();

    const result = list2.slice(0, 6);

    //const result = list2.filter(element => element.id < 7);

    console.log(result)
}

firstSixIncomplete();



PROMISES AND HOW THEY WORK



console.log('person1: shows ticket');
console.log('person2: shows ticket');
// Movie theater queue, you do not have ticket
const promiseToBringTicket = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

promiseToBringTicket.then((t) => {
    console.log(`person3: shows ${t}`)
})

console.log('person4: shows ticket')
console.log('person5: shows ticket')

FURTHER PROMISES



console.log('person1: shows ticket');
console.log('person2: shows ticket');
// Movie theater queue, you do not have ticket
const promiseToBringTicket = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseToBringTicket.then((t) => {
    console.log('wife: I have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`))
});

getButter.then((t) => console.log(t))


console.log('person4: shows ticket')
console.log('person5: shows ticket')


 ASYNC AND AWAIT 


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    let ticket = await promiseWifeBringingTicks;


    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn

    console.log(`husband: i got some ${popcorn}`);
    console.log('wife: we should go in');
    console.log('wife: I need some butter on my popcorn');

    let butter = await addButter;
    console.log(`husband: i got some ${butter}`);
    console.log(`husband: anything else?`);
    console.log('wife: lets go we are getting late');
    console.log(`husband: ok`);





    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')



FURTHER ASYNC



console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getCandy = new Promise((resolve, reject) => resolve(`candy`));

    const getCoke = new Promise((resolve, reject) => resolve(`coke`));

    let ticket = await promiseWifeBringingTicks;

    let [popcorn, candy, coke]= await Promise.all([getPopcorn, getCandy, getCoke])

    console.log(`${popcorn}, ${candy}, ${coke}`)
    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')


ASYNC WITH ERROR


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
        setTimeout(() => reject('ticket'), 3000);
    });

    let ticket;
    try {
        ticket = await promiseWifeBringingTicks;
    } catch(e) {
        ticket = 'sad face';
    }
    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')


ASYNC TEST


const testUserForm = async () => {
    
    const loadUserForm = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('page loaded'), 3000);
    });

    const enterUserName = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('page loaded'), 3000);
    });

    const verifyUserDetails = () => {

    }

    await loadUserForm;
    await enterUserName;
    const testResult = verifyUserDetails();

    return testResult;
}

testUserForm.then((t) => console.log(`result is ${t}`))




*/