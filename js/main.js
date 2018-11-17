$(document).ready(function() {

$('#rep').click(function() {
    $('#reputation').slideToggle();
  });
 $('#reputation').hide();

$('#eighty').click(function() {
     $('#nineteen').slideToggle();
   });
$('#nineteen').hide();

$('#color').click(function() {
      $('#red').slideToggle();
    });
$('#red').hide();

$('#speak').click(function() {
       $('#speaknow').slideToggle();
     });
$('#speaknow').hide();

switch ($(this).attr("div")) {
     case 0:
       $('#delicate').show();
       break;
     case 1:
       $('#wild').show();
       break;
     case 2:
       $('#two').show();
       break;
     case 3:
       $('#now').show();
       break;
   }


$('audio').each(function() {
    this.pause();
    this.currentTime = 0;
});
});
