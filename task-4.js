

function getShippingCost(country) {

    switch(country) {

        case "China": 
        const price = 100;
        return `Shipping to ${country} will cost ${price} credits`;
    
        case "Chile":
        const price1 = 250;
        return `Shipping to ${country} will cost ${price1} credits`;
    

        case "Australia":
        const price2 = 170;
        return `Shipping to ${country} will cost ${price2} credits`;
        
        case "Jamaica":
        const price3 = 120;
        return `Shipping to ${country} will cost ${price3} credits`;

        default: 
        return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
