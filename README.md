
How to use this code
=========================

This simple code helps you to validate you data according to your task.
You shold only pass your data and call object's validate method.
For example:

```bash
var yourData = {
	name: value,
	email: value,
	compare: [firstValue, secondValue]
	}
```
That was you data you vil validate.
Now you shold add the rules.
	
You can also pass you own error messages:

```bash

validator.config = {
	name: ['Any custom message', 'isNonEmpty'],
	email: 'email',
	compare: 'compare'
};
```

