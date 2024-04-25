

class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary

    //constructor

    constructor(eName , eDesig , eLocation , eSalary){
        this.eName = eName;
        this.eDesig = eDesig;
        this.eLocation = eLocation;
        this.eSalary = eSalary;
    }

    //method

    display(){
        console.log(this.eName);
    }
}


//object

const obj1 = new Employee("Neel" , "developer" ,"kochi",25000);

const obj2 = new Employee("Max" , "tester" ,"kochi",15000);


obj1.display()
console.log(obj1);


console.log("--------------------------student Class---------------------------");

//student Class

class Student {
    // rollNo
    // name
    // division

    constructor(rollNo , name , division) {  //constructors are invoked automatically
        this.rollNo = rollNo;
        this.name = name;
        this.division = division;
        this.display();   
    }

    display(){
        console.log(this.name);
    }
}

const student1 = new Student(1,"Eby","A");

// console.log(student1.name);

// student1.display();

console.log(student1);

console.log('----------------------------------------------------------------');

//write methode for solving the questions

class Bank {
    //property

    accountDetails ={
        1000:{acno:1000 , username:"userone" , password: "userone" ,balance:50000},

        1001:{acno:1001 , username:"usertwo" , password: "usertwo" ,balance:50000},

        1002:{acno:1002 , username:"userthree" , password: "userthree" ,balance:50000},

        1003:{acno:1003 , username:"userfour" , password: "userfour" ,balance:50000}

    }

    //validate a given acNo

    validate(accountNumber){
        for (const key in this.accountDetails) {
            if (key == accountNumber) {
                console.log("validation success");
                
            }
        }
    }
    //authenicate the given account

    authenticate(accountNumber, password){
        for (const key in this.accountDetails) {
            if (key == accountNumber) {
                var s=this.accountDetails[key]
                if (s.acno==accountNumber && s.password == password) {
                    console.log("authetication success");
                }
                else{
                    console.log("authentication failed");
                }
                
            }
          
        }
    }
    
    //check the balance

    //fund transfer
}

const user1 = new Bank();

user1.validate(1000)

user1.authenticate(1000 , "userone")