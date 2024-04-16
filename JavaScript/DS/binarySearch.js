// binarySearch 
a=[1,2,3,4,5,6,5,4,3];

low=0;

searchItem=2;

high = a.length-1;

isFound=false;

a.sort((a,b) => a-b) ; 

while(low<=high) {

mid=Math.floor((low+high)/2);

    if(a[mid]== searchItem) {
        isFound = true;
        break;
    }

    else if (a[mid] > searchItem) { 
        high = mid -1
    }

    else {low = mid + 1}
}


console.log(isFound?"present" : "not Present");
console.log(isFound);


//-------------------------------------------------------------------------------------------------------
console.log('------------------------------------- common numbers -----------------------------------------------');



// find the commom numbers 

a1=[1,2,3,4,5,6,5,4,3];
b1=[3,2,4,5,6,7,7,3,4,32,2];

a1.sort((a,b) => a-b);
b1.sort((a,b) => a-b);



i=0; //index of a
j=0; //index of b


while (i<a1.length && j<b1.length) {
    if(a1[i]==b1[j]) {
        console.log(a[i]);
        i++;
        j++;
    }

    else if (a1[i] > b1[j]) {
        j++;
    }
    else {
        i++;
    }
  

}

//-------------------------------------------------------------------------------------------------------
console.log('------------------------------------ sum pair ------------------------------------------------');


p=[1,2,3,4,5];

sum = 7;

low= 0 ;

high = p.length-1;

isPresent = false;

while (low < high) {
    currentSum = p[low] + p[high];

    if( currentSum == sum ) {
        console.log(p[low] ,',', p[high]);
        low++;
        isPresent = true;
    }

    else if (currentSum < sum) {
        low++;
    }
    else {
        high--;
    }
}


!isPresent && console.log("no pair available");