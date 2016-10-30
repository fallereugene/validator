 
    'use strict';
        
	var validator = {
		
		config: {},
		
		//add the validation's types
		types: {
			
			isNonEmpty: {
				
				validate: function( value ){
				
					return value !== '';
				},
				msg: 'Поле не может быть пустым или 0'
			},
			
			validateNum: {
				
				validate: function( value ){
					
					return !isNaN(value) && value > 0
				},
				msg: 'Поле не может быть пустым или 0'
			},
			
			alphaNumOnly: {
				
				validate: function( value ){
					return !/[^a-z0-9]/i.test(value);
				},
				msg:'Недопустимы символы'
			}
		},
		
		//errors messages array
		messages: [],
		
		validate: function(data){
			
			var i,
				validateType,
				validateChecker,
				msg,
				result;
			
			this.messages = [];
			
			//check the validated object
			for( i in data ){
				
				if( data.hasOwnProperty(i) ){
					
					validateType = this.config[i];
					
					//if there is no valiadtion config
					if( !validateType ){
						continue;
					}
					
					//check the methods in validation's type
					validateChecker = this.types[validateType];
					
					//if there is no
					if( !validateChecker ){
						
						log('Не заданы параметры валидации для требуемого типа');
					}
					
					//validate
					result = validateChecker.validate(data[i]);
					
					//if validation is failed write the error message into array
					if( !result ){
						msg = '"' + i + '"' + ' не может быть пустым';
						this.messages.push({msg:validateChecker.msg, field: i});
					}
					
				}
				
			}

		},
		
		//addition helper
		hasErrors: function(){
			
			return this.messages.length > 0;
		}
		
	};
 