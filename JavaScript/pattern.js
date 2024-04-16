

for (i=0; i<4 ; i++) {
    p="";
    for (j=0 ; j<i+1 ; j++) {
        p=p+"*";
        
    }
 console.log(p);
}

console.log('-----------------------------------');





// 1
// 2 2
// 3 3 3
// 4 4 4 4


for (i=1; i<=4 ; i++) {
    p="";
    for (j= 1; j<=i ; j++) {
        p=p+i+' ';
        
    }
 console.log(p);
}



console.log('-----------------------------------');





// 1
// 1 2
// 1 2 3
// 1 2 3 4


for (i=1; i<=5 ; i++) {
    p="";
    for (j= 1; j<=i ; j++) {
        p=p+"* ";
        
    }
 console.log(p);
}


// console.log('-----------------------------------');




for (row=1; row<=4 ; row++) {
    str="";
    for (col=4 ; col>=row ; col--) {
        str=str+"* ";
        
    }
 console.log(str);
}

console.log('-----------------------------------');





//       *
//     * * 
//   * * *
// * * * *




for (row=1; row<=4 ; row++) {
    str="";
    for(s=4;s>row;s--) {
        str= str+"  ";
    }

    for (col=1 ; col<=row; col++) {
        str=str+"* ";
        
        
    }
 console.log(str);
}

console.log('---------------pyramid--------------------');


//    *
//   * * 
//  * * *
// * * * *

for (row=1; row<=4 ; row++) {
    str="";
    for(s=4;s>row;s--) {
        str= str+" ";
    }

    for (col=1 ; col<=row; col++) {
        str=str+"* ";
        
        
    }
 console.log(str);
}

console.log('--------------h.w---------------------');


//    *
//   * * 
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *





console.log('-----------------------------------');

//       *       7
//     *   *     5  9
//   *       *   3  11
// * * * * * * *


for (row=1; row<=4 ; row++) {
    str="";
  
    for (col=1 ; col<=7; col++) {

     

            if (row + col == 5 || col - row == 3 || row ==4) {
                str = str + "* ";
    
            }
            else {
                str = str + "  ";
            }        
        
      

    }
 console.log(str);
}



console.log('-----------------------------------');


// * * * * *
// *       *
// *       *
// *       *
// * * * * *


for( row = 1 ; row <=5 ; row++) {
    str="";
    for (col = 1 ; col <=5 ; col ++) {

        if (col==1 || col ==5  || row==1 || row ==5 ) {
            str = str + "* ";

        }
        else {
            str = str + "  ";
        }
    }
    console.log(str);
}


console.log('-----------------------------------');

// 1
// 0 1
// 1 0 1
// 0 1 0 1

for (row=1; row<=4 ; row++) {
    p="";
    for (col= 1; col<=row ; col++) {
        if((row+col)%2==0) {
            p=p+"1 ";

        }
        else {
            p=p+"0 ";
        }
        
    }
 console.log(p);
}



// 1,1

// 2,2

// 3,1  3,3

// 4,2  4,4




console.log('-----------------------------------');
