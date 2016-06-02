(function() {
    "use strict";
    // don't create anything outside of an IIFY

    function getElemID(id) {
        return document.getElementById(id);
    }

    function getElemClass(x) {
        return document.getElementsByClassName(x);
    }

    function randomGenerator() {
        return Math.ceil((Math.random() * 10));
    }




    // add event listener to button with id of buttonOne

    /*  var buttonOne = getElemID('buttonOne');
      console.log(buttonOne);


      function suMuDiSub() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The X value will be: ' + x);
          console.log('The Y value will be: ' + y);

          console.log('The sum is: ' + (x + y));
          console.log('The subtraction is: ' + (x - y));
          console.log('The division is: ' + (x / y));
          console.log('The multiplication is: ' + (x * y));
          console.log('The modulus will be : ' + (x % y));

      }

      buttonOne.addEventListener("click", suMuDiSub, false);

      // we will work on buttonTwo from now

      var buttonTwo = getElemID('buttonTwo');
      console.log(buttonTwo);

      function main() {
          sum();
          subtract();
          multi();
          divison();
          modulus();
      }

      function sum() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The sum is: ' + (x + y));
          //subtract();
      }

      function subtract() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The subtraction is: ' + (x - y));
          //multi();
      }

      function multi() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The multiply is: ' + (x * y));
          //divison();
      }


      function divison() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The division is: ' + (x / y));
          //modulus();
      }

      function modulus() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The modulus is: ' + (x % y));
      }


      buttonTwo.addEventListener('click', main, false);*/

    // This will be the third button.

    var buttonThree = getElemID('buttonThree');
    console.log(buttonThree);


    function main() {

        var x = add(randomGenerator(), randomGenerator());
        var y = sub(randomGenerator(), randomGenerator());
        var z = multi(randomGenerator(), randomGenerator());
        var w = divide(randomGenerator(), randomGenerator());
        var u = modulus(randomGenerator(), randomGenerator());
        console.log(x);
        console.log(y);
        console.log(z);
        console.log(w);
        console.log(u);

    }

    function add(a, b) {
        console.log(a, b);
        return a + b;
    }

    function sub(a, b) {
        console.log(a, b);
        return a - b;

    }

    function multi(a, b) {
    	console.log(a, b);
    	return a * b;
    }

    function divide(a, b){
    	console.log(a, b);
    	return a / b;
    }

    function modulus(a, b){
    	console.log(a, b);
    	return a % b;
    }


    console.log('the addition is' + add(11, 15));

    buttonThree.addEventListener('click', main);
    
// Global and local group

/*var buttonFour = getElemID('buttonFour');
    console.log(buttonFour);

function sum(a, b){
	var work = a + b; //local is work
	return work;
}
var total = sum(2, 3); //global is total
document.write(total);
*/
//two global and local variable

var buttonFive = getElemID('buttonFive');
    console.log(buttonFive);

function sum(a, b){
	var x = a + b;
	return x;
}

function multi(a, b){
	var y = a * b;
	return y;
}

function modulus(a, b){
	var v = a % b;
	return v;
}

var z = sum(3, 5);
var w = multi(3, 5);
var v = modulus(3, 5);
console.log(z);
console.log(w);
console.log(v);


var buttonSix = getElemID('buttonSix');
    console.log(buttonSix);

    











})();
