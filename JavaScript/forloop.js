
// 1 to 5
for(let i=1 ; i<=5 ; i++) {
    console.log(i);
}

console.log('--------------------');

// factorial

n=5;
f=1;
for(let i=1 ; i<=5 ; i++) {
f=f*i;
}
console.log(f);



console.log('--------------------');


//loop can iterate up-to 10 btu only print till 5

for(i=1;i<10;i++) {
    if (i<=5) {
        console.log(i);
    }
}


console.log('--------------------');

//check a give number is prime number or not

n=6;
isPrime=true;
for(i=2 ; i<n ; i++){
  if(i%i==0) {
   isPrime=false;
   break;
  }
}

isPrime?console.log('Prime'):console.log('not Prime');









