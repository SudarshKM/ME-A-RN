


function HouseKeeper (name , age , experience , languages , clean) {
    this[name] = name; // adding object key:name
    this.age = age;   // adding object key:name
    this.experience = experience;
    this.languages = languages;
    this.clean = function() {
        console.log("cleaning in progress..")
    }
}

var keeper1 = new HouseKeeper("noel",21,3,["eng","mal"]);
var keeper2 = new HouseKeeper("Eby" , 22,2,["french" ,"eng"])

console.log(keeper1);
console.log(keeper2);

keeper1.clean();
