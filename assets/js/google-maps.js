// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 36.77456, lng: 8.11065 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
