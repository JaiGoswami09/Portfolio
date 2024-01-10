// lode more

$(document).ready(function(){
    $(".loadmore").slice(2, 2).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".loadmore:hidden").slice(2, 2).slideDown();
      if($(".loadmore:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })

