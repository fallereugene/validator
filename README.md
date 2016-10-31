
How to use this code
=========================

This simple code helps you to validate your data according to your task.
You should only pass your data and call object's validate method.
For example:

```bash
var yourData = {
	name: value,
	email: value,
	compare: [firstValue, secondValue]
	}
```
That was you data you will validate.
Now you shold add the rules.
	
You can also pass you own error messages:

```bash

validator.config = {
	name: ['Any custom message', 'isNonEmpty'],
	email: 'email',
	compare: 'compare'
};
```

Then call the object's method and pass the data

```bash
validator.validate(data);
```
If there are some mistakes the scripts will create the array.

Also the script has one helper and you can see if there are some mistakes

```bash
validator.hasErrors();
```
Returns true or false.

You can get the errors
```bash
validator.messages;
```
If there are some errors you will see the next code: 
```bash

[Object { msg="Any custom message",  field="name"}, Object { msg="Некорректный ввод email",  field="email"}, Object { msg="Недопустимы символы",  field="age"}, Object { msg="Первое значение не может быть меньше второго",  field="compare"}]
```

