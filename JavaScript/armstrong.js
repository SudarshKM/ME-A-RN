n=153;
m=n;
l=(153+"").length;

sum=0;

// console.log(l);
for(i=0;i<l;i++) {
    digit = n%10;
    // console.log(digit);
    n=Math.floor(n/10);
    // console.log(n);
    sum = sum + digit**l;
    if(sum===m) {
        console.log(sum);

    }

}




// display all armstrong no.s b/w 8-500

console.log("--------------------------------------------");

// for(i=8 ; i<=500 ; i++) {

//     n=i;
//     m=n;
//     l=(i+"").length;

//     sum=0;

// if(l>2) {
//     // console.log(l);
//     for(j=0;j<l;j++) {
//         digit = n%10;
//         // console.log(digit);
//         n=Math.floor(n/10);
//         // console.log(n);
//         sum = sum + digit**l;
//         if(sum===m) {
//             console.log(sum);
    
//         }
    
//           }
// }

// }


console.log("--------------------------------------------");


for (num=8 ; num <=500 ;num++) {
    power = (num+'').length;
    sum=0;
    temp=num;

    if(power != 1) {
        while (temp>0) {
            remainder = temp % 10 ;
            sum = sum + remainder ** power ;
            temp = Math.floor(temp/10);
        }
    }
    else {
        sum = 0;
    }

    if (sum==num) {
        console.log(num);
    }
}