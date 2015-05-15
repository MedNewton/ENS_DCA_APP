
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("login1").logout();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		var user = WAF.directory.currentUser();
			if(user !=  null)
			{
					name = user.ID;
					var g  = rpc.getParents(name);
					if(g == "Admin")
						window.location = "/admin_main.waPage/index.html";
					else if (g == "Etudiant")
						window.location = "/student_main.waPage/index.html";
					else if (g == "Enseignant")
						window.location = "/prof_main.waPage/index.html";
			}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
