// Define the council member data
var councilMembers = [
  {
    district: "District 1",
    name: "Councilor Vanessa Hall-Harper",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27481",
    email: "vhallharper@tulsacouncil.org",
    phone: "918-596-1926"
  },
  {
    district: "District 2",
    name: "Councilor Jeanette Ward",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27485",
    email: "jward@tulsacouncil.org",
    phone: "918-596-1922"
  },
  {
    district: "District 3",
    name: "Councilor Crista Patrick",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27487",
    email: "cpatrick@tulsacouncil.org",
    phone: "918-596-1923"
  },
  {
    district: "District 4",
    name: "Councilor Kara Joy McKee",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27489",
    email: "kmckee@tulsacouncil.org",
    phone: "918-596-1964"
  },
  {
    district: "District 5",
    name: "Councilor Cass Fahler",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=28920",
    email: "cfahler@tulsacouncil.org",
    phone: "918-596-1925"
  },
  {
    district: "District 6",
    name: "Councilor Connie Dodson",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27483",
    email: "cdodson@tulsacouncil.org",
    phone: "918-596-1926"
  },
  {
    district: "District 7",
    name: "Councilor Lori Decter Wright",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27484",
    email: "ldecterwright@tulsacouncil.org",
    phone: "918-596-1921"
  },
  {
    district: "District 8",
    name: "Councilor Phil Lakin Jr.",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27486",
    email: "plakin@tulsacouncil.org",
    phone: "918-596-1924"
  },
  {
    district: "District 9",
    name: "Councilor Ben Kimbro",
    picture: "https://www.cityoftulsa.org/ImageRepository/Document?documentID=27488",
    email: "bkimbro@tulsacouncil.org",
    phone: "918-596-1927"
  }
];

// Define the district boundary data
var districtBoundariesUrl = "map.json";

// Initialize the map
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.1539823, lng: -95.992775 },
    zoom: 10
  });

  // Load the district boundaries
  var districtBoundariesLayer = new google.maps.Data();
  districtBoundariesLayer.loadGeoJson(districtBoundariesUrl);
  districtBoundariesLayer.setMap(map);

  // Add a click listener to the district boundaries layer
  districtBoundariesLayer.addListener("click", function(event) {
    var districtName = event.feature.getProperty("NAME");
    showCouncilMemberInfo(districtName);
  });
}

// Define the function to show council member info
function showCouncilMemberInfo(district) {
  // Find the council member for the selected district
  var councilMember = councilMembers.find(function(member) {
    return member.district === district;
  });

  // Display the council member's picture, email, and phone number on the webpage
  $("#picture").attr("src", councilMember.picture);
  $("#name").text(councilMember.name);
  $("#email").text(councilMember.email);
  $("#phone").text(councilMember.phone);
}

// Load the map when the page is loaded
$(document).ready(function() {
  initMap();
});
