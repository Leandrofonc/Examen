/*debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
</br>Nombre, 
</br>estado civil ("soltero", "casado" o "viudo"), 
</br>edad( solo mayores de edad, mas de 17),
</br>temperatura corporal(validar por favor) 
</br>y sexo (validar).
</br>NOTA:el precio por pasajero es de  $600.
</br>Se debe informar (solo si corresponde):



</br>a) La cantidad de personas con estado  "viudo" de mas de 60 años. 
</br>b) el nombre y edad de la mujer soltera mas joven.
</br>c) cuanto sale el viaje total sin descuento. 
</br>d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final  tiene  un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar() {

	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var precio = 600;
	var contViudo60 = 0;
	var minEdadMujerValor = false;
	var minEdadMujerLiteral;
	var contPasajeros = 0;
	var totalSinDescuento;
	var contPasajeros60 = 0;
	var control = 0;
	var totalConDescuento;


	var continuar = "si";

	while (continuar == "si") {

		//NOMBRE
		nombre = prompt("Ingrese nombre");


		//ESTADO CIVIL
		estadoCivil = prompt("Ingrese estado civil (soltero, casado o viudo)");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("dato incorrecto,Ingrese estado civil (soltero, casado o viudo)");
		}


		//EDAD
		edad = prompt("ingrese edad (Mayores de 17 años)");
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 17) {
			edad = prompt("dato incorrecto, ingrese edad (Mayores de 17 años)");
			edad = parseInt(edad);
		}

		//TEMEPRATURA CORPORAL
		temperaturaCorporal = prompt("ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal)) {
			temperaturaCorporal = prompt("dato incorrecto, ingrese temperatura corporal");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		//SEXO
		sexo = prompt("ingrese sexo(masculino, femenino)");
		while (sexo != "masculino" && sexo != "femenino") {
			sexo = prompt("dato incorrecto, ingrese sexo(masculino, femenino)");
		}

		//A
		if (estadoCivil == "viudo" && edad > 60) {
			contViudo60++;

		}
		//B
		if (sexo == "femenino" && estadoCivil == "soltero") {
			if (minEdadMujerValor == false) {
				minEdadMujerValor = edad;
				minEdadMujerLiteral = nombre;
			} else if (edad < minEdadMujerValor) {
				minEdadMujerValor = edad;
				minEdadMujerLiteral = nombre;
			}
		}


		//D
		if (edad > 60) {
			contPasajeros60++;
		}

		contPasajeros++;

		continuar = prompt("quiere ingresar otra pasajero: (si/no)");
	}
	//FUERA DEL WHILE
	//C
	totalSinDescuento = precio * contPasajeros;
	//D
	control = contPasajeros / contPasajeros60;
	if (control > 1) {
		totalConDescuento = totalSinDescuento - (totalSinDescuento * 0.25);
	}
	else {
		totalConDescuento = "no aplica";
	}


	//INFORMES
	document.write("La cantidad de personas con estado civil viudo con mas de 60 años son: " + contViudo60 + "<br>");
	document.write("EL nombre y edad de la mujer soltera mas joven es: " + minEdadMujerLiteral + ", " + edad + " años" + "<br>");
	document.write("Cuanto sale el viaje total sin descuento: " + totalSinDescuento + "<br>");
	document.write("el precio final con 25% de descuento es: " + totalConDescuento);
} 