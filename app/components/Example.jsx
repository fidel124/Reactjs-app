var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
	render: function(){
		return(
			<div className="columns medium-6 large-4 small-centered">
				<h1 className="text-center">Examples</h1>
				<p>Here are a few examples locations to try out:</p>
				<ol>
					<li>
						<Link to='/?location=Nigeria'>Nigeria</Link>
					</li>
					<li>
						<Link to='/?location=Finland'>Finland</Link>
					</li>
					<li>
						<Link to='/?location=Sweden'>Sweden</Link>
					</li>
					<li>
						<Link to='/?location=London'>London</Link>
					</li>
				</ol>
			</div>
		);
	}
});

module.exports = Example;