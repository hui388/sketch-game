$(document).ready(function(){

  //populate board with squares
  for (i = 0; i < 256; i++){
    $('#board').append($('<div class="square"></div>'));}

  //Click to stop/start drawing
  $('#board').click(function() {
    if ($(this).hasClass('flag'))
      $(this).removeClass('flag');
    else {
      $(this).addClass('flag');
    }
  });


  //hover draw
  $('.square').mouseenter(function(){
    if (!($('#board').hasClass('flag')))

      $(this).css('background-color', 'pink');

  });

  $('#clear').click(function() {
    $('.square').css('background-color', 'turquoise');


  });

});
