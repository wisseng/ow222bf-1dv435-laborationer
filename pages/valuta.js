function calculation() {
    var amount = document.getElementById('amount').value;
    var currency1 = document.getElementById('select1').value;
    var currency2 = document.getElementById('select2').value;

    switch (currency1 + ' ' + currency2) {
        case "dollar dollar":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "&dollar; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "dollar euro":
            var x = currency2 = 1;
            var y = amount * 0.73;
            document.getElementById('result').innerHTML = "&euro; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "euro euro":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "&euro; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "euro dollar":
            var x = currency2 = 0.73;
            var y = amount / x;
            document.getElementById('result').innerHTML = "&dollar; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
    }
}