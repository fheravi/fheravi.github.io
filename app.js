$(function(){

  $(".toggle-btn").click(function(){
    	$("#nav").toggleClass('hide none');
    	$(".toggle-btn").toggleClass('none change');
      $("h1").toggleClass('none fade-out');
	});

  $("nav li").click(function(){
    $("#nav").toggleClass('hide none');
    $(".toggle-btn").toggleClass('none change');
    $("h1").toggleClass('none fade-out');
  });

});
