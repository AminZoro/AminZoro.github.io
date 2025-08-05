//LAB4
function sayHello() {
  console.log("wicked");
}


function sum(a, b) {
  console.log(a + b);
 return a+b;

}

function returnSum(a, b) {
  return a + b;
}
function minus(a, b) {
  console.log(a - b);
  return a -b;
}
function times(a, b) {
  console.log(a * b);
  return a*b;
}
function divide(a, b) { //div
  console.log(a / b);
  return a/b;
}
console.log(sum(1,5));
//LAB4
function sayHello() {
  console.log("wicked");
}
if (returnSum(2, 4) != 6) { // s
throw new Error('Test failed');

}
if(returnSum(1,7) ==8) {
    console.log("function is correct");
}
if(returnSum(2,5) ==7) {
    console.log("function is also correct");
}

