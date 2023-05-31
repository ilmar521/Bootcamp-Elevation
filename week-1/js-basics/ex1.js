let boughtTesla = prompt('Do you have the Tesla? (y/n)')
let currentYear = 2018

if (boughtTesla == 'y') {
    let isUSCitizen = prompt('Are you US Citizen? (y/n)')
    if (isUSCitizen == 'y') {
        const yearOfTeslaPurchase = Number(prompt('When did you buy your Tesla?'))
        if (isNaN(yearOfTeslaPurchase)) {
            alert("You must enter only numbers!");
        } else {
            yearsOfOwning = currentYear - yearOfTeslaPurchase;
            if (yearsOfOwning > 4) {
                console.log('Would you like to upgrade your car?');
            } else {
                console.log('Are you satisfied with your car?');   
            }
        }
    } else {
        console.log('Would you like to move to the US?');      
    }
} else {
    console.log('Would you like to buy the TESLA?');      
}