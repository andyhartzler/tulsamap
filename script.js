// Initialize and add the map
function initMap() {
  // Set the coordinates for the center of the map
  const centerCoords = { lat: 36.1539, lng: -95.9925 };
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: centerCoords,
  });

  // Load the JSON data
  fetch("map.json")
    .then((response) => response.json())
    .then((data) => {
      // Loop through each feature in the GeoJSON data
      data.features.forEach((feature) => {
        // Extract the district number and name from the properties
        const district = feature.properties.DISTRICT;
        const name = feature.properties.NAME;

        // Create a new polygon for the district
        const districtPolygon = new google.maps.Polygon({
          paths: feature.geometry.coordinates,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });

        // Add a click event listener to the polygon
        districtPolygon.addListener("click", () => {
          // Show an info window with the district name
          const infoWindow = new google.maps.InfoWindow({
            content: `<h2>${name}</h2>`,
          });
          infoWindow.open(map, districtPolygon);
        });

        // Set the polygon on the map
        districtPolygon.setMap(map);
      });
    });
}
