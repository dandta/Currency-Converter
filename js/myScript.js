function currencyConvert() {
    var myCurrency = document.getElementById("currency").value; //selected user currency
    var conversion = document.getElementById("amount").value; //amount to be converted
    
    //AJAX API TO CHECK IF THERE IS INTERNET
    var myReq = new XMLHttpRequest();
    console.log(myCurrency,conversion);
    //API ADDRESS
    var currData = "http://api.fixer.io/latest?base=" + myCurrency;
    
    console.log(currData);

    myReq.open("GET", currData, true);
    //GET REQUEST TO SERVER
    myReq.send();
    
    myReq.onload = function () {
        //AJAX SERVER
        if (myReq.readyState == 4 && myReq.status == 200) {
            
            /*var result = myReq.responseText;
            console.log(myReq);
            console.log(result);*/
            
            //CONVERT JSON TO JAVASCRIPT
            var rates = JSON.parse(this.response).rates;
            console.log(rates);
            
            //DISPLAY CURRENCIES AGAINST BASE CURRENCY * RATES FROM API
            
            if(myCurrency == "AUD") {  document.getElementById('aud').innerHTML = 1; } else { document.getElementById('aud').innerHTML = conversion * rates.AUD; }
            /*document.getElementById('aud').innerHTML = Math.round(conversion * rates.AUD*100)/100*/
            document.getElementById('cad').innerHTML = Math.round(conversion * rates.CAD*100)/100
            document.getElementById('chf').innerHTML = Math.round(conversion * rates.CHF*100)/100
            document.getElementById('cny').innerHTML = Math.round(conversion * rates.CNY*100)/100       
            document.getElementById('dkk').innerHTML = Math.round(conversion * rates.DKK*100)/100
            document.getElementById('eur').innerHTML = Math.round(conversion * rates.EUR*100)/100
            document.getElementById('gbp').innerHTML = Math.round(conversion * rates.GBP*100)/100
            document.getElementById('hkd').innerHTML = Math.round(conversion * rates.HKD*100)/100
            document.getElementById('huf').innerHTML = Math.round(conversion * rates.HUF*100)/100
            document.getElementById('inr').innerHTML = Math.round(conversion * rates.INR*100)/100
            document.getElementById('jpy').innerHTML = Math.round(conversion * rates.JPY*100)/100
            document.getElementById('mxn').innerHTML = Math.round(conversion * rates.MXN*100)/100
            document.getElementById('myr').innerHTML = Math.round(conversion * rates.MYR*100)/100
            document.getElementById('nok').innerHTML = Math.round(conversion * rates.NOK*100)/100
            document.getElementById('nzd').innerHTML = Math.round(conversion * rates.NZD*100)/100
            document.getElementById('rub').innerHTML = Math.round(conversion * rates.RUB*100)/100
            document.getElementById('sek').innerHTML = Math.round(conversion * rates.SEK*100)/100
            document.getElementById('sgd').innerHTML = Math.round(conversion * rates.SGD*100)/100
            document.getElementById('thb').innerHTML = Math.round(conversion * rates.THB*100)/100
            document.getElementById('try').innerHTML = Math.round(conversion * rates.TRY*100)/100
            document.getElementById('usd').innerHTML = Math.round(conversion * rates.USD*100)/100
            document.getElementById('zar').innerHTML = Math.round(conversion * rates.ZAR*100)/100
            }//end of if
    }//end of secondary function
}//end of main function













