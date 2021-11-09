// var ip-info = {
//     "ip": "8.8.8.8",
//     "location": {
//         "country": "US",
//         "region": "California",
//         "city": "Mountain View",
//         "lat": 37.40599,
//         "lng": -122.078514,
//         "postalCode": "94043",
//         "timezone": "-07:00",
//         "geonameId": 5375481
//     },
//     "domains": [
//         "0d2.net",
//         "003725.com",
//         "0f6.b0094c.cn",
//         "007515.com",
//         "0guhi.jocose.cn"
//     ],
//     "as": {
//         "asn": 15169,
//         "name": "Google LLC",
//         "route": "8.8.8.0/24",
//         "domain": "https://about.google/intl/en/",
//         "type": "Content"
//     },
//     "isp": "Google LLC"
// }

let ipRegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

window.addEventListener('load', GetData);
document.querySelector('form button').addEventListener('click', test);

function GetData() {
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_nm9p4QGGItAAZ69qY52TWtX4j1Jem')
    .then(response => response.json())
    .then(data => {
        let latLong = {
            latitude: data['location']['lat'],
            longitude: data['location']['lng']
        }
        CreateMap(latLong.latitude, latLong.longitude);
    });
}

function CreateMap(latitude, longitude) {
    var mymap = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=pR1I9vGqTvPB5LryUoBS', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
}

function DisplayData() {

}

function test(e) {
    e.preventDefault();
    if ((document.querySelector('form input').value).match(ipRegExp))
        console.log('correct')
    else
        console.log('fail');
} 

