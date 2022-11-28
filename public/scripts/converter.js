let firstCurrency = document.getElementById('curencyOne');
let firstValue = document.getElementById('firstValue');
let secondCurrency = document.getElementById('currencyTwo');
let secondValue = document.getElementById('secondValue');

const host = 'api.frankfurter.app';
const firstMoney = firstValue.innerHTML
const currencyOne = firstCurrency.value

const secondMoney = firstValue.innerHTML
const currencyTwo = firstCurrency.value


fetch(`https://${host}/latest?amount=${firstMoney}&from=${currencyOne}&to=${secondMoney}`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`10 GBP = ${data.rates.USD} USD`);
  });