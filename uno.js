
function mostrar() {
	var nombre;
	var tipo;
	var precio;
	var cantidad;
	var inflamable;
	var marca;
	var contAlcohol = 0;
	var contIac = 0;
	var contQuat = 0;
	var acumAlcohol = 0;
	var acumIac = 0;
	var acumQuat = 0;
	var promAlcohol = 0;
	var promIac = 0;
	var promQuat = 0;
	var maxInflamableValor = false;
	var maxInflamableLiteral;
	var acumIacValor = 0;
	var maxPrecio = false;
	var marcaLiteral;




	for (var i = 0; i < 2; i++) {

		nombre = prompt("ingrese el nombre del producto");
		//TIPO
		tipo = prompt("ingrese tipo de producto(alcohol,iac,quat)");
		while (tipo != "alcohol" && tipo != "iac" && tipo != "quat") {
			tipo = prompt("Dato incorrecto, por favor vuelva a introducir tipo de producto(alcohol,iac,quat)");
		}
		//PRECIO
		precio = prompt("ingrese el precio del producto (Entre 100 y 300)");
		precio = parseInt(precio);
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = prompt("Dato incorrecto, por favor vuelva a ingresar el precio (Entre 100 y 300)");
			precio = parseInt(precio);
		}
		//CANTIDAD
		cantidad = prompt("ingrese la cantidad de unidades(Entre 1 y 1000)");
		cantidad = parseInt(cantidad);
		while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
			cantidad = prompt("Dato incorrecto, por favor vuelva a ingresar el precio (Entre 1 y 1000)");
			cantidad = parseInt(cantidad);
		}
		//INFLAMABLE
		inflamable = prompt("ingrese el tipo de inflamable (ignifugo,combustible, explosivo)");
		while (inflamable != "ignifugo" && inflamable != "combustible" && inflamable != "explosivo") {
			inflamable = prompt("Dato incorrecto, ingrese el tipo de inflamable (ignifugo,combustible, explosivo)");
		}
		marca = prompt("ingrese la marca del producto");

		switch (tipo) {
			case "alcohol":
				contAlcohol++;
				acumAlcohol += cantidad;
				break;
			case "iac":
				contIac++;
				acumIac += cantidad;
				break;
			case "quat":
				contQuat++;
				acumQuat += cantidad;
				break;

		}
		if (maxInflamableValor == false) {
			maxInflamableValor = cantidad;
			maxInflamableLiteral = inflamable;
		} else if (cantidad > maxInflamableValor) {
			maxInflamableValor = cantidad;
			maxInflamableLiteral = inflamable;
		}

		if (tipo == "iac" && precio <= 200) {
			acumIacValor += cantidad;
		}

		if (maxPrecio == false) {
			maxPrecio = precio;
			marcaLiteral = "tipo: " + tipo + " marca; " + marca;
		} else if (precio > maxPrecio) {
			maxPrecio = precio;
			marcaLiteral = "tipo: " + tipo + " marca; " + marca;
		}

	}
	//FUERA DEL FOR
	promAlcohol = acumAlcohol / contAlcohol;
	promIac = acumIac / contIac;
	promQuat = acumQuat / contQuat;




	//INFORME
	document.write("El promedio de cantidad de alcohol es: " + promAlcohol + "<br>");
	document.write("El promedio de cantidad de iac es: " + promIac + "<br>");
	document.write("El promedio de cantidad de quat es: " + promQuat + "<br>" + "<br>");
	document.write("El tipo inflamable con mas cantidad de unidades en total es: " + maxInflamableLiteral + ",cantidad: " + cantidad + "<br><br>");
	document.write("Las unidades de IAC con precio menor a 200 (inclusive) vendidas fueron :" + acumIacValor + "<br><br>");
	document.write("La marca y el tipo del mas caro de los productos son: "+ marcaLiteral+ "y el precio es: "+maxPrecio);
}
