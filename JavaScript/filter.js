//filter

a = [10,12,15,13,25,2,3,5];

//all even number

even = a.filter((n1)=> n1%2==0);
console.log(even);


//greater number
greater = a.filter((n1)=> n1>13);
console.log(greater);

//w.a.p to check whether number >13 exist in the given array

c = a.some((num) => num>13);
console.log(c);
console.log(c?'yes':'no');