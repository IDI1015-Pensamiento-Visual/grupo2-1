//La siguiente función hace que la página se desplace de forma suave hacia el elemento seleccionado
function irA(elementId) {
  var lugar = document.getElementById(elementId);
  lugar.scrollIntoView({behavior:"smooth"});
}


//botones:
//Botones iniciales: apretar "sí" hace que el "dinos tu nombre" desaparezca, y aparezca la sección de los quintiles. Por otro lado, si se apreta "no", hará que el ingreso de nombre desaparezca y sea reemplazado por la ventana que invita a explorar de todas maneras, en la que el apretar "comenzar" hace que comience la simulación (ingreso quintil). 

$(document).ready(function(){
  
  $("#Inicio").show();

  $("#boton_inicio").click(function(){
    $("#nombre").show();
    irA("nombre");
    $("#Inicio").hide();
  });


  $("#botonsi").click(function(){
      $("#nombre").hide();
      $("#grupoeconomico").show();
  });

  $("#botonno").click(function(){
      $("#nombre").hide();
      $("#apretarno").show();
  });

  $("#botoniniciar").click(function(){
      $("#apretarno").hide(); 
      $("#grupoeconomico").show();
  });


  
  //botones de quintiles:
  //Los siguientes botones hacen que la visualización de los quintiles desaparezca y sea reemplazada por los graficos del quintil correspondiente
  $("#botonquintil1").click(function(){
      $("#graficos").show();
      mostrarGrafico('I Quintil');
      $("#grupoeconomico").hide();
      
  });
  $("#botonquintil2").click(function(){
      $("#graficos").show();
      mostrarGrafico('II Quintil');
      $("#grupoeconomico").hide();
  });
  $("#botonquintil3").click(function(){
      $("#graficos").show();
      mostrarGrafico('III Quintil');
      $("#grupoeconomico").hide();
  });
  $("#botonquintil4").click(function(){
      $("#graficos").show();
      mostrarGrafico('IV Quintil');
      $("#grupoeconomico").hide();
  });
  $("#botonquintil5").click(function(){
      $("#graficos").show();
      mostrarGrafico('V Quintil');
      $("#grupoeconomico").hide();
  });
  
  //función para mostrar el mapa despues de los graficos
  $("#botonsig").click(function(){
      $("#graficos").hide(); 
      $("#titulomapa").show();
      $("#Mapa").show();

    
  });
});

//Funcion para que se muestre el grafico correspondiente al quintil seleccionado
function mostrarGrafico(quintil) {
  var selectGrafico = document.getElementById('ingresoYearSelect');
  selectGrafico.value = quintil;
  // Llamar a la función para actualizar el gráfico
  updateIngresoChart();
}


//funcion para obtener las descripciones de las comunas, adaptado de chat gpt
function showD(event, comuna) {
  var descripcion = document.getElementById('descripcion');
  var nombreComuna = document.getElementById('nombre-comuna');
  var descripcionComuna = document.getElementById('descripcion-comuna');

  //Para que el globito se esconda al apretar otra comuna
  if (descripcion.style.display === 'block' && nombreComuna.textContent === comuna) {
    return;
  }
  
  descripcion.style.display = 'none';
  

  //Para que muestre la descripcion
  nombreComuna.textContent = comuna;
  descripcionComuna.textContent = obtenerDescripcionComuna(comuna);

  descripcion.style.display = 'block';

  //Para que muestre el globito donde estaba el mouse
  var posX = event.clientX;
  var posY = event.clientY;

  descripcion.style.top = posY + 'px';
  descripcion.style.left = posX + 'px';
}


