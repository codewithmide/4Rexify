let test = document.querySelector('one');

// set endpoint and your access key
endpoint = 'latest'
access_key = 'j53siGvOnlxLVf0HpWBenHxsmR5uPEzL';

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
    url: 'https://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.rates
        console.log(json.rates.GBP);

        // base currency is stored in json.base
        console.log(json.base);

        // timestamp can be accessed in json.timestamp
        console.log(json.timestamp);

    }
});