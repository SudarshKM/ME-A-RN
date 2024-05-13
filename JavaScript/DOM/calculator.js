
var arr = document.querySelectorAll(".number")

var temp=[];

var str1='';

// var str2='';

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    document.querySelectorAll(".number")[i].addEventListener("click" , function () {
        console.log(this.id);
        
        str1 +=this.id;
        result.textContent=str1;

        // str2 = str1;
    })

    
    
}


// =


function output () {
    result.textContent=eval(str1);

    // console.log("output");
}

// backspace

const back = () => {
  if (str1.length==0) {
    clearAll();
  }

    else{
        str1 =  str1.substring(0,str1.length-1);

    result.textContent=str1;
    console.log(str1);
    }
}


//AC

const clearAll =()=> {
    result.innerHTML="";
}


