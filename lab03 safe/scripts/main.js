
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var optionArray;

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

//compares item by price
function compareItems(obj1, obj2) {
	if (obj1.price < obj2.price) return -1;
	if (obj1.price === obj2.price) return 0;
	if (obj1.price > obj2.price) return 1;
}

//makes items that can be organic more expensive
function displayOrganicProducts(slct1, slct2){
	console.log(optionArray);
	var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	s2.innerHTML = "";

	for (i = 0; i < optionArray.length; i++) {
		var productName = optionArray[i].name

		if ((optionArray[i].organic == true) && (optionArray[i].priceIncreased == false) && (s1.value == "organic")){
			optionArray[i].price*=1.25;
			optionArray[i].priceIncreased = true;
			console.log(productName + "'s price has increased");
		} else if ((optionArray[i].organic == true) && (optionArray[i].priceIncreased == true) && ((s1.value == "") || (s1.value == "anything"))){
			optionArray[i].price/=1.25;
			optionArray[i].priceIncreased = false;
			console.log(productName + "'s price has decreased");
		}

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;

		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = optionArray[i].name + optionArray[i].price;
		if (optionArray[i].priceIncreased == true){
			label.appendChild(document.createTextNode(`$ ${optionArray[i].price.toFixed(2)}-${optionArray[i].name} [ORGANIC]`));
		} else {
			label.appendChild(document.createTextNode(`$ ${optionArray[i].price.toFixed(2)}-${optionArray[i].name}`));
		}
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));  
	}
	
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    optionArray = restrictListProducts(products, s1.value);
	
	optionArray.sort(compareItems);
	console.log(optionArray);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;

		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName + productPrice;
		label.appendChild(document.createTextNode(`$ ${productPrice.toFixed(2)} - ${productName}`));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	// 
	var productPrices = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected: \n";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			console.log(ele[i]);
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
		// 

	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Subtotal: $" + getTotalPrice(chosenProducts).toFixed(2)));
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("Taxes: $" + (getTotalPrice(chosenProducts)*0.13).toFixed(2)));
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("TOTAL: $" + (getTotalPrice(chosenProducts)*1.13).toFixed(2)))
}

