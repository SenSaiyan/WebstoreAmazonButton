function AmazonAffiliate() {
	/* <span class="a-button a-button-primary a-button-icon">
	    <a target="_blank" href="https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAI3WW6Y5EI2PSNIKA&AssociateTag=amerinatiosta-20&ASIN.1=1932828729&Quantity.1=1" style="text-decoration:none;">
	        <span class="a-button-inner">
	            <i class="a-icon a-icon-cart"></i>
	            <input class="a-button-input" type="submit">
	            <span class="a-button-text" aria-hidden="true">Add to Cart</span>
	        </span>
	    </a>
	</span><br>	*/

	//connect to SKU to ASIN json
	var request = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myObj = JSON.parse(this.responseText);
	    document.getElementById("demo").innerHTML = myObj.name;
	  }
	};

	var associateTag = "amerinatiosta-20";
	var accessKay = "AKIAI3WW6Y5EI2PSNIKA";
	var secretKey = "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";
	var webstoreURL = ((window.location.href).split("/"))[-1]; //gets last part of current URL by splitting string into an array by "/" and calling the last index of the array

	var spanPrimary = document.createElement("span");
	spanPrimary["class"] = "a-button a-button-primary a-button-icon";

	var a = document.createElement("a");
	a["target"] = "_blank";
	a["href"] = "https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAI3WW6Y5EI2PSNIKA&AssociateTag=amerinatiosta-20&ASIN.1=1932828729&Quantity.1=1";
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
	
	spanButton.appendChild(i);
	spanButton.appendChild(input);
	spanButton.appendChild(spanText);
	a.appendChild(spanButton);
	spanPrimary.appendChild(a);
	document.getElementsByClassName("col-lg-2 g-mb-20").appendChild(spanPrimary);

}
AmazonAffiliate();