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

// "---------------------------------------------------------------------------"
console.log("-----------------------------");

//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

//2. district having Highest 1st dose vaccine

//3. district having lowest death rate

    console.log('district having lowest death rate');
    ldc = covid_data.reduce((c1,c2)=>c1[3]<c2[3]?c1:c2);
    console.log(ldc[1]);

    console.log("----------------------------------");

//4. sort data with +ve case in descending order

    console.log("sort data with +ve case in descending order");
    covid_data.sort((c1,c2)=>c1[2]-c2[2]).forEach(item => {console.log(item[1])});

    console.log("----------------------------------");


//5. is district with +ve cases > 15000

    console.log("is district with +ve cases > 15000");
    posc = covid_data.some(poscase => poscase[2]>15000);
    console.log(posc?"yes":"no");
    console.log("----------------------------------");


//6. sort data with 1st dose vaccine ascending order

//7. Print Thrissur details

//8. Print total number of positive cases

//9. Print total number of curred cases

//10. Print curred cases in Idukki

