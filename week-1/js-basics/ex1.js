let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla) {
    if (isUSCitizen) {
        yearsOfOwning = currentYear - yearOfTeslaPurchase;
        if (yearsOfOwning > 4) {
            console.log('Would you like to upgrade your car?');
        } else {
            console.log('Are you satisfied with your car?');   
        }
    } else {
        console.log('Would you like to move to the US?');      
    }
} else {
    console.log('Would you like to buy the TESLA?');      
}