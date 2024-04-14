

function add(n1 , n2) {
    sum = n1 + n2 ;
    return sum ; 
}


sum = add(5 , 3);

console.log(sum);


console.log('--------------- +ve or -ve  -------------------');





function positiveNegative(num) {
    

    num>0 ? console.log("+ve") : console.log("-ve");;
}


positiveNegative(5);



console.log('------------- find cube of a given number ---------------------');

 

function cube (num) {
    return num**3;
}

console.log(cube(3));



console.log('-------------- odd or even --------------------');



function oddOrEven(num) {
    

    num%2==0 ? console.log("even") : console.log("odd");;
}


oddOrEven(5);