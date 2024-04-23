

Object={
A:'a',
B:'b',
C:'c'
}
console.log(Object);
console.log(Object['B']);

console.log(typeof(Object));

console.log("--------------------------------------------");

//w.a.p to find the first recursive letter - B

pattern = "aabb";


console.log(pattern.split("").find((c1,c2) => c1=c2));


count={};

charcter = Array.from(pattern);

for(char of charcter) {
    if (count[char]) {
        console.log(char);
        break;
    } else {
        count[char]=1;
    }
}




// pattern.split("").forEach(item => { if (count[item]) {
//     count[item]++;
//     console.log(count[item]);
//     break;
// } else {
//     count[item]=1;
// }
    
// });


console.log("--------------------------------------------");


weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}



// 

s = weatherData.sort((a,b)=> b.weather-a.weather);
// console.log(s);

console.log(s.find(dist => dist.district=="Thrissur"));
console.log(s.find(dist => dist.district=="Kottayam"));
console.log(s.find(dist => dist.district=="Palakkad"));
console.log(s.find(dist => dist.district=="Ernakulam"));


//create an out put object
wd={};
//access each item in wheaterData array
for(data of weatherData) {
    district = data.district;
    currentTemp = data.weather;
    //check district is in there in the output object
    if (district in wd) {
        oldTemp=wd[district]
        //compare the temperature
        if (oldTemp>currentTemp) {
            wd[district]=oldTemp;
        } else {
            wd[district]=currentTemp;
        }
    } else {
     wd[district]=currentTemp;   
    }
}

console.log(wd);

console.clear();

console.log("--------------------------------------------");

products=[
    {pid:100,pName:'apple',brand:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',brand:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',brand:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',brand:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',brand:'4g',price:10000,display:'lcd'}
]

//1. print product name only

console.log("-------------------print product name only-------------------------");

products.forEach(item=>console.log(item.pName));;

//2. print all mobile details whose display is lcd
console.log("-----------------print all mobile details whose display is lcd---------------------------");

console.log(products.filter(item=>item.display=='lcd')
);
//3. print 5g mobile phone name
console.log("--------------------print 5g mobile phone name------------------------");

brand5g=products.filter(item=>item.brand=='5g');
brand5g.forEach(item=>console.log(item.pName));;
//4. sort mobile based on price

console.log("-------------------sort mobile based on price-------------------------");


s = products.sort((a,b)=>a.price-b.price).forEach(item=>console.log(item.pName));




//5. print costly mobile

console.log("-------------------print costly mobile-------------------------");

s = products.sort((a,b)=>b.price-a.price);

console.log(s[0].pName);


//6. print low cost mobile
console.log("-------------------print low cost mobile-------------------------");


lowcost = products.reduce((c1,c2)=> c1.price<c2.price ? c1 : c2);

console.log(lowcost.pName);
