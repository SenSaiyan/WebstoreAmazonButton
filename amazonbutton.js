function AmazonAffiliate() {
	//HTML Goal:
	/* <span class="a-button a-button-primary a-button-icon">
	    <a target="_blank" href="https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAI3WW6Y5EI2PSNIKA&AssociateTag=amerinatiosta-20&ASIN.1=1932828729&Quantity.1=1" style="text-decoration:none;">
	        <span class="a-button-inner">
	            <i class="a-icon a-icon-cart"></i>
	            <input class="a-button-input" type="submit">
	            <span class="a-button-text" aria-hidden="true">Add to Cart</span>
	        </span>
	    </a>
	</span><br>	*/

	//Load CSS from external website
	//https://www.geeksforgeeks.org/how-to-load-css-files-using-javascript/
	//meant for local files, so might not work with URLs
	var linkCSS = document.createElement("link");
	linkCSS.rel = "stylesheet";
	linkCSS.type = "text/css";
	linkCSS.href = "https://notstaging.com/a-button.css"; //need to find a different host eventually

	var amazonUrl = "";

	//get the SKU of current product
	var header = document.getElementsByClassName("ws-ga-product u-link-v5 g-color-primary");
	console.log(header["outerText"]);
	// var header = document.getElementsByClassName("h3 g-mb-15").textContent;
	console.log("SKU: " + header);

	//connect to SKU to ASIN json
	//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
	var JSONUrl = "https://notstaging.com/SKUtoASIN.json"; //change to location of uploaded SKUtoASIN.json
	var request = new XMLHttpRequest();
	request.open('GET', JSONUrl, true);
	request.onload = function() {
		var data = JSON.parse(this.response);
		if (request.status < 400 && request.status >= 200) {
			if (data.hasOwnProperty(header)){
				amazonUrl = "https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAI3WW6Y5EI2PSNIKA&AssociateTag=amerinatiosta-20&ASIN.1=" + data[header]
					+ "&Quantity.1=1";
					console.log("Links to: " + amazonURL);
			//} catch(error) {
			} else {
				console.log("Could not find ASIN on Amazon")
			}
		} else {
			console.log("API returned an invalid status")
		}
	};

	// var associateTag = "amerinatiosta-20";
	// var accessKay = "AKIAI3WW6Y5EI2PSNIKA";
	// var secretKey = "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";

	var spanPrimary = document.createElement("span");
	spanPrimary["class"] = "a-button a-button-primary a-button-icon";

	var a = document.createElement("a");
	a["target"] = "_blank";
	a["href"] = amazonUrl;
	a["style"] = "text-decoration:none;";

	var spanButton = document.createElement("span");
	spanButton["class"] = "a-button-inner";

	var i = document.createElement("i");
	i["class"] = "a-icon a-icon-cart";

	var input = document.createElement("input");
	input["class"] = "a-button-input";
	input["type"] = "submit";

	var spanText = document.createElement("span");
	spanText["class"] = "a-button-text";
	spanText["aria-hidden"] = "true";

	var text = document.createTextNode("Add to Cart");
	spanText.appendChild(text);
	
	//append each child in bottom to top order
	spanButton.appendChild(i);
	spanButton.appendChild(input);
	spanButton.appendChild(spanText);
	a.appendChild(spanButton);
	spanPrimary.appendChild(a);
	rightColumn = document.getElementsByClassName("col-lg-2 g-mb-20");
	rightColumn[0].appendChild(spanPrimary);
}

AmazonAffiliate();