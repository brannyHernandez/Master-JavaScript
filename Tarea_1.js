

	// Función para determinar si un número es Par o Impar
	function validaParImpar(valor){
		if(valor % 2 == 0) {
			return "El número "+ valor + " es PAR";
		  }
		else {
			return "El número "+ valor + " es IMPAR";
		}
	}


	// Función para determinar la posición de una letra dentro de un string
	function posicionString(letra){
		var cadena = "abcdefghijklmnñopqrstuvwxyz";
		var posicion = cadena.indexOf(letra);

		if(posicion==-1){
			return "Letra no encontrada.";
		}else{
			return "La letra '"+ letra +"' fue encontrada en la posición: "+ posicion+ " de la cadena: "+ cadena;
		}
	}


	// Función para agrear un impuesto sobre el precio recibido
	function calculaImpuesto(precio){
		var impuesto = precio * 0.19;
		return "El valor '"+ precio +"' con el impuesto agregado es:"+ (precio + impuesto);
	}


	// Función para retornar el dado obtenido aleatoriamente
	function dadoAleatorio(nombre){
		return function(){
			return nombre + " tiró un dado y salió " + Math.floor(Math.random() * 6 + 1);
		}		
	}


	// Protoripo de persona para su definición y almacenamiento de propiedades en el storage del navegador
	function Persona (nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}

	Persona.prototype.validaStorage = function(){
		if (typeof(Storage) !== "undefined") {
			return true;
		}
		
		alert("El navegador no soporta Storage");
		return false;
	}

	Persona.prototype.guardarEnLocalStorage = function(){
		if(this.validaStorage()){
			localStorage.setItem('Nombre', this.nombre);
			localStorage.setItem('Edad', this.edad);
		}
	};
	
	Persona.prototype.guardarEnSessionStorage = function(){
		if(this.validaStorage()){
			sessionStorage.setItem('Nombre', this.nombre);
			sessionStorage.setItem('Edad', this.edad);
		}
	};
	
	
	//*** Se llaman a cada una e las funciones y prototipo *****
	console.log(validaParImpar(3));
	console.log(posicionString("x"));
	console.log(calculaImpuesto(1000));

	var lanzaDado = dadoAleatorio("Julio");
	console.log(lanzaDado());
	console.log(lanzaDado());
	console.log(lanzaDado());
	console.log(lanzaDado());
	console.log(lanzaDado());

	var objeto = new Persona('BRANY HERNANDEZ', 34);
	objeto.guardarEnLocalStorage();
	objeto.guardarEnSessionStorage();

