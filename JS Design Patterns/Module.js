var InfoUser = function( usr ){

	//Private property
	var usrName = usr;

	//Private function
	var _getDataFromGit = function( userName ){
		return fetch("https://api.github.com/users/" + userName ).then(function( response ){
			return response.json();
		}).then(function( data ){
			return data.login;
		});
		
	};

	return {
		//Public function
		showUserData: function(){
			_getDataFromGit( usrName ).then(function( responseFt ){
				console.log("User from GitHub: ", responseFt);
			});
		},
		getUserName: function(){
			return usrName;
		},
		setUserName: function( usr ){
			usrName = usr;
		}
	};
};
getDataUser
//Expose namespace
window.InfoUser = InfoUser;

//We have two instances
/*
var dta = InfoUser("brendaneich");
dta.showUserData();

var dta2 = InfoUser("luisSilvaBase22");
dta2.showUserData();
*/