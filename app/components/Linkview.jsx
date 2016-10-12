var React = require('react');

var Linkview = React.createClass({
	getInitialState: function(){
		return {}
	},
	componentDidMount: function(){
		var component = this;
		$.get("https://api.github.com/users/" + this.props.login, function(data){
			component.setState(data);			
		});
	},
	remove: function(){				
		this.props.deleteCard(this.props.index);	
	},
	render: function() {		
		return(
			<div>								
				<div style={{width:"380px", margin:"10px", float:"left",border: "1px solid lightBlue"}}>

				   <img className="thumbnail" src={this.state.avatar_url} width="90" 
				   		style={{margin:"4px 8px 10px 4px", float:"left"}} />

				   	<div style={{float:"left",width:"276px"}}>
				   		<button style={{float:"right",padding:"4px",margin:"2px", border:"1px solid lightBlue"}} onClick={this.remove} >x</button><br/>
				   		<strong>Name:</strong> {this.state.name}<br/>
				   		<strong>E-mail:</strong> {this.state.email}<br/>
				   		<strong>Git Repos:</strong> {this.state.public_repos}<br/>
				   		<strong>Company:</strong> {this.state.company}<br/>
				   		<strong>Location:</strong> {this.state.location}<br/>				   		
				   	</div>				   
				</div>					
			</div>
		)
	}
});

module.exports = Linkview;