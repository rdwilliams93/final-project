var map;
var service;
var infowindow;

function initialize() {
  var UserLocation = new google.maps.LatLng(XXXXX,YYYYY);

  map = new google.maps.Map(document.getElementById('map'), {
      center: UserLocation,
      zoom: 15
    });

  var request = {
    location: UserLocation,
    radius: '500',
    types: ['bar']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}