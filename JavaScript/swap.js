x =20 ; 

y =30 ;
console.log(x ,y);

var t;

t=x;
x=y;
y=t;


console.log(x ,y);

x=x+y ;  // 50

y= x-y; // 50-20

x-=y;  // 50-30

console.log(x ,y);
