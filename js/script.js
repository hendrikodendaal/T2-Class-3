let hour = 14;

if (hour < 12){
    console.log("Good Morning");
} else{
    console.log("Good Afternoon");
}


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] %2 !=1){
        even.push(numbers[i]);
    
} else{
    odd.push(numbers[i]);
}
}

console.log(even);
console.log(odd);
let total = 0;
for (let i = 0; i < odd.length; i++){
    total += odd[i]
}

console.log(total)

function tester(){
    if (bool){
        document.getElementById('display').innerHTML = "True";
    } else {
        document.getElementById('display').innerHTML = "False";
    }
}