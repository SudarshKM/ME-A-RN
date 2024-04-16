// print pais whose sum is 6

b=[2,3,4,5];

for(i=0 ; i<=b.length ; i++) {
    for(j=i+1 ; j<=b.length ; j++) {
        if (b[i]+b[j]==6) {
            console.log(b[i],b[j]);
        }
    }
}