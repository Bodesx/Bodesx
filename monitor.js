//One day I'll get around the the JS part of this...
window.onload = function(){
  var content 	 = [
    ["cd C:", "C: > "],
    ["dir", "11/04/2015  15:47    <DIR>          Downloads\n10/08/2014  12:32    <DIR>          Favorite\n28/03/2015  16:54    <DIR>          Links\n10/08/2014  12:32    <DIR>          Music\n20/03/2015  22:34    <DIR>          PhpstormProjects\n14/03/2015  14:01    <DIR>          Picture\nC: > "],
    ["mk dir holding_folder", "<folder holding_folder created>\nC: > "]
  ];

  var screen 		 = document.getElementById('screen')

  var active     = true;
  var current    = 0;
  var command  	 = content[current][0];
  var response	 = content[current][1];
  var typed			 = 0;
  
  function type(){
      var total   = command.length;

      if( total == typed ){
        console.log('Command finished');
        
        //Echo the command response
        screen.innerHTML = screen.innerHTML + "<br>" + escapeHtml(response);
        
        //Get a new command
        current 	 = Math.floor(Math.random() * content.length);
        command  	 = content[current][0];
        response	 = content[current][1];
        //Reset the character countet
        typed			 = 0;

        setTimeout(function() { type(); }, 1000);
      } else {

        var new_letter   = command.charAt( typed );
        var new_content  = screen.innerHTML + new_letter;
        screen.innerHTML = new_content;

        typed += 1;

        setTimeout(function() { type(); }, Math.floor(Math.random() * (400 - 100 + 1) + 100));
      }
  }

  type();
}

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}