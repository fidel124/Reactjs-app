var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');
var Board = require('Board');
var Linkdata = require('Linkdata');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(			
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<Route path="board" component={Board}/>			
			<Route path="linkdata" component={Linkdata}/>			
			<IndexRoute component={Weather}/>
		</Route>
	</Router> ,
	document.getElementById('app')
);