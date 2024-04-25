// alert('hi')

var audio = new Audio('./sounds/tom-1.mp3')
audio.play();


for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll("button")[i].addEventListener('click' , function () {
        // this.style.color="white"
        console.log(this.textContent);
        var btnTextContent = this.textContent;
        makeSound(btnTextContent);
        btnAnimation(btnTextContent);
    })
}


document.addEventListener("keydown" , function (event) {
 console.log(event.key);

 makeSound(event.key);
 btnAnimation(event.key)

 

});

// document.addEventListener("keyup" , function (event) {
//     console.log(event.key);
   
//     btnAnimation(event.key)
   
    
   
//    });


makeSound = (key) => {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
        break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
        break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;
        default: 
            break;
    }
}

function btnAnimation (currentKey){
    var activeBtn =  document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(()=>activeBtn.classList.remove("pressed"),100)
}
 

// document.querySelectorAll("button").forEach(btn => btn.addEventListener('click' , () => {
//     // audio.play();
//     console.log(this.innerHTML);
// }));





// function click () {
//     alert(' I got clicked')
// }


// function add(num1,num2) { return num1 + num2 }

// substract = (num1,num2) => {return num1 - num2}

// multiply = (num1,num2) => {return num1 * num2}

// divide = (num1,num2) => {return num1/num2}

// modulus = (num1,num2) => {return num1% num2}

// calculator = (num1,num2,operator) => {return operator(num1,num2)}

// console.log(calculator(1,2,substract));