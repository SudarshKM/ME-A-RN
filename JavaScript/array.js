a=[10,20,30,30,20,10,40,50,10,10,20];


// find the duplicated numbers

isDuplication = false;

temp = [];

for( i=0 ; i<=a.length ; i++) {
    for (j=i+1 ; j<=a.length ; j++) {
            if (a[i] == a[j]) {
                
                temp.push(a[j]);
                isDuplication = false;


                for (k=0 ; k<=temp.length ; k++) {
                    for (p=k+1 ; p<=temp.length ; p++) {
                        if(temp[k] == temp [p]) {
                            temp.pop(temp[p]);
                            isDuplication = true;

                        }
                    }
                }
                

                }
                // console.log(a[j]);
                
                
                
            
    }
}

isDuplication?console.log(temp):console.log('no duplication');
// console.log(temp);