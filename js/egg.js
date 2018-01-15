//Unicorn east egg
      var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
      //up, up, down, down, left, right, left, right, b, a, enter
$(document).keydown(function(e) {
  kkeys.push( e.keyCode ); //listening to keys pushed on the keyboard
  if ( kkeys.toString().indexOf( konami ) >= 0 ){ //looking for the specific key functions to make the easter egg work
    $(document).unbind('keydown',arguments.callee);
    $.getScript('http://www.cornify.com/js/cornify.js',function(){ //pulls the data from this website
      cornify_add(); //adds the data to the website
      $(document).keydown(cornify_add); //Anymore key actions adds more easter eggs
    });
  }
});
