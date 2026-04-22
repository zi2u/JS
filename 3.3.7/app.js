function rekniAhoj() {
    console.log("čus");
}

rekniAhoj();
rekniAhoj();

let pozdrav = "pozdrav";

function ukazPozdrav() {
    console.log(pozdrav)
}

function testLocal() {
   let localValue = 123;
   console.log(localValue)
}
ukazPozdrav();
testLocal();

if(true){
    var y = "var blok nerespektuje";
}
console.log(y);

// parametr & argument

function sayHello(name) {
    console.log("ahoj" + name);
}

sayHello("alice");

function addNumber(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}
addNumber(5,8);


function vypisCisla(zacatek, konec){ 
    for (let i = zacatek; i <= konec; i++) {
        
        console.log(i)
    }
     }
    vypisCisla(1,15)
   
   

