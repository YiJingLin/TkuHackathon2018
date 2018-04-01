// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24.96037 , lng: 121.3477283},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      map.setZoom(16) ; 
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var iconBase = 'https://maps.google.com/mapfiles/ms/micons/';
  var icons = {
    info: {
      name: 'Mission',
      icon: iconBase + 'info.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(25.1746031, 121.4502626),
      type: 'info' ,
      click : alert 
    },{
      position: new google.maps.LatLng(25.1761895, 121.4504242),
      type: 'info' ,
      click : alert 
    },{
      position: new google.maps.LatLng(25.1784193, 121.4470315),
      type: 'info' ,
      click : alert 
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    marker.addListener('click' , function(){
      $('#myModal').modal('show') ;
    }) ;
  });
  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

