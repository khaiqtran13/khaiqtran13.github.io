
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


// generate a checkbox list from a list of products it makes each product name as the label for the checkbox

//attempting to fetch by reference instead of parameters
function populateListProductChoices() {


    var lactoseRef = document.getElementById("lactoseFree").checked;
    var nutRef = document.getElementById("nutFree").checked;
	var organicRef = document.getElementById("organic").checked;
	var noneRef = document.getElementById("none").checked;
	var disp = document.getElementById("displayProduct");

	console.log("populateListProductChoices var:", lactoseRef, nutRef, organicRef, noneRef);
	
	disp.innerHTML="";

	// obtain a reduced list of products based on restrictions
    optionArray = restrictListProducts(products, lactoseRef, nutRef, organicRef, noneRef);
	
	optionArray.sort(compareItems);
	
	console.log("populated array:", optionArray);

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
	
		//s2.appendChild(checkbox);
		disp.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName + productPrice;
		label.appendChild(document.createTextNode(`$ ${productPrice.toFixed(2)} - ${productName}`));
		
		//s2.appendChild(label);
		disp.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		//s2.appendChild(document.createElement("br"));    
		disp.appendChild(document.createElement("br"));
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

