//forEach 

console.log("------------------------forEach-----------------------");
const letters = ['a','b','c','d','b','c','d','b','c','d'];

count={};

letters.forEach((item)=> { count[item] ? count[item]++ : count[item]=1 });

console.log(count);


console.clear();
//map()

console.log("-------------------------------map-----------------------");

 numbers = [1,2,3,4,5,6];

doubledNumber =  numbers.map((item) => item*2);

console.log(doubledNumber);

console.clear();

console.log("-------------------------------map-----------------------");


products =[
    {
        name : "mobile",
        price : 5000,
        count : 5
    } ,
    {
        name : "laptop",
        price : 45000,
        count : 2
    }
];


totalSale= products.map((item) => ( {name : item.name, total : item.price * item.count}));

console.table(totalSale);


console.clear();


console.log("-------------------------------map-----------------------");

stringNumber = ['1','2','3','4'];

number = stringNumber.map(item => Number(item))


console.log(number);


console.clear();


//filter


console.log('------------------------filter-------------------');



numbers = [1,2,3,4,5,6,2,3,4,5,6];


a =numbers.filter(even);

function even(item) {

    return item%2==0
}

console.log(a);


console.clear();

console.log('------------------------filter-------------------');


dupe = numbers.filter((item , index , arr )=> arr.indexOf(item) == index);

console.log(dupe);


//reduce

console.log('---------------------reduce----------------------');



numbers = [1,2,3,4,5];


sum = numbers.reduce((total , item)=> total+item);

max = numbers.reduce((max , value )=> max>value ? max : value ) ;

console.log(max);
console.log(sum);


//totalStore value
products =[
    {
        name : "mobile",
        price : 5000,
        count : 5
    } ,
    {
        name : "laptop",
        price : 45000,
        count : 2
    }
];

totalStoreValue= products.reduce((total,item)=> total+item.price*item.count , 0);

console.log(totalStoreValue);

console.clear();

//slice

console.log('-------------------------sclice--------------------');


numbers = [1,2,3,4,5];

console.log(numbers.slice(2,5));

console.clear();

//splice

console.log('-----------------------splice----------------------');


numbers = [1,2,3,4,5];




 console.log(numbers.splice(2,2));

 console.log(numbers);

console.clear();

//  sort 

console.log('------------------------sort----------------------');


s = [5,4,3,10,2,1];

s.sort((a,b)=> a-b);

console.log(s);

console.clear();

//concat
console.log('------------------concat--------------------');

numbers = [1,2,3,4,5];

console.log(numbers.concat(s,32,43));


console.clear();


// fill
console.log('------------------------fill--------------------');

numbers = [1,2,3,4,5];


console.log(numbers.fill(0,1,4));

console.log(numbers);

console.clear()

//create an array with values 1 to 10

array10=Array(10).fill(0).map((item , index )=> index+1)

array10.forEach(item => console.log(item))


console.clear()

//includes

console.log('------------------includes---------------');


n = ["a","b","c"];

console.log(n.includes("a"));

console.clear()

//join
n.join()
console.log('-----------------join------------------');

n = ["a","b","c"];

console.log(typeof(n.join()));

console.log(n.join(" - "));

console.clear()

//reverse

console.log('------------reverse-------------');

str = "abcd";

console.log([...n].reverse());

console.log(n);

console.clear()

//reverse a string
console.log(str.split("").reverse().join(""));

console.log(str);

console.clear()

//palindrome 

text = "malayalam";

p= text.split("").reverse().join("");

console.log(p==text ? "palindrome" : "not palindrome");

console.clear()


// every 

console.log('-------------------every-------------------');



numbers = [1,2,3,4,5];

console.log(numbers.every(item => item>0)); //true for every item

console.clear()

//some

console.log('--------------------some-----------------');

numbers = [1,2,3,4,5];

console.log(numbers.some(item => item>4));

console.clear()

//find
console.log('----------------find------------------------');

numbers = [1,2,3,4,5];
console.log(numbers.find(item=>item>4));

console.clear();


//from
console.log('---------------Array.from()----------------');

numbers = [1,2,3,4,5,3,4,5];

str = '1234';

result = Array.from(str , Number);

console.log(result);

//with out duplication

nodupe =Array.from(new Set(numbers));

console.log(nodupe);
