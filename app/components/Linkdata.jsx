var React = require('react');
var Linkview = require('Linkview');
var Linkform = require('Linkform');
var LocalstoreAPI = require('LocalstoreAPI');


var Linkdata = React.createClass({	

	getInitialState: function(){		
		return {			
			logins:LocalstoreAPI.getUsername()
		};
	},	
	componentDidUpdate: function(){		
		LocalstoreAPI.setUsername(this.state.logins);		
		//logins:LocalstoreAPI.getUsername();											        		 		
	},
	addCard : function(Plogin){		
		var arr= this.state.logins;
		arr.push(Plogin);
		this.setState({logins:arr});					
	},
	delCard: function(i){						
		var arr2 = this.state.logins;
		arr2.splice(i,1);
		this.replaceState({logins:arr2});														
	},			
	render: function() {					
		return(
			<div>
				<div className="row" style={{marginTop:"10px"}}>
					<div className="large-4 columns">
					   <Linkform addCard = {this.addCard}/>
					</div>
					<div className="large-4 columns"></div>
					<div className="large-4 columns"></div>
				</div>
				<div className="row">							
					{this.state.logins.map((login,i) =>{
						return (
							<Linkview key={i} index={i} 
						login={login} deleteCard={this.delCard} />												
		)
					})}
				</div>
			</div>
		);
	}
	
});

module.exports = Linkdata;