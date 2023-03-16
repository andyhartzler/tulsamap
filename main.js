const councilorData = [
  {
    district: '1',
    name: 'Vanessa Hall-Harper',
    photo: 'https://www.tulsacouncil.org/media/88087/vhh_2022_300x363.jpg',
    phone: '(918) 596-1921',
    email: 'dist1@tulsacouncil.org'
  },
  {
    district: '2',
    name: 'Jeannie Cue',
    photo: 'https://www.tulsacouncil.org/media/88112/jeannie-cue-2022_300x363.jpg',
    phone: '(918) 596-1922',
    email: 'dist2@tulsacouncil.org'
  },
  {
    district: '3',
    name: 'Crista Patrick',
    photo: 'https://www.tulsacouncil.org/media/88137/cp2022_300x363.jpg',
    phone: '(918) 596-1923',
    email: 'dist3@tulsacouncil.org'
  },
  {
    district: '4',
    name: 'Kara Joy McKee',
    photo: 'https://www.tulsacouncil.org/media/88162/kjm_2022_300x363.jpg',
    phone: '(918) 596-1924',
    email: 'dist4@tulsacouncil.org'
  },
  {
    district: '5',
    name: 'Mykey Arthrell-Knezek',
    photo: 'https://www.tulsacouncil.org/media/88187/ma-k_2022_300x363.jpg',
    phone: '(918) 596-1925',
    email: 'dist5@tulsacouncil.org'
  },
  {
    district: '6',
    name: 'Connie Dodson',
    photo: 'https://www.tulsacouncil.org/media/88212/cd_2022_300x363.jpg',
    phone: '(918) 596-1926',
    email: 'dist6@tulsacouncil.org'
  },
  {
    district: '7',
    name: 'Lori Decter Wright',
    photo: 'https://www.tulsacouncil.org/media/88237/ldw_2022_300x363.jpg',
    phone: '(918) 596-1927',
    email: 'dist7@tulsacouncil.org'
  },
  {
    district: '8',
    name: 'Phil Lakin',
    photo: 'https://www.tulsacouncil.org/media/88262/pl_2022_300x363.jpg',
    phone: '(918) 596-1928',
    email: 'dist8@tulsacouncil.org'
  },
  {
    district: '9',
    name: 'Ben Kimbro',
    photo: 'https://www.tulsacouncil.org/media/88287/bk_2022_300x363.jpg',
    phone: '(918) 596-1929',
    email: 'dist9@tulsacouncil.org'
  }
];

const map = L.map("map").setView([36.1540, -95.9928], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
  const councilor = getCouncilorInfo(feature.properties.DISTRICT);
  if (councilor) {
    const popupContent = `
      <h3>${councilor.name}</h3>
      <img src="${councilor.photo}" alt="${councilor.name}" width="100" />
      <p>
        Phone: ${councilor.phone}<br />
        Email: <a href="mailto:${councilor.email}">${councilor.email}</a>
      </p>
    `;
    layer.bindPopup(popupContent);
  }
}

function getCouncilorInfo(district) {
  return councilorData.find(councilor => councilor.district === district);
}

$.getJSON("tulsa_districts.geojson", function (data) {
  L.geoJSON(data, {
    onEachFeature: onEachFeature,
    style: function (feature) {
      return {color: feature.properties.COLOR};
    }
  }).addTo(map);
});

