/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
/*
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();

*/
/*find quarters
       dimes
       nickles
       pennies*/
      
var input = document.getElementById("inputData").value
var output = document.getElementById("outputData").innerHTML

// counter function
function coinCounter(dollar) {

  var amt = parseFloat(dollar);
  var coinPurse = {
      quarters: null,
      dimes: null,
      nickles: null,
      pennies: null,
  };

   amt = amt * 100;
   coinPurse.quarters = parseInt(amt / 25);
   amt -= coinPurse.quarters * 25;
   
   console.log(amt)
   coinPurse.dimes = parseInt(amt / 10);
   amt -= coinPurse.dimes * 10;

   coinPurse.nickles = parseInt(amt / 05);
   amt -= coinPurse.nickles * 05;

   coinPurse.pennies = parseInt(amt / 1);
   amt -= coinPurse.pennies * 1;

   return coinPurse;
   
}
console.log(coinCounter(5.34))

/*coinCounter (5.45);*/
