
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button5 = {};	// @button
	var button4 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var f = $$('autoForm3');
		login = f.sourceAtts[0].getValue();
		password = f.sourceAtts[1].getValue();
		name = f.sourceAtts[2].getValue();
		name2 = f.sourceAtts[3].getValue();
		fullName = name+name2;
		type = f.sourceAtts[6].getValue();
		rpc.addUser(login, password, fullName, type);
		alert("Le compte de "+ fullName + "est activé comme " + type + ".");
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		alert("hello");
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		//var fullName = f.sourceAtts[4].getValue();
		//rpc.remove(fullName);
		//salert("Le compte de " + fullName + " est désactivé");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock
