//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]


// print all employee name 

console.log(`employee name is : `);
// for(let emp of employee){
//     console.log(emp[1]);
// }


employee.forEach(emp => { 
    console.log(emp[1]);
    
});





console.log('.................................');
//print total numbers of employee

console.log(`Total no of employee is : ${employee.length} `);
/* a = employee.length
console.log(a); */
console.log('.................................');


//print developer employee details
console.log("developer employee details");
for(let emp of employee){
    if(emp[2]=='developer'){
        console.log(emp);
    }
}

filter = employee.filter(emp => emp[2]=="developer").forEach(pro => console.log(pro[1]));
console.log(filter);
console.log('.................................');

// print details of employee Laisha

console.log('details of employee Laisha');
for(let emp of employee){
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}

Laisha = employee.find(l=>l[1]=='Laisha');
console.log(Laisha);
console.log('.................................');


//print employee name whose salary > 30000

console.log('employee name whose salary > 30000');

console.log('Employee name whose salary > 30000');
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp[1]);
    }
}

employee.filter(s=>s[4]>30000).forEach(pro=>console.log(pro))
console.log('.................................');
//sort employee based on their salary in descending order
//sort((a,b)=>b-a)

desc=employee.sort((n1,n2)=>n2[4]-n1[4])

console.log(desc);
console.log('.................................');

//sort employee based on their experience in ascending order
//sort((a,b)=>a-b)

asce=employee.sort((n1,n2)=>n1[5]-n2[5])

console.log(asce);
console.log('.................................');

// print the employee name whose have the higest salary

desc=employee.sort((n1,n2)=>n2[4]-n1[4])
console.log(desc[0][1]);



// -------------------------------------------------------


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

console.log(" sort data with 1st dose vaccine ascending order ");
covid_data.sort((c1,c2)=>c1[5]-c2[5]).forEach((item)=>{console.log(item[1]);});

console.log("----------------------------------");


//7. Print Thrissur details

    console.log("Print Thrissur details");

    thrissur = covid_data.find(dist=>dist[1]=="Thrissur");
    console.log(thrissur);
    console.log("----------------------------------");


//8. Print total number of positive cases
    console.log(" Print total number of positive cases");

    totalPC = covid_data.map(pc=>pc[2]).reduce((pvc1,pvc2)=>pvc1+pvc2);
    console.log(totalPC);

    console.log("----------------------------------");

//9. Print total number of curred cases
    console.log("Print total number of curred cases");
    tcuc = covid_data.map(cc=>cc[4]).reduce((cuc1,cuc2)=>cuc1+cuc2);
    console.log(tcuc);
    console.log("----------------------------------");

//10. Print curred cases in Idukki

    console.log("Print curred cases in Idukki");

    idukki = covid_data.find(dist=>dist[1]=="Idukki");
    console.log(idukki[4]);

    console.log("----------------------------------");


