var React = require('react');

var Todo = React.createClass({
	getInitialState: function(){
		return{editing: false}
	},
	edit:function(){
		this.setState({editing: true});
	},
	remove:function(){
		this.props.deleteFromBoard(this.props.index);
	},
	save:function(){
		var val = this.refs.newText.value;
		this.props.updateCommentText(this.refs.newText.value, this.props.index);
		this.setState({editing: false});
	},
	renderNormal: function(){
		return(
			<div>
				<div style={{float:"left", marginRight:"10px",marginLeft:"5px",
					marginTop:"20px", width:"250px", height:"120px", backgroundColor: "lightblue"}}>
		
						<div style={{border: "1px solid skyblue", padding:"2px",width:"100%", margin:"auto", minHeight:"80px",maxHeight:"80px",overflowY:"scroll",
							overflowX:"hidden"}}>{this.props.children}
						</div>

						<div style={{marginBottom:"0px"}}>				
						  <button  onClick={this.edit} className="hollow button">Edit</button>&nbsp;				
						  <button  onClick={this.remove} className="hollow button">Delete</button>				
						</div>
					  
				</div>
			</div>
		);
	},
	renderForm: function(){
		return(
			<div>
				<div style={{float:"left", marginRight:"10px",marginLeft:"5px",
					marginTop:"20px", width:"250px", backgroundColor: "lightblue"}}>
				<textarea style={{width:"100%", margin:"auto", minHeight:"80px"}} ref="newText" defaultValue={this.props.children}></textarea>				
				<button style={{margin:"auto"}} onClick={this.save} className="button default">Save</button>
				</div>								
			</div>
		);
	},
	render: function(){
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}
});

module.exports = Todo;