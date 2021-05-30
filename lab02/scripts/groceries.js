// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
let name = "Khai";
var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		priceIncreased: false,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		priceIncreased: false,
		price: 9.99
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.99
	},
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		priceIncreased: false,
		price: 3.99,
	},
	{
		name: "pistachios",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 8.99,	
	},
	{
		name: "drum stick",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 5.99
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 4.99
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		priceIncreased: false,
		price: 7.99
	},
	{
		name: "quaker chewy bar",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 5.55
	}
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, lactoseValue) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		//restrcitions
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			products.push(prods[i]);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			products.push(prods[i]);
		}
		else if (restriction == "None"){
			products.push(prods[i]);
		}

		//organic
		if ((prods[i].organic == true) && (lactoseValue == "organic")){
			prods[i].price*=1.1;
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