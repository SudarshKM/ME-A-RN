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



//total salary expense of company