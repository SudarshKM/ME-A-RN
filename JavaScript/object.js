

Object={
A:'a',
B:'b',
C:'c'
}
console.log(Object);

console.log(Object['B']);  

// type of key == string

console.log(typeof(Object));

console.log(Object.B);


//------------------------------------------------------------------------------
//accessing keys in an object  :   type of key == string


console.log('----------------------keys in an object  ------------------------');

                    // in method is used to follow the keys in the object


        for (const key in Object) {
            console.log(key); 
        }



//w.a.p to check whether emplocation key is presents in the given object

emp = {
    emplocation :"kochi",
}



for (const key in emp) {
    if (emp.emplocation) {
       console.log("true");        
    }

    else{ console.log("false");}
}

//-------------------------------------------------------------------------------

if('emplocation' in emp) {
    console.log('present');

}

else {
    console.log('not present');
}

//-------------------------------------------------------------------------------

console.log(` key is ${'emplocation' in emp ? 'present' : 'not present'}`);




console.log('------------------------------------------------------------------------');


// adding new key : value into an object

   //object["key"] = value

// delete a property from an object

    //delete emp.key;


//add experience to the given object

emp["experience"]=3;

console.log(emp);

console.log('------------------------------------------------------------------------');

//check gender key in the given object:emp . if present print 'yes' else add gender key to the given object with value as male


if ('gender' in emp) {
    console.log("gender key is present");
} else {
    emp["gender"] = 'male';
    console.log("added gender key");
}

console.log(emp);

delete emp.gender;

console.log('------------------------------------------------------------------------');


'gender' in emp ? console.log('present') : (emp["gender"] = 'male' , console.log(emp));


console.log('--------------------------------update----------------------------------------');


//update an object
emp["gender"]='female';

console.log(emp.gender);

console.log('--------------------------------delete----------------------------------------');


// delete a property from an object

    //delete emp.key;

    delete emp.gender
// console.log( delete emp.gender);


console.log(emp);



console.log('-------------------------- car ----------------------------------------------');


//w.a.p to print model and manufacture name of the given car 

//w.a.p to add varient key to the car object with value as 'manuel'

//w.a.p to add a new value 'automatic' to the key varient

//w.a.p to add a ney key as 'color' with value as red , blue and white


car = {
    model : 'suv' ,
    name  : 'fortuner',
    manufacture : 'Toyota'
}

console.log(car);

car['varient'] = ['Manuel'];

console.log(car);

car.varient.push('Automatic');

console.log(car);

car.color = ['blue' , 'red' , 'white'];

console.log(car);


console.log(car.color['2']);