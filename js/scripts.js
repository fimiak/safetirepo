$('.safetivid').click(function(e) {
    e.preventDefault();
    if ( $(".fourth").css("height") === "600px") {
  	$('.fourth').html('<iframe src="http://player.vimeo.com/video/110396153" width="100%" height="600px" frameborder="0"></iframe>');
  }
      if ( $(".fourth").css("height") === "450px") {
  	$('.fourth').html('<iframe src="http://player.vimeo.com/video/110396153" width="100%" height="450px" frameborder="0"></iframe>');
  }
      if ( $(".fourth").css("height") === "300px") {
  	$('.fourth').html('<iframe src="http://player.vimeo.com/video/110396153" width="100%" height="300px" frameborder="0"></iframe>');
  }
});

function playme() {
document.getElementById("youtube").src = 'http://player.vimeo.com/video/110396153';
}

$( ".video" ).click(function() {
  $( "div:hidden" ).show( "medium" );
});