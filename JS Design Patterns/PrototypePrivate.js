var InfoUser = (function(){

	function InfoUser( usr ){
		this.usrName = usr;
	}

	function _getDataFromGit( usrName ){
		return fetch("https://api.github.com/users/" + usrName ).then(function( response ){
			return response.json();
		}).then(function( data ){
			return data.login;
		});
	}

	InfoUser.prototype.getUserName = function(argument){
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

	return InfoUser;

})();

window.InfoUser = InfoUser;