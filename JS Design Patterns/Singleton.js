var InfoUser = (function(){
	//Private variable to ensure the creation of ONLY one instance
	var instance;
	var usrName;

	function InfoContructor(usr){
		usrName = usr;
	}

	function _getDataFromGit( usrName ){
		return fetch("https://api.github.com/users/" + usrName ).then(function( response ){
			return response.json();
		}).then(function( data ){
			return data.login;
		});
	}

	return {
		getUserName: function(){
			return usrName;
		},
		setUserName: function( usr ){
			usrName = usr;
		},
		showUserData: function(){
			var usrName = this.getUserName();
			_getDataFromGit( usrName ).then(function( responseFt ){
				console.log("User from GitHub: ", responseFt);
			});
		},
		getInstance: function(usr){//Public function to access the constructor
			if (!instance) {
				instance = new InfoContructor(usr);
				console.info("New Instance created");
			} else {
				console.warn("There is already an instance created!!");
			}
			return instance; 
		}
	}
})();

window.InfoUser = InfoUser;
/*
var dta = InfoUser;
dta.getInstance("brendaneich");
dta.showUserData();
*/