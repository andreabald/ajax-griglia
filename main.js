$(document).ready(function(){
  var quadratino = $('#template_quadratini').html();
  var template_quadratino_function = Handlebars.compile(quadratino);

  for(var i = 0; i < 36; i++){
    $('.griglia').append(quadratino);
  }

  $('.quadratino').click(function(){

    var quadrato_cliccato = $(this);

    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'get',
      success: function (data, stato) {

        var valore_quadratino = data.response;
        coloraQuadratino(quadrato_cliccato, valore_quadratino);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
    $(this).off();
  });
});

function coloraQuadratino(quadratino_scelto, numero){

  if(numero <= 5){
    quadratino_scelto.removeClass('green').addClass('yellow');
    quadratino_scelto.text(numero);
  }

  if(numero > 5){
    quadratino_scelto.removeClass('yellow').addClass('green');
    quadratino_scelto.text(numero);
  }
}
