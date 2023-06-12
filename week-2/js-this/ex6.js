const coffeeShop = {
    beans: 40,
    money: 100,

    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 3},
        doubleShot: {beanRequirement: 15, price: 10},
        frenchPress: {beanRequirement: 12, price: 8}
    },
  
    buyBeans: function (numBeans) {
        const totalPrice = numBeans * 5
        if (totalPrice <= this.money) {
            this.money -= totalPrice
            this.beans += numBeans
        } else {
            console.log("We don't have enough money!")       
        }
    }, 
    buyDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            this.money += this.drinkRequirements[drinkType].price
            this.makeDrink(drinkType)
        } else {
            console.log(`Sorry, we don’t sell ${drinkType}`)
        }
    }, 
    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            if (this.drinkRequirements[drinkType].beanRequirement <= this.beans) {
                this.beans -= this.drinkRequirements[drinkType].beanRequirement
            } else {
                console.log("Sorry, we’re all out of beans!")     
            }
        } else {
            console.log(`Sorry, we don’t make ${drinkType}`)
        }
        
    }
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyBeans(10);
coffeeShop.buyDrink("frenchPress"); 