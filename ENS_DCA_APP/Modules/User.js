/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'User' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(User.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.addUser = function addUser (vName, vPassword, vFullname, vGroup) {
	
	var User = directory.addUser(vName, vPassword, vFullname);
	if((vGroup == 'Admin') || (vGroup == 'admin') || (vGroup == 'ADMIN'))
	{
		User.putInto("Admin");
	}	
	else if((vGroup == 'Etudiant') || (vGroup == 'etudiant') || (vGroup == 'ETUDIANT'))
	{
		User.putInto("Etudiant");
	}	
	else if((vGroup == 'PROF') || (vGroup == 'Prof') || (vGroup == 'prof') || (vGroup == 'Enseignant') || (vGroup == 'enseignant') || (vGroup == 'ENSEIGNANT'))
	{
		User.putInto("Enseignant");
	}
	directory.save();
	return true;
};

//-----------------------------------------------------------

exports.getParents = function getParents (name) {
	var user  = directory.user(name);
	var group = user.getParents(true)[0].name;
	g = group.toString();
	return g;
}
	
