// let firstValue = document.getElementById('firstValue').value;
// let firstCurrency = document.getElementById('currencyOne');
// let secondCurrency = document.getElementById('currencyTwo');
// let secondValue = document.getElementById('secondValue');
// let btn = document.getElementById('convertBtnTwo')

// // GET FIRST CURRENCY
// function getcurrencyOne() {
//   var selected = [];
//   for (var option of document.getElementById('currencyOne').options) {
//     if (option.selected) {
//       selected.push(option.value);
//     }
//   }
//   let one = selected.join('').toString()
//   return one;
// }
// let currencyOne = '';
// currencyOne = getcurrencyOne().toString();



// // GET SECOND CURRENCY
// function getcurrencyTwo() {
//   var selected = [];
//   for (var option of document.getElementById('currencyTwo').options) {
//     if (option.selected) {
//       selected.push(option.value);
//     }
//   }
//   let two = selected.join('').toString()
//   return two;
// }
// let currencyTwo = '';
// currencyTwo = getcurrencyTwo().toString();


// // VALUE TO BE CONVERTED
// let valueOne = parseInt(firstValue);


// // function getValueTwo() {
// //   // FRANKFURTER API

// //   let newvalueTwo = parseInt(currencyTwo);
// //   return newvalueTwo;
// // }

// // getValueTwo();
// // let valueTwo = parseInt(getValueTwo);

// // btn.addEventListener('click', () => {
//   const host = 'api.frankfurter.app';
//   let newCurrency = [];
//   newCurrency = getcurrencyTwo().toString();
//   fetch(`https://${host}/latest?amount=${valueOne}&from=${currencyOne}&to=${currencyTwo}`)
//   .then(resp => resp.json())
//   .then((data) => {
//     let newest = data.rates[0];
//     let lastestCurrency = newest;
//     console.log(data)
//     console.log(`10 ${currencyOne} = ${lastestCurrency} ${currencyTwo}`);
//   });
// //})

const convert = document.getElementById("convert");
const result = document.getElementById("result");
const valueOne = document.getElementById("valueOne");
const valueTwo = document.getElementById("valueTwo");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
convert.addEventListener("click", function() {
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => {
          return response.json();
    })
    .then(data => {
      let rate = data.rates[toCurrency];
      let total = rate * amt;
      result.innerHTML = `${amt} ${fromCurrency} = ${total}
      ${toCurrency}`;
      // valueOne.innerHTML = `${toCurrency}`
      // valueTwo.innerHTML = `${fromCurrency}`
    });
});