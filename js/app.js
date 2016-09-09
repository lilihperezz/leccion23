
window.addEventListener("load", function() {
   var button = document.getElementById("calcular");
   button.addEventListener("click", function() {
       var nombre= document.getElementById("nombre").value;
	   var edad= parseInt(document.getElementById("edad").value);
	   var sexo= document.getElementById("sexo").value;

		function Persona(nombre,edad,sexo){
			this.nombre=nombre;
			this.edad = edad;
			this.sexo= sexo;
			this.mayorDeEdad =(this.edad >=18);
			this.presentacion = function()
			{
				if (this.mayorDeEdad){
					return "Hola, mi nombre es " + this.nombre +  ", tengo "+ this.edad  + " años y soy mayor de edad.";
				}else{
					return "Hola, mi nombre es " + this.nombre +  ", tengo "+ this.edad  + " años y soy menor de edad.";
				}
			}
		}

			var persona1 = new Persona(nombre,edad,sexo);
				document.write(persona1.presentacion());            
	});
});
		


		