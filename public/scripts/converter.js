let firstCurrency = document.querySelectorAll('option');
let firstValue = document.getElementById('firstValue').value;
let secondCurrency = document.getElementById('currencyTwo');
let secondValue = document.getElementById('secondValue');
let btn = document.getElementById('convertBtn2')

// GET CURRENCY FOR currencyTwo

function getcurrencyOne() {
  var selected = [];
  inheritOne = '';
  for (var option of document.getElementById('currencyOne').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let one = selected.join('').toString()
  inheritOne = one;
  return inheritOne;
}



function getcurrencyTwo() {
  var selected = [];
  inheritTwo = '';
  for (var option of document.getElementById('currencyTwo').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let one = selected.join('').toString()
  inheritTwo = one;
  return inheritTwo;
}


let valueOne = parseInt(firstValue);


const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${valueOne}&from=GBP&to=${inheritOne}`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(`10 ${numberOne} = ${data.rates.USD} ${numberTwo}`);
  });