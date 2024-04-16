n=1;

while (n<+3) {
    console.log('JS');
    n++;
}


n=1;
while (n<6) {
    console.log(n);
    n++;
}
console.log('--------------------');

n=10;
while (n>0) {
    console.log(n);
    n--;
}


// even numbers in b\w 1 to 15

console.log('--------------------');

n=2;

while (n<15) {
    console.log(n);
    n=n+2;
    
}

console.log('--------------------');

// sum of 1 to 10 numbers

sum=0;
n=1;
while (n<=10) {
    sum=sum+n;
    n++;
}

console.log('sum :',sum);




// 2   3   4   5
// 24 369 4936 

//2*12 , 3*123 , 4*1234 etc.
console.log('--------------------');



n=2;

while (n<=5) {
    let i =1;
    m='0';
    while (i<=n) {
        m=m+i;
        i++;
    }

    console.log(n*m);
    n++;
}

console.log('--------------------');


//2+22 , 3+33+333 , 4+44+444

m=3;
j=1;
str="";
sum=0;
while (j<=m) {
    str=str+m;
    sum=sum+Number(str);
    j++;
}

console.log(sum);


console.log('--------------------');


// display number whose exponentional is in the range of 8 & 36 . where user can input power value 

power = 2;
i =1;
op=0;

while (i<36) {
    op=i**power
    if (op>8 && op<=36) {
        console.log(i);
    }
    i++;
}

