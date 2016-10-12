 var names = ['Fidelis', 'Adman', 'Ben'];
/*
names.forEach(function(name){
	console.log('forEach', name);
});

names.forEach((name) => {   // mostly used in place of anonymous function
	console.log('arrowFunc', name);
});  

names.forEach((name) => console.log(name)); 
*/

var returnMe = (name) => name + '!';
console.log(returnMe('Fidelis'));

// The difference between Arrow function and Anonymus function is that, anonymus function
//have a "this" binding while Arrow function takes its parent "this" binding.
/*
var person = {  // error occured with the use of this key word
	name:'Fidelis',
	greet: function(){
		names.forEach(function(name){
			console.log(this.name + ' says hi to ' + name);
		});
	}
}; */
/*
var person = {  
	name:'Fidelis',
	greet: function(){
		names.forEach((name) =>{
			console.log(this.name + ' says hi to ' + name);
		});
	}
};

person.greet();
*/

function add(a,b){
	return a + b;
}
//console.log(add(1,3));
//console.log(add(9,0));

var addStatement = (a, b) => {
	return a + b;
}
console.log(addStatement(2,6));

var addExpression = (a,b) => a + b;
console.log(addExpression(2,2));

