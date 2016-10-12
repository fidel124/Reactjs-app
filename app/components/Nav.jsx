var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function(){
		return(
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="menu">
			      <li className="menu-text">Weather App</li>
			      <li>
			      	<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
			      </li>			      
			      <li>
			      	<Link to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Preset Locations</Link>
			      </li>
			      <li>
			      	<Link to="/board" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Todo List</Link>
			      </li>
			      <li>
			      	<Link to="/linkdata" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Linkedin Profiles</Link>
			      </li>
			      <li>
			      	<Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
			      </li>
			    </ul>
			  </div>
			  <div className="top-bar-right">
			  	<strong>By: </strong>Fidelis Ololube
			  </div>
			</div>						
		);
	}
});

module.exports = Nav;

