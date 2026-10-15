const prompt = require("prompt-sync")();
while(true){

let number = Number(prompt("Enter a number: "));

if (number !== number){
    console.log("Enter a Valid Number: ");
}else{

for (let count = 1; count <= 12; count++){
let multiplication = number * count;
    console.log(number + "X" + count + " = " + multiplication);
}
break;
}
}
