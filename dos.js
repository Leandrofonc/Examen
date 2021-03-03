
function mostrar() {
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var continuar = "si";
  var maxPromedioValor = false;
  var maxPromedioNombre;
  var minEdadValor = false;
  var minEdadNombre;
  var acumMasculino=0;
  var acumFemenino=0;
  var acumNoBinario=0;
  var contMasculino=0;
  var contFemenino=0;
  var contNoBinario=0;
  var promMasculino=0;
  var promFemenino=0;
  var promNoBinario=0;
  var maxMateriasValor=false;
  var maxMateriasNombre;

  while (continuar == "si") {
    //PEDIR NOMBRE
    nombre = prompt("ingrese nombre");
    //TIPO DE CURSADA
    tipoCursada = prompt("ingrese el tipo de cursada (libre, presencial, remota)");
    while (tipoCursada !="libre"&& tipoCursada!= "presencial" && tipoCursada!= "remota"){
      tipoCursada = prompt("Dato incorrecto, ingrese el tipo de cursada (libre, presencial, remota)");
    }
    //CANTIDAD DE MATERIAS
    cantidadMaterias = prompt("ingrese la cantidad de materias (mas de 0 y menos de 8)");
    cantidadMaterias = parseInt(cantidadMaterias);
    while (cantidadMaterias<1 || cantidadMaterias>8){
      cantidadMaterias = prompt("Dato Incorrecto, ingrese la cantidad de materias (mas de 0 y menos de 8)");
      cantidadMaterias = parseInt(cantidadMaterias);
    }
    //SEXO
    sexo = prompt("ingrese su sexo (femenino, masculino, no binario)");
    //NOTA PROMEDIO
    notaPromedio = prompt("ingrese nota promedio entre 0 y 10")
    notaPromedio = parseInt(notaPromedio);
    while (isNaN(notaPromedio) ||notaPromedio < 0 || notaPromedio >10){
      notaPromedio = prompt("Dato incorrecto, ingrese nota promedio entre 0 y 10")
      notaPromedio = parseInt(notaPromedio);
    }
    //EDAD
    edad = prompt("ingrese su edad");
    edad = parseInt(edad);
    while (isNaN(edad) || edad <18 || edad > 100){
      edad = prompt("Dato Incorrecto, ingrese su edad");
      edad = parseInt(edad);
    }

    //PUNTOS
    //A
    if (sexo != "masculino") {
      if (maxPromedioValor == false) {
        maxPromedioValor = notaPromedio;
        maxPromedioNombre = nombre;
      } else if (notaPromedio > maxPromedioValor) {
        maxPromedioValor = notaPromedio;
        maxPromedioNombre = nombre;
      }
    }
    //B
    if (tipoCursada == "libre") {
      if (minEdadValor == false) {
        minEdadValor = edad;
        minEdadNombre = nombre;
      } else if (edad < minEdadValor) {
        minEdadValor = edad;
        minEdadNombre = nombre;
      }
    }
    //C 
    switch (sexo) {
      case "masculino":
        contMasculino++;
        acumMasculino+=notaPromedio;
        break;
      case "femenino":
        contFemenino++;
        acumFemenino+= notaPromedio;
        break;
      case "no binario":
        contNoBinario++;
        acumNoBinario+= notaPromedio;
        break;
    }
    //D
    if (tipoCursada!= "remota"){
      if (maxMateriasValor==false){
        maxMateriasValor=cantidadMaterias
        maxMateriasNombre= "nombre: "+nombre + " edad: "+ edad; 
      } else if (cantidadMaterias>maxMateriasValor){
        maxMateriasValor=cantidadMaterias
        maxMateriasNombre= "nombre: "+nombre + " edad: "+ edad; 
      }
    }




    continuar = prompt("Desea continuar? (si/no)");
  }
  //FUERA WHILE

  promMasculino = acumMasculino/contMasculino;
  promFemenino = acumFemenino / contFemenino;
  promNoBinario = acumNoBinario / contNoBinario;

  //INFORME
  document.write("el nombre del mejor promedio no masculino es: " + maxPromedioNombre + "y su nota es: " + notaPromedio + "<br><br>");
  document.write("el nombre del mas joven de los alumnos que dan libre es: "+minEdadNombre+ " y su edad es: "+minEdadValor + "<br><br>");
  document.write("el promedio del sexo masculino es: "+promMasculino+"<br>");
  document.write("el promedio del sexo femenino es: "+promFemenino+"<br>");
  document.write("el promedio del sexo no binario es: "+promNoBinario+"<br><br>");
  document.write ("la edad y el nombre del que cursa mas materias de forma no remota es: "+maxMateriasNombre + " y cursa: "+maxMateriasValor+" de materias");
}
