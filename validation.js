 
    'use strict';
        
	var validator = {
		
		config: {},
		
		//add the validation's types
		types: {
			
			isNonEmpty: {
				
				validate: function( value ){
				
					return value.trim() !== '';
				},
				msg: 'Поле не может быть пустым'
			},
			
			validateNum: {
				
				validate: function( value ){
					
					return !isNaN(value) && value > 0;
				},
				msg: 'К вводу допустимы только цифры и латиница'
			},
			
			alphaNumOnly: {
				
				validate: function( value ){
					return !/[^a-z0-9]/i.test(value) && value != '';
				},
				msg:'Недопустимы символы'
			},
			
			email: {
				
				validate: function( value ){

					return  /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test(value);
				},
				
				msg:'Некорректный ввод email'
			},
			
			compare: {
				
				validate: function( value ){

					return value[0] < value[1];
				},
				
				msg:'Первое значение не может быть меньше второго'
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
				
				var newMessage = '';
				
				if( data.hasOwnProperty(i) ){
					
					validateType = this.config[i];
					
					if( Array.isArray(validateType) ){

						var j = 0,
							position = 0,
							length = validateType.length,
							typesKeys = Object.keys(this.types);

						for( j; j < length; j++ ){
							
							if (this.inArray(validateType[j], typesKeys)) continue;
							
							newMessage = validateType[j];
							position = j;
						}
						
						validateType = j == 1 ? validateType[0] : validateType[1];
					}
					
					//if there is no valiadtion config
					if( !validateType ) continue;

					
					//check the methods in validation's type
					validateChecker = this.types[validateType];
					
					if( newMessage !== '' ) validateChecker.msg = newMessage;

					//if there is no
					if( !validateChecker ){
						
						log('There is no any validation parametres for the rquired type');
					}
					
					//validate
					result = validateChecker.validate(data[i]);
					
					//if validation is failed write the error message into array
					if( !result ){
						
						this.messages.push({msg:validateChecker.msg, field: i});
					}
					
				}
				
			}

		},
		
		//addition helper
		hasErrors: function(){
			
			return this.messages.length > 0;
		},
		
		inArray: function( value, array ){
			
			for(var i = 0; i < array.length; i++){
	
				if(array[i] == value) return true;
			}
			
			return false;
		}
		
	};
	
	if (!String.prototype.trim) {
		
		(function() {
		  
			String.prototype.trim = function() {
			
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		  
			};
		})();
	}
		
	if (!Array.isArray) {
		
		Array.isArray = function(arg) {
			
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}
 