// let a = prompt("write a value of A :-");
// let b = prompt("write a value of B :-");

// if (a + b ){
//     alert("The sum of A and B is: "  (a + b));
// }else if (a * b){
//     alert("The product of A and B is: "  (a * b));
// }else if (a / b){
//     alert("The division of A and B is: "  (a / b));
// }else if (a - b){
//     alert("The difference of A and B is: "  (a - b));
// }

let a = parseFloat(prompt("Write a value of A:"));
let b = parseFloat(prompt("Write a value of B:"));

if (!isNaN(a) && !isNaN(b)) {
    alert("The sum of A and B is: " + (a + b));
    alert("The product of A and B is: " + (a * b));
    alert("The division of A and B is: " + (a / b));
    alert("The difference of A and B is: " + (a - b));
} else {
    alert("Please enter valid numbers for A and B.");
}