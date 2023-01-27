var price1 = '31';
var price2 = '10'; // for using ', it considered as a string
var totalPrice = price1 + price2;
// console.log(totalPrice)


var price1 = 31; //one int and one string
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice) //output will be same like the previous one.


var price1 = '31'; //one string and one int
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice) //output will be same like the previous one.

// convert string to int
var price3 = '45';
var price4 = parseInt(price3);
// console.log(price4);

var gpa = '4.18';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);