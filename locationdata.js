var BarInfo = function() {

var Latitude ='51.535118'; 
var Longitude ='-0.139009';

//Insert code for 


function initialize() {
  var UserLocation = new google.maps.LatLng(Latitude, Longitude);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: UserLocation,
    zoom: 15
  });

  var request = {
    location: UserLocation,
    radius: 500,
    types: ['bar']
  };
  
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}


  
  function callback(results, status) {
  var bardata = [];
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
       bardata.push(results[i]);
	   console.log(bardata);
    };
  };
};
}();
module.exports = BarInfo
