var InfoUser = {

	usrName: "",
	getUserName: function(){
		return this.usrName;
	},
	setUserName: function( usr){
		this.usrName = usr;
	},
	_getDataFromGit: function( userName ){
		return fetch("https://api.github.com/users/" + userName ).then(function( response ){
			return response.json();
		}).then(function( data ){
			return data.login;
		});
	},
	showUserData: function(){
		var usrName = this.getUserName();
		this._getDataFromGit( usrName ).then(function( responseFt ){
			console.log("User from GitHub: ", responseFt);
		});
	}

};

//Expose namespace
window.InfoUser = InfoUser;

var instanceOne = InfoUser;
instanceOne.usrName = "luisSilvaBase22";
var instanceTwo = InfoUser;
instanceTwo.usrName = "brendaneich";

//Have the same info
instanceOne;
instanceTwo;

//Will already be polluted
var instanceThree = InfoUser;
instanceThree;
