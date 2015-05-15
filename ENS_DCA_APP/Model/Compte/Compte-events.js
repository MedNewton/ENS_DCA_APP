

model.Compte.nomComplet.onGet = function() {
	return this.nom + ' ' + this.prenom;
};


model.Compte.nomComplet.onSet = function(value) {
	return this.nom + ' ' + this.prenom;s
};
