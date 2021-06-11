//init and add map
function initMap() {
    // 45.2972379923624, -75.73281835865276
    const ottawa = {lat: 45.2972379923624, lng: -75.73281835865276};
    // map
    const map = new googlemMaps.Map(document.getElementById("map"), {
        zoom: 5,
        center: ottawa,
    });

    const marker = new google.maps.Marker({
        position: ottawa,
        map: map,
    });
}