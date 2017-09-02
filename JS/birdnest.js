function initMap() {
  var uluru = {lat: 37.8384156, lng: -122.3050499};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}