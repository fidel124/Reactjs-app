var React = require('react');
var Todo = require('Todo');
var LocalstoreAPI = require('LocalstoreAPI');

var Board = React.createClass({
	getInitialState: function(){		
		return{
			comments:LocalstoreAPI.getTodomsg()
		}
	},
	componentDidUpdate: function(){
		LocalstoreAPI.setTodomsg(this.state.comments);		
	},
	add: function(text){
		var arr = this.state.comments;
		arr.push(text);
		this.setState({comments: arr});
	},
	removeComment: function(i){		
		var arr = this.state.comments;
		arr.splice(i,1);
		this.setState({comments:arr});
	},
	updateComment: function(newText, i){		
		var arr= this.state.comments;
		arr[i] = newText;
		this.setState({comments:arr});
	},
	eachComment: function(text, i){
		return (
			<Todo key={i} index={i} 
			updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
				{text}
			</Todo>
		);
	},
	render: function(){
		return(
			<div>
			  <button onClick={this.add.bind(null,"enter task")} style={{margin:'5px'}} className=" radius button">Add New Task</button>
			  {this.state.comments.map(this.eachComment)} 			  
			</div>
		);
	}
});

module.exports = Board;