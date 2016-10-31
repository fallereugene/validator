
Short description
=========================
   
Using
--------------------------  

This simple code helps you to validate you data according to your task.
You shold only pass your data and call object's validate method.
For example:

var yourData = {
	name: value,
	email: value,
	compare: [firstValue, secondValue]
	}
	
You can also pass you own error messages:
	
validator.config = {
	name: ['Any custom message', 'isNonEmpty'],
	email: 'email',
	compare: 'compare'
};
    ========================

