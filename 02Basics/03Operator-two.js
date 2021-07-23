var listingPrice=799;
var sellingPrice=199;

var discountOffered=((listingPrice-sellingPrice)/listingPrice )*100;

console.log(`
    Listing Price: ${listingPrice}
    Selling Price: ${sellingPrice}
    Discount calculated: ${discountOffered}
`);

displayDiscountPercentage=Math.round(discountOffered);

console.log(displayDiscountPercentage+"% Offer");
var result=listingPrice> sellingPrice;
console.log(result);
console.log(typeof result);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence