function AmazonAffiliate() {
	// <span class="a-button a-button-primary">
    //     <a target="_blank" href="asdf" style="text-decoration:none">
    //         <span class="a-button-inner">
    //             <img src="https://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" class="a-icon a-icon-shop-now">
    //             <input class="a-button-input" type="submit" value="Add to cart">
    //             <span class="a-button-text">Shop Now</span>
    //         </span>
    //     </a>
    // </span>

	// https://www.textfixer.com/tools/remove-line-breaks.php
	var css = ".a-button { padding: 0; vertical-align: middle; border: 1px solid; border-color: #adb1b8 #a2a6ac #8d9096; text-align: center; overflow: hidden; text-decoration: none !important; cursor: pointer; display: inline-block; background: #d8dde6; background: #e7e9ec; border-radius: 3px; } .a-button-text { padding: 0px 10px 0px 11px; text-align: center; color: #111111; font-size: 13px; line-height: 29px; display: block; font-family: Arial, sans-serif; background-color: transparent; margin: 0; border: 0; outline: 0; white-space: nowrap; padding: 0 20px 0 39px; } .a-button-inner { display: block; position: relative; overflow: hidden; height: 29px; box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset; border-radius: 2px; } .a-button-input { position: absolute; z-index: 20; height: 100%; width: 100%; left: 0px; top: 0px; background-color: white; outline: 0; border: 0; overflow: visible; cursor: pointer; opacity: 0.01; filter: alpha(opacity=1); } .a-button-primary { border-color: #a88734 #9c7e31 #846a29; color: #111111; background: #f0c14b; } .a-button-primary .a-button-inner { background: #f3d078; background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b); background: linear-gradient(to bottom, #f7dfa5, #f0c14b); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7dfa5', endColorstr='#f0c14b',GradientType=0); *zoom: 1; } .a-button-primary:hover .a-button-inner { background: #f1c860; background: -webkit-linear-gradient(top, #f5d78e, #eeb933); background: linear-gradient(to bottom, #f5d78e, #eeb933); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5d78e', endColorstr='#eeb933',GradientType=0); *zoom: 1; } .a-button-primary:active .a-button-inner { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset; background-color: #f0c14b; background-image: none; filter: none; } .a-button-primary:hover { border-color: #9c7e31 #90742d #786025; } .a-button-primary:active { border-color: #a88734 #9c7e31 #9c7e31; } .a-icon-cart { left: 2px; top: 2px; position: absolute; height: 25px; width: 25px; background-position: -35px -5px; background-image: url(http://g-ecx.images-amazon.com/images/G/01/amazonui/sprites/aui_sprite_0037-1x._V1_.png); background-repeat: no-repeat; background-size: 400px 600px; -webkit-background-size: 400px 600px; display: inline-block; vertical-align: top; }";
	var head = document.head || document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	head.appendChild(style);
	style.type = 'text/css';
	if (style.styleSheet){
		// This is required for IE8 and below.
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	//get the SKU of current product
	var header = document.getElementsByClassName("ws-ga-product u-link-v5 g-color-primary");
	var headerText = header[0].textContent;

	//connect to SKU to ASIN json
	var amazonUrl = "";
	var JSONUrl = "https://notstaging.com/SKUtoASINKeyed.json"; //need to host on webstore server
	var request = new XMLHttpRequest();
	request.open('GET', JSONUrl, true);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data = request.response;
		var ASIN = JSON.stringify(data[headerText][0]).split(":")[1];
		var cutASIN = (ASIN.substring(1, ASIN.length-2));
		amazonUrl = "https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAI3WW6Y5EI2PSNIKA&AssociateTag=amerinatiosta-20&ASIN.1="
			+ cutASIN + "&Quantity.1=1";
		console.log(amazonUrl);
	}

	// var associateTag = "amerinatiosta-20";
	// var accessKay = "AKIAI3WW6Y5EI2PSNIKA";
	// var secretKey = "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";


	var spanPrimary = document.createElement("span");
	spanPrimary.className = "a-button a-button-primary a-button-icon";

	var a = document.createElement("a");
	a["target"] = "_blank";
	a["href"] = amazonUrl;
	a["style"] = "text-decoration:none;";

	var spanButton = document.createElement("span");
	spanButton.className = "a-button-inner";

	var i = document.createElement("i");
	i.className = "a-icon a-icon-cart";

	var input = document.createElement("input");
	input.className = "a-button-input";
	input["type"] = "submit";

	var spanText = document.createElement("span");
	spanText.className = "a-button-text";
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