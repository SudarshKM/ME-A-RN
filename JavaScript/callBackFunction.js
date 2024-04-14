

function greet (name , callback) {
    console.log("haai" , name);
    callback();
}

function callme() {
    console.log("call Back ");
}


greet('peter' , callme);


setTimeout(()=>{console.log("haai")},3000)