var count = 0;

$(document).ready(function () {

$('#grid').on('click', function(){
playerSound.play();

})

  var connect = new Connect();
  connect.generateGrid(); 

    $('div').click(function () {
     
      var colclass = $(this).attr("class");
      
     

      var col = $('.' + colclass);
      
          count++;
          if (count % 2 === 1) {
            //1st player
           var activeclass = "player1"           
           
          }
          else
           {
            var activeclass = "player2" 
           
          }
      for (var i = 5; i >= 0; i--) {

      

        if (!$(col[i]).hasClass("player1") && !$(col[i]).hasClass("player2")) {
             $(col[i]).addClass(activeclass);
             var colid=$(col[i]).attr("id")
          
              winningconditions(colid,activeclass);
              
              break;
        }
      }

    });


/*

Left Diagonal 
  Do a -1, -1 on each coordinate until one of it reaches 0
  Add +1, +1 on each coordinates until one of it reaches 5. Record all these coordinates
  
Right Diagonal  
  Do a +1, -1 on each coordinate unit one of it reaches 5 or 0 
  Do a -1, +1 on each coordinate until one of it reaches 0 or 5. Record all these coordinates
  



*/




});

