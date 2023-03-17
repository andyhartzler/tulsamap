fetch('tulsa_districts.geojson')
  .then(response => response.json())
  .then(geojsonData => {
    const map = L.map('map').setView([36.153980, -95.992775], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const districtStyle = {
      color: '#3388ff',
      fillColor: '#3388ff',
      fillOpacity: 0.5,
      weight: 2
    };

    L.geoJSON(geojsonData, { style: districtStyle }).addTo(map);
  })
  .catch(error => console.error(error));
