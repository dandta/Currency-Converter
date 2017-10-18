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
            
            if(myCurrency == "AUD") {  document.getElementById('aud').innerHTML = "$ " + conversion; } else { document.getElementById('aud').innerHTML = "$ " + Math.round(conversion * rates.AUD*1000)/1000; }
            /*document.getElementById('aud').innerHTML = Math.round(conversion * rates.AUD*100)/100*/
            if(myCurrency == "CAD") {  document.getElementById('cad').innerHTML = "$ " + conversion; } else { document.getElementById('cad').innerHTML = "$ " + Math.round(conversion * rates.CAD*1000)/1000; }
            /*document.getElementById('cad').innerHTML = Math.round(conversion * rates.CAD*100)/100*/
            if(myCurrency == "CHF") {  document.getElementById('chf').innerHTML = "CHF " + conversion; } else { document.getElementById('chf').innerHTML = "CHF " + Math.round(conversion * rates.CHF*1000)/1000; }
            /*document.getElementById('chf').innerHTML = Math.round(conversion * rates.CHF*100)/100*/
            if(myCurrency == "CNY") {  document.getElementById('cny').innerHTML = "¥ " + conversion; } else { document.getElementById('cny').innerHTML = "¥ " + Math.round(conversion * rates.CNY*1000)/1000; }
            /*document.getElementById('cny').innerHTML = Math.round(conversion * rates.CNY*100)/100*/   if(myCurrency == "DKK") {  document.getElementById('dkk').innerHTML = "kr " + conversion; } else { document.getElementById('dkk').innerHTML = "kr " + Math.round(conversion * rates.DKK*1000)/1000;  }  
            /*document.getElementById('dkk').innerHTML = Math.round(conversion * rates.DKK*100)/100*/
            if(myCurrency == "EUR") {  document.getElementById('eur').innerHTML = "€ " + conversion; } else { document.getElementById('eur').innerHTML = "€ " + Math.round(conversion * rates.EUR*1000)/1000; }
            /*document.getElementById('eur').innerHTML = Math.round(conversion * rates.EUR*100)/100*/
            if(myCurrency == "GBP") {  document.getElementById('gbp').innerHTML = "£ " + conversion; } else { document.getElementById('gbp').innerHTML = "£ " + Math.round(conversion * rates.GBP*1000)/1000; }
            /*document.getElementById('gbp').innerHTML = Math.round(conversion * rates.GBP*100)/100*/
            if(myCurrency == "HKD") {  document.getElementById('hkd').innerHTML = "$ " + conversion; } else { document.getElementById('hkd').innerHTML = "$ " + Math.round(conversion * rates.HKD*1000)/1000; }
            /*document.getElementById('hkd').innerHTML = Math.round(conversion * rates.HKD*100)/100*/
            if(myCurrency == "HUF") {  document.getElementById('huf').innerHTML = "Ft " + conversion; } else { document.getElementById('huf').innerHTML = "Ft " + Math.round(conversion * rates.HUF*1000)/1000; }
            /*document.getElementById('huf').innerHTML = Math.round(conversion * rates.HUF*100)/100*/
            if(myCurrency == "INR") {  document.getElementById('inr').innerHTML = "INR " + conversion; } else { document.getElementById('inr').innerHTML = "INR " + Math.round(conversion * rates.INR*1000)/1000; }
            /*document.getElementById('inr').innerHTML = Math.round(conversion * rates.INR*100)/100*/
            if(myCurrency == "JPY") {  document.getElementById('jpy').innerHTML = "¥ " + conversion; } else { document.getElementById('jpy').innerHTML = "¥ " + Math.round(conversion * rates.JPY*1000)/1000; }
            /*document.getElementById('jpy').innerHTML = Math.round(conversion * rates.JPY*100)/100*/
            if(myCurrency == "MXN") {  document.getElementById('mxn').innerHTML = "$ " + conversion; } else { document.getElementById('mxn').innerHTML = "$ " + Math.round(conversion * rates.MXN*1000)/1000; }
            /*document.getElementById('mxn').innerHTML = Math.round(conversion * rates.MXN*100)/100*/
            if(myCurrency == "MYR") {  document.getElementById('myr').innerHTML = "RM " + conversion; } else { document.getElementById('myr').innerHTML = "RM " + Math.round(conversion * rates.MYR*1000)/1000; }
            /*document.getElementById('myr').innerHTML = Math.round(conversion * rates.MYR*100)/100*/
            if(myCurrency == "NOK") {  document.getElementById('nok').innerHTML = "kr " + conversion; } else { document.getElementById('nok').innerHTML = "kr " + Math.round(conversion * rates.NOK*1000)/1000; }
            /*document.getElementById('nok').innerHTML = Math.round(conversion * rates.NOK*100)/100*/
            if(myCurrency == "NZD") {  document.getElementById('nzd').innerHTML = "$ " + conversion; } else { document.getElementById('nzd').innerHTML = "$ " + Math.round(conversion * rates.NZD*1000)/1000; }
            /*document.getElementById('nzd').innerHTML = Math.round(conversion * rates.NZD*100)/100*/
            if(myCurrency == "RUB") {  document.getElementById('rub').innerHTML = "₽ " + conversion; } else { document.getElementById('rub').innerHTML = "₽ " + Math.round(conversion * rates.RUB*1000)/1000; }
            /*document.getElementById('rub').innerHTML = Math.round(conversion * rates.RUB*100)/100*/
            if(myCurrency == "SEK") {  document.getElementById('sek').innerHTML = "kr " + conversion; } else { document.getElementById('sek').innerHTML = "kr " + Math.round(conversion * rates.SEK*1000)/1000; }
            /*document.getElementById('sek').innerHTML = Math.round(conversion * rates.SEK*100)/100*/
            if(myCurrency == "SGD") {  document.getElementById('sgd').innerHTML = "$ " + conversion; } else { document.getElementById('sgd').innerHTML = "$ " + Math.round(conversion * rates.SGD*1000)/1000; }
            /*document.getElementById('sgd').innerHTML = Math.round(conversion * rates.SGD*100)/100*/
            if(myCurrency == "THB") {  document.getElementById('thb').innerHTML = "฿ " + conversion; } else { document.getElementById('thb').innerHTML = "฿ " + Math.round(conversion * rates.THB*1000)/1000; }
            /*document.getElementById('thb').innerHTML = Math.round(conversion * rates.THB*100)/100*/
            if(myCurrency == "TRY") {  document.getElementById('try').innerHTML = "TRY " + conversion; } else { document.getElementById('try').innerHTML = "TRY " + Math.round(conversion * rates.TRY*1000)/1000; }
            /*document.getElementById('try').innerHTML = Math.round(conversion * rates.TRY*100)/100*/
            if(myCurrency == "USD") {  document.getElementById('usd').innerHTML = "$ " + conversion; } else { document.getElementById('usd').innerHTML = "$ " + Math.round(conversion * rates.USD*1000)/1000; }
            /*document.getElementById('usd').innerHTML = Math.round(conversion * rates.USD*100)/100*/
            if(myCurrency == "ZAR") {  document.getElementById('zar').innerHTML = "R " + conversion; } else { document.getElementById('zar').innerHTML = "R " + Math.round(conversion * rates.ZAR*1000)/1000; }
            /*document.getElementById('zar').innerHTML = Math.round(conversion * rates.ZAR*100)/100*/
            }//end of if
    }//end of secondary function
}//end of main function













