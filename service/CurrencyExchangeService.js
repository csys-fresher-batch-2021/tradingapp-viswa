class Trade {

    static exchange(noValue, lotNum) {

        let min;
        min = 74.143505;

        if (noValue != "") {



            let pip;
            pip = noValue - min;

            let lot;
            switch (lotNum) {
                case "micro":
                    {
                        lot = 1000;
                        break;
                    }
                case "mini":
                    {
                        lot = 10000;
                        break;
                    }
                case "standard":
                    {
                        lot = 100000;
                        break;
                    }
                default:
                    alert("enter lot");

            }

            let returnValue
            returnValue = lot * pip;
            return returnValue;



        }
        else {
            return 0;
        }
    }
}