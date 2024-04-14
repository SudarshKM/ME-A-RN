//reduce method
a=[2,3,42,5,6,7];
//prgm to fing the highest of given array


highest = a.reduce((n1,n2) => n1>n2?n1:n2);
console.log(highest);
//prgm to fing the lowest of given array

lowest = a.reduce((n1,n2)=>n1<n2?n1:n2);
console.log(lowest);
//prgm to fing the sum of given array

sum = a.reduce((n1,n2)=>n1+n2)
console.log(sum);

