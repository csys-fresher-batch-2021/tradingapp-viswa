class CurrencyConverter {


  static currencyConvert(currencytype, amount) {


    let dollarValue1;
    let inrValue1;
    let dollarValue;
    let inrValue;

    if (currencytype == "dollar") {

      dollarValue1 = amount * 0.0134;
      dollarValue = dollarValue1.toFixed(2);

      return dollarValue;

    }
    else {
      inrValue1 = amount * 74.57;
      inrValue = inrValue1.toFixed(2);
      return inrValue;

    }
  }
}