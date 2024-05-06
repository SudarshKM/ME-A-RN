// 1)  Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."


for (let index = 0; index <= 100; index++) {

    if (index % 3 == 0 && index % 5 ==0) {
        console.log("FizzBuss")
    } else if ( index % 3 == 0) {
        console.log("Fizz");
    } else if (index % 5 == 0) {
        console.log("Buzz");
    } else console.log(index);
    
    
}

console.log("---------------------------------------------------------------------------------------------------------------------------------------------");



// 2) Write a JavaScript program that returns a subset of a string.
//    Sample Data: dog
//    Expected Output: ["d", "do", "dog", "o", "og", "g"]



var str = "dog";
var subSet = [];

str.split('').forEach((item, index) => {
    combination([...str.slice(index)]);
});

function combination (array) {       
  var temp = '';                  
  array.forEach((item) => {              
    subSet.push(temp + item);
    temp += item ;
  });
}
 

console.log(subSet);


console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


// 3) Sample data with nested arrays 
//    const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

    //1) Find the sum of all numbers in the nested arrays.

    const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

    var totalSum = 0;

    data.forEach((item) =>{
        var sum= item.reduce((total , item )=> total+item);
        // console.log(sum);

        totalSum +=sum
    });
   
    console.log(totalSum);

    console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
    //2) Find the maximum number in the entire nested array.


    temp =[]
    data.forEach(item=>{
       max =  item.reduce((a,b)=> a>b ? a : b);
      temp.push(max);
    });

    var max =  temp.reduce((a,b)=>a>b ?a:b);

    console.log(max);

    
   
    console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
   
    //3) Find the average of all numbers in the nested arrays.

    temp=[];

    data.forEach(item => {
        sum = item.reduce((a,b)=>a+b);
        avg = sum/item.length
        temp.push(avg);
    })

    avgList=temp.reduce((a,b)=>a+b);

    avgTotal = avgList/temp.length 
    console.log(avgTotal);


    console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


// 4) Find square of each number in the nested arrays.


    data.forEach(item=>{
       sqrt = item.map((item)=>item**2)
       console.log(sqrt);

    });


    console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


// 5) Find all even numbers from the nested arrays.
  

    data.forEach(item=>{
        even = item.filter((item)=>item%2==0)
        console.log(even);
    
     });


     console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


// 6) Use reduceRight to concatenate all nested arrays in reverse order.

     const concatenatedArray = data.reduceRight((acc, arr) => [...acc, ...arr], []);

     console.log(concatenatedArray);




 
     




       