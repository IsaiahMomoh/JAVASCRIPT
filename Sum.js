let number = [2, 7, 8, 5]
let target = 9;
for(let index = 0; index < number.length; index++){
for(let count = index + 1; count <number.length; count++){

if(number[index] + number[count] == 9){
console.log(count, index);
}
}
}

