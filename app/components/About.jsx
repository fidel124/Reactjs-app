var React = require('react');

var About = React.createClass({
	render: function(){
		return(
			<div>
				<h1 className="text-center">About </h1>
				<p>
					This ia a weather application build on React. I have built this 
					for my personal React practice project. To improve my knowledge on 
					Reactjs.
				</p>
				<p>
					These are some tools I used:
				</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a>- This 
						was the Javascript framework I used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather map</a>- I used 
						Open Weather Map to search for weather data by city name.
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;