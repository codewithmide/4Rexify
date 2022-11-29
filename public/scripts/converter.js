let firstCurrency = document.querySelectorAll('option');
let firstValue = document.getElementById('firstValue').value;
let secondCurrency = document.getElementById('currencyTwo');
let secondValue = document.getElementById('secondValue').value;
let btn = document.getElementById('convertBtn')

console.log(firstValue);

document.getElementById('convertBtn2').onclick = function() {
  var selected = [];
  for (var option of document.getElementById('currencyTwo').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  let one = selected.join('').toString()
  console.log(one);
}



const host = 'api.frankfurter.app';

fetch(`https://${host}/latest?amount=${firstValue}&from=GBP&to=USD`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(`10 GBP = ${data.rates.USD} USD`);
  });
