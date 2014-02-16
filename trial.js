// instagram configuration
var configInstagram = {
    clientID: '367f129512724dabba9368ca50d234b1',
    clientSecret: '3fd6d764bd6f4008a4ecafa6db8d321e',
    authUrl: 'https://instagram.com/',
    apiUrl: 'https://api.instagram.com/'
};

// foursquare configuration
var configFoursquare = {
    clientID: 'DBDWTOGMYNPAJUL3Z3RHQCEQM5GQOEN0I5FOM43MQJYC2NHT',
    clientSecret: 'S0P34PETVGFCGVVUWIDSM2TYKQOA34TJ5KJMDOCD2EPME4NJ',
    authUrl: 'https://foursquare.com/',
    apiUrl: 'https://api.foursquare.com/'
};

// pull latitude and logitude
// add in error and options later
    //sample case
// navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     console.log(lat);
//     console.log(lng);
//     // localPictures(lat, lng);
// });


lat = 29.7600391;
lng = -95.3900965;

nearbyLocations = [];
// query instagram API for photos nearby
$(document).ready(function() {
$('button').on('click', function() {
    $.getJSON(configFoursquare.apiUrl + 'v2/venues/explore?client_id=' + configInstagram.clientID + '&client_secret=' + configInstagram.clientSecret + '&ll=' + lat + ',' + lng + '&callback=?', function(data) {
    // venues = data['response']['groups']['items']['venue']['name'];
    console.log(data)
    });

    // console.log('Hi')
    // $.getJSON(configInstagram.apiUrl + 'v1/media/search?count=100&distance=5000&lat=' + lat + '&lng=' + lng + '&client_id=' + configInstagram.clientID + '&callback=?', function(response) {
    //     console.log(response)
    //     for (var i = 0; i < response.data.length; i++) {
    //         if (response.data[i].type === 'image' && typeof response.data[i].location.name !== 'undefined') {
    //             nearbyLocations.push(new pictureData(response.data[i].location.latitude, response.data[i].location.longitude, response.data[i].location.name, response.data[i].images.low_resolution.url)
    //         )};   
    //     } 
    // filteredNearbyLocations = nearbyLocations.filter(function(elem, pos) {
    //     return nearbyLocations.indexOf(elem) == pos;
    // }); 
    //  console.log(filteredNearbyLocations);
    //  for (var i = 0; i < nearbyLocations.length; i++) {
    //     $('#nearby_pictures').append('<img src="' + response.data[i].images.low_resolution.url + '"//>' );
    //     };
    // }); 
});
});

function pictureData (lat, lng, location, image) {
    this.lat = lat;
    this.lng = lng;
    this.location = location;
    this.image = image;
}
    

// $('img').on('click', function() {
//     pull lat, lng, and location name from object
// });

// query foursquare API for location ID using lat, lng, and location name
// $.getJSON(configFoursquare.apiURL + 'v2/venues/explore?ll=' + lat + ',' + lng + '&client_id=' + configInstagram.clientID + '&callback=?', function(data) {
//     venueID = data['response']['groups'][0]['items']['venue']['id'];
// });

// query foursquare API for photos of similar locations using venueID

