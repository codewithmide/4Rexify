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
    });
});