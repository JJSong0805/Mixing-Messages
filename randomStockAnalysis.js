const stockRatingGenerator = {
    stockRating: [
        'outperforming the market',
        'a buy',
        'a hold',
        'a sell',
        'underperforming the market'
    ],
    randomStockNumber () {
        let stockNumber = Math.floor(Math.random()*10);
        stockNumber = stockNumber.toString();
        for (i=0; i<3; i++) {
            let randomNumber = Math.floor(Math.random()*9) + 1;
            randomNumber = randomNumber.toString();
            stockNumber += randomNumber;
        }
        return stockNumber;
    },
    randomStockRating () {
        let randomIndex = Math.floor(Math.random()*this.stockRating.length);
        return this.stockRating[randomIndex];
    },
    randomAnalyst () {
        console.log(this.randomStockNumber() + " is " + this.randomStockRating() + "!");
    }
}


stockRatingGenerator.randomAnalyst();