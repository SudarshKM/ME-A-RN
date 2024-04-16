//find the seconde largest among three numbers & sort in descenting order  (H.W)


x=1;
y=2;
z=3;

if(x>y && x>z) {
    if(y>z) {
        console.log('2nd largest:',y);
        console.log(x,y,z);
    }
    else {
        console.log('2nd largest:',z);
        console.log(x,z,y);
    }
}

else if (y>x && y>z) {
    if(x>z) {
        console.log('2nd largest:',x);
        console.log(y,x,z);
    }
    else {
        console.log('2nd largest:',z);
        console.log(y,z,x);
    }
}

else {
    if (x>y) {
        console.log('2nd largest:',x);
        console.log(z,x,y);
    }
    else {
        console.log('2nd largest:',y);
        console.log(z,y,x);
    }
}