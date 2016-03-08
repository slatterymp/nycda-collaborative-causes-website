


$( document ).ready(function() {
  

    $(".btn1" ).click(function() {	  
	  $( ".amount" ).val("7.50");	
	  $("#test").text("7.50" );
	})

    $(".btn2" ).click(function(){  
	  $( ".amount" ).val("30");
	  $("#test").text("$30" );
	});

	$(".btn3" ).click(function() {	  
	  $( ".amount" ).val("00");
	  
	});
  

	

});



//Google map

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);