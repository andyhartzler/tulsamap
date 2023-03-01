function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.1539823, lng: -95.992775 },
    zoom: 10
  });

  // Add the district boundaries to the map
  var districtBoundariesLayer = new google.maps.Data();
  districtBoundariesLayer.loadGeoJson("district_boundaries.geojson");
  districtBoundariesLayer.setMap(map);
}
