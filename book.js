var pages = $(".page");
var page = 0;

$(document).ready(function(){
  var i = 0;
  
  //console.log(pages.length);
  for (i=0; i<pages.length; i++) {
    //console.log($(pages[i]).attr("id"));
    $(pages[i]).css("z-index", pages.length - i);
    //console.log($(pages[i]).css("z-index"));
  }
  
});


$(".page").click(function(){
  if ($(this).hasClass("turned")) {
    if (page > 0) {
      $(pages[page - 1]).css("z-index", pages.length - page + 1);
    }
    page--;
  }
  else {
    if (page > 0) {
      $(pages[page - 1]).css("z-index", page - (pages.length - 1));
    }
    page++;
  }
  $(this).toggleClass("turned");
  //console.log(page);
});