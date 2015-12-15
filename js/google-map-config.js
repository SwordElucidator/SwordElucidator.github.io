
$(document).ready(function(){

  google.maps.event.addDomListener(window, 'load', initialize);
  function initialize() {

    var latlng = new google.maps.LatLng(37.8719034, -122.2607286);
    
    var mapOptions = {
      center: latlng,
      scrollWheel: false,
      zoom: 12
    };

    var marker = new google.maps.Marker({
      position: latlng,
      url: '/',
      animation: google.maps.Animation.DROP
    });

    var styles = [
      {
        stylers: [
          { hue: "#00ffe6" },
          { saturation: -20 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.setOptions({styles: styles});

    
    marker.setMap(map);

  };
});
