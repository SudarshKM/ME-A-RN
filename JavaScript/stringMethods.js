//w.a.p to check whether the given number is mobile no or not 

 num = "1234567890";

 console.log(num.length==10?"yes":"no");

 console.log('-------------------------------------');


 //w.a.p to check whether the given mail id is gmail or not 

 mail = "abc@gmail.com";

   console.log(mail.endsWith("gmail.com")?"gmail":"other" );


   console.log('-------------------------------------');


//w.a.p to check whether the string ends with q

 str3="qabcq";

  console.log(str3.startsWith('q')?"q":"not q");


// split

console.log("----------split---------");

str = 'luminar technolab';

str3=str.split(' ');

console.log(str3);


//replace

console.log("---------replace---------");

str4 = "I joined Microsoft";


str5=str4.replace('Microsoft','Google');

console.log(str5);


//w.a.p to print all vowels in the given sentence

console.log('----------------vowels in the given sentence---------------------');

sentence = 'good morning all';


splited = sentence.split('');
// console.log(vowels);


console.log(splited.filter((str)=> str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U'));


// or 

console.log('---------------Vowel----------------------');

vowels = ['a','e','i','o','u','A','E','I','O','U'];



for(let char of splited){
  if(vowels.includes(char)){
    console.log(char);
  }
}



console.log('-----------another method ----Vowel----------------------');


// another method 

splited.filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);})


console.log('-----------Vowel---Array.from()-----------------------');


// another method using Array.from()

Array.from(sentence).filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);})

console.log('-------------------------------------');


hi = "hello";

console.log(hi[4]);



//w.a.p to check whether the given string is palindrome or not

console.log('---------------- palindrome ---------------------');


str6 = 'malayalam';

start = 0;

end = str6.length-1;

isPalindrome=true;

while(start<end){
  if(str6[start]!=str6[end]) {
    isPalindrome=false;
  }

  start++;
  end--;
}

console.log(isPalindrome?'palindrome':'not palindrome');


//another methode using forLoop

console.log('--------------palindrome using forLoop--------------------------');

pal='';

for(i=str6.length-1 ; i>=0 ; i--) {

  pal += str6[i];
} 

console.log(str6==pal?'palindrome':'not palindrome');