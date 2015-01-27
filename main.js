document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    
    var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
   
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
  
  }else{

    alert("Sorry, but your browser won't let us find you. You: 1, CIA:0")
  }
});

function reportPosition( position ){ 
  var output = document.querySelector("#output");
    
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var canvas = document.createElement("canvas");
    var outputDiv = document.createElement("div");
    outputDiv.setAttribute("id", "output");
    canvas.setAttribute("width", 400);
    canvas.setAttribute("height", 400);
    var context = canvas.getContext('2d');
    var staticImage = "https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=400x400&markers=color:blue|" + lat + "," + long + "&key=AIzaSyA8BTwbN0s9UfefqLk9vs32OSNJQz22Iag";
    
    document.body.appendChild(canvas);
    document.body.appendChild(outputDiv);
    
    var img = document.createElement("img");
   img.onload = function() {
    context.drawImage(img, 0, 0);
  };
  img.src = staticImage;
    
    
 var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"    
}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}