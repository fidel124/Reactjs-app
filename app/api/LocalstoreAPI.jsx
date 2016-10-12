var $ = require('jquery');
var J = require('jquery');

module.exports = {
	
	setTodomsg: function(comments){
		if($.isArray(comments)){
			localStorage.setItem('comments', JSON.stringify(comments));
			return comments;
		}
	},
	getTodomsg: function(){
		var stringTodomsg = localStorage.getItem('comments');
		var comments = [];

		try {
			comments = JSON.parse(stringTodomsg);
		}catch(e){

		}

		return $.isArray(comments) ? comments : [] ; 
		
	}, //end Todomsg ///////////////////////////////////////

	setUsername: function(logins){
		if(J.isArray(logins)){
			localStorage.setItem('logins', JSON.stringify(logins));
			return logins;
		}
	},
	getUsername: function(){
		var stringUsername = localStorage.getItem('logins');
		var logins = [];

		try {
			logins = JSON.parse(stringUsername);
		}catch(e){

		}

		return J.isArray(logins) ? logins : [] ; //same with the one below
		/*
		if($.isArray(logins)){
			return logins;
		}else{
			return [];
		}
		*/
	}
	
};