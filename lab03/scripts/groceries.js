// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		none: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		none: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		none: true,
		price: 9.99
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		none: true,
		price: 6.99
	},
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		none: true,
		price: 3.99,
	},
	{
		name: "pistachios",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		none: true,
		price: 8.99,	
	},
	{
		name: "drum stick",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		none: true,
		price: 5.99
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		none: true,
		price: 4.99
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		none: true,
		price: 7.99
	},
	{
		name: "quaker chewy bar",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		none: true,
		price: 5.55
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactoseVal, nutVal, organicVal, noneVal) {
	let products = [];

	//do quick boolean logic
	for (let i=0; i<prods.length; i+=1) {
		//restrictions
		if (noneVal){
			products.push(prods[i]);
		} else if (
		!(!prods[i].lactoseFree && lactoseVal) 
		&& !(!prods[i].nutFree && nutVal) 
		&& !(!prods[i].organic && organicVal)){
			products.push(prods[i]);
		}
	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}