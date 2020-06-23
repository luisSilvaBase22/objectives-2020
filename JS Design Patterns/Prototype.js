function InfoUser( usr ){
	this.usrName = usr;

	this._getDataFromGit = function( usrName ){
		return fetch("https://api.github.com/users/" + usrName ).then(function( response ){
			return response.json();
		}).then(function( data ){
			return data.login;
		});
	};
}

InfoUser.prototype.getUserName = function(){
	return this.usrName;
};

InfoUser.prototype.setUserName = function( usr ){
	this.usrName = usr;
};

InfoUser.prototype.showUserData = function(){
	var usrName = this.getUserName();
	this._getDataFromGit( usrName ).then(function( responseFt ){
		console.log("User from GitHub: ", responseFt);
	});
};

window.InfoUser = InfoUser;

//An instance must be created this way
var dt1 = new InfoUser("luisSilvaBase22");

//Aparently there are not private methods nor properties
dt1.usrName = "brendaneich";

//And multiple instances can be created
var dt2 = new InfoUser("luisSilvaBase22");