function obtenerDescripcionComuna(comuna) {
  // Aquí puedes definir las descripciones de cada comuna
  switch (comuna) {
    case 'Padre Hurtado':
      return 'Ingresos a: Pontificia Universidad Católica de Chile: 11, Universidad de Chile: 12, Universidad de Santiago de Chile: 24';
    case 'Maipú':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 142, Universidad de Chile: 245, Universidad de Santiago de Chile: 278';
    case 'Cerrillos':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 7, Universidad de Chile: 20, Universidad de Santiago de Chile: 25';
    case 'Estación Central':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 18, Universidad de Chile: 29, Universidad de Santiago de Chile: 56';
    case 'Pudahuel':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 14, Universidad de Chile: 24, Universidad de Santiago de Chile: 37';
    case 'Lo Prado':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 5, Universidad de Chile: 6, Universidad de Santiago de Chile: 7';
    case 'Cerro Navia':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 1, Universidad de Chile: 4, Universidad de Santiago de Chile: 12';
    case 'Santiago':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 223, Universidad de Chile: 477, Universidad de Santiago de Chile: 357';
    case 'Renca':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 19, Universidad de Chile: 39, Universidad de Santiago de Chile: 30';
    case 'Quinta Normal':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 12, Universidad de Chile: 30, Universidad de Santiago de Chile: 45';
    case 'Recoleta':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 23, Universidad de Chile: 35, Universidad de Santiago de Chile: 45';
    case 'Independencia':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 28, Universidad de Chile: 24, Universidad de Santiago de Chile: 30';
    case 'Quilicura':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 1, Universidad de Chile: 75, Universidad de Santiago de Chile: 84';
    case 'Conchalí':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 50, Universidad de Chile: 8, Universidad de Santiago de Chile: 12';
    case 'San Bernardo':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 53, Universidad de Chile: 72, Universidad de Santiago de Chile: 112';
    case 'El Bosque':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 35, Universidad de Chile: 31, Universidad de Santiago de Chile: 48';
    case 'La Cisterna':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 38, Universidad de Chile: 31, Universidad de Santiago de Chile: 68';
    case 'Lo Espejo':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 3, Universidad de Chile: 7, Universidad de Santiago de Chile: 14';
    case 'Pedro Aguirre Cerda':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 5, Universidad de Chile: 4, Universidad de Santiago de Chile: 14';
    case 'San Miguel':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 44, Universidad de Chile: 53, Universidad de Santiago de Chile: 60';
    case 'San Ramón':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 10, Universidad de Chile: 5, Universidad de Santiago de Chile: 12';
    case 'La Granja':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 10, Universidad de Chile: 13, Universidad de Santiago de Chile: 23';
    case 'San Joaquín':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 6, Universidad de Chile: 2, Universidad de Santiago de Chile: 17';
    case 'La Pintana':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 16, Universidad de Chile: 29, Universidad de Santiago de Chile: 44';
    case 'Providencia':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 278, Universidad de Chile: 334, Universidad de Santiago de Chile: 100';
    case 'Ñuñoa':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 130, Universidad de Chile: 223, Universidad de Santiago de Chile: 90';
    case 'La Reina':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 175, Universidad de Chile: 117, Universidad de Santiago de Chile: 25';
    case 'Macul':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 18, Universidad de Chile: 32, Universidad de Santiago de Chile: 24';
    case 'Puente Alto':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 167, Universidad de Chile: 177, Universidad de Santiago de Chile: 182';
    case 'Pirque':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 8, Universidad de Chile: 5, Universidad de Santiago de Chile: 2';
    case 'San José de Maipo':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 2, Universidad de Chile: 3, Universidad de Santiago de Chile: 6';
    case 'La Florida':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 151, Universidad de Chile: 141, Universidad de Santiago de Chile: 164';
    case 'Peñalolén':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 121, Universidad de Chile: 92, Universidad de Santiago de Chile: 44';
    case 'Las Condes':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 542, Universidad de Chile: 203, Universidad de Santiago de Chile: 36';
    case 'Vitacura':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 372, Universidad de Chile: 124, Universidad de Santiago de Chile: 11';
    case 'Lo Barnechea':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 324, Universidad de Chile: 93, Universidad de Santiago de Chile: 3';
    case 'Huechuraba':
      return 'Ingresos a la Pontificia Universidad Católica de Chile: 45, Universidad de Chile: 32, Universidad de Santiago de Chile: 13';
    
    default:
      return 'No se encontró información para la comuna especificada.';
  }
} 


//mapa calor:
//var dataPoints

//El siguiente código es la calculadora de quintil:
//(código adaptado de chat gpt)
//La siguiente función es permite definir el numerador y denominador como variables para calcular el quintil.
function calculateDivision() {
  var ingreso = parseFloat(document.getElementById('ingreso').value);
  var nrpersonas = parseFloat(document.getElementById('nrpersonas').value);
  //Después, se crea otra variable, la cual representa el resultado de esta división.
  var resultElement = document.getElementById('resultado');
//A continuación, se crean condiciones para asegurarse de obtener un resultado válido. Es decir, si se ingresan valores inválidos, arrojará un mensaje de error. 
  if (!isNaN(ingreso) && !isNaN(nrpersonas)) {
    var resultado = ingreso / nrpersonas;
    var roundedResult = Math.ceil(resultado);
//Lo siguiente hace que se reemplacen las comas por puntos para separar las cifras cada tres digitos.
    var formattedResult = roundedResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

//Lo que sigue es para juntar el texto que aparece por defecto con el resultado personalizado que generó el usuario.
    resultElement.textContent = 'Tu resultado: $' + formattedResult;
    resultElement.style.display = 'block';
  } else {
    resultElement.textContent = 'Por favor ingresa sólo números.';
    resultElement.style.display = 'block';
  }
}


