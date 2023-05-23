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
  //Los siguientes botones hacen que la visualización de los quintiles desaparezca y sea reemplazada por la selección de comuna.
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
      return 'Padre Hurtado es muy bonito. Es una comuna ubicada en la Región Metropolitana de Santiago, en Chile, conocida por sus hermosos paisajes y su rica historia.';
    case 'Maipú':
      return 'descripción';
    case 'Cerrillos':
      return 'descripción';
    case 'Estación Central':
      return 'descripción';
    case 'Pudahuel':
      return 'descripción';
    case 'Lo Prado':
      return 'descripción';
    case 'Cerro Navia':
      return 'descripción';
    case 'Santiago':
      return 'Santiago es la capital de Chile y una de las ciudades más grandes y desarrolladas de América del Sur.';
    case 'Renca':
      return 'descripción';
    case 'Quinta Normal':
      return 'descripción';
    case 'Recoleta':
      return 'descripción';
    case 'Independencia':
      return 'descripción';
    case 'Quilicura':
      return 'descripción';
    case 'Conchalí':
      return 'descripción';
    case 'San Bernardo':
      return 'descripción';
    case 'El Bosque':
      return 'descripción';
    case 'La Cisterna':
      return 'descripción';
    case 'Lo Espejo':
      return 'descripción';
    case 'Pedro Aguirre Cerda':
      return 'descripción';
    case 'San Miguel':
      return 'descripción';
    case 'San Ramón':
      return 'descripción';
    case 'La Granja':
      return 'descripción';
    case 'San Joaquín':
      return 'descripción';
    case 'La Pintana':
      return 'descripción';
    case 'Providencia':
      return 'descripción';
    case 'Ñuñoa':
      return 'descripción';
    case 'La Reina':
      return 'descripción';
    case 'Macul':
      return 'descripción';
    case 'Puente Alto':
      return 'descripción';
    case 'Pirque':
      return 'descripción';
    case 'San José de Maipo':
      return 'descripción';
    case 'La Florida':
      return 'descripción';
    case 'Peñalolén':
      return 'descripción';
    case 'Las Condes':
      return 'descripción';
    case 'Vitacura':
      return 'descripción';
    case 'Lo Barnechea':
      return 'descripción';
    case 'Huechuraba':
      return 'descripción';
    
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


