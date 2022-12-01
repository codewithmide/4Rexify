let firstCurrency = document.querySelectorAll('option');
let firstValue = document.getElementById('firstValue').value;
let secondCurrency = document.getElementById('currencyTwo');
let secondValue = document.getElementById('secondValue');
let btn = document.getElementById('convertBtn2')

// GET CURRENCY FOR currencyTwo

function getcurrencyOne() {
  var selected = [];
  for (var option of document.getElementById('currencyOne').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let one = selected.join('').toString()
  return one;
}

let inheritOne = '';
inheritOne = getcurrencyOne().toString();


function getcurrencyTwo() {
  var selected = [];
  for (var option of document.getElementById('currencyTwo').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let two = selected.join('').toString()
  return two;
}

let inheritTwo = '';
inheritTwo = getcurrencyTwo().toString();


let valueOne = parseInt(firstValue);


const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${valueOne}&from=${inheritOne}&to=${inheritTwo}`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(`10 ${inheritOne} = ${data.rates.USD} ${inheritTwo}`);
  });