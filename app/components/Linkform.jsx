var React = require('react');

var Linkform = React.createClass({
	
	propTypes:{
		login: React.PropTypes.string
	},
	handleSubmit: function(e){
		e.preventDefault();
		
		var loginInput = this.refs.login.value;		
		
		if(typeof loginInput === 'string'){ //&& loginInput >2
			this.refs.login.value = '';	
			this.props.addCard(loginInput);		
		}				
	},
	render: function(){
		return(
			<form onSubmit={this.handleSubmit}>				 
				<input type="text" placeholder=" enter github username" ref="login" />
				<button className="hollow button">Add</button>
			</form>
		)
	}
});

module.exports = Linkform;