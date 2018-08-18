
		var butto = document.getElementById("locate");
	// the below event listener is fired always, even without the user clicking or performing any action the alert is displayed
		butto.addEventListener('click', getLocation);

 function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latitude1 = position.coords.latitude; 
    var longitude1 = position.coords.longitude; 
	
var url="http://maps.googleapis.com/maps/api/geocode/json?latlng="+
        latitude1+","+longitude1+"&sensor=false";
    var xhr = createCORSRequest('POST', url);
           if (!xhr) {
             alert('CORS not supported');
           }
         
           xhr.onload = function() {
        
            var data =JSON.parse(xhr.responseText);
            
            if(data.results.length>0)
            {
            
            var locationDetails=data.results[0].formatted_address;
            var  value=locationDetails.split(",");
             document.getElementById("val").innerHTML= value[1];
            }
            else
            {
             document.getElementById("val").innerHTML=
               "No location available for provided details.";
            }
            
           };

           xhr.onerror = function() {
               alert('Woops, there was an error making the request.');
               
           };
        xhr.send();
}
var country,state,city,pinCode;
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}


function yoo()
{
	var value = document.getElementById("yooo").value;
	cordova.plugins.firebase.auth.verifyPhoneNumber(value).then( resu => {
    
		console.log(resu);
});
}

alert(localStorage.getItem("ServiceName"));