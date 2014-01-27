// pull latitude and logitude
// add in error and options later
// add in functionality for postal codes

// $('button').on('click', function() {
//     navigator.geolocation.getCurrentPosition(function(data) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.latitude;
//     console.log(lat)
//     });
// });
var lat = 29.7568;
var lng = -95.392778;

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

// query instagram API for photos nearby
$.getJSON(configInstagram.apiURL + 'v1/media/search?lat=' + lat + '&lng=' + lng + '&client_id=' + configInstagram.clientID, function(data) {
	localPictures = 
    // filter for photos that only have location names
});


// // take selected photo's lat, lng, and location name
// $('img').on('click', this, function() {

// });

// // query foursquare API for location ID using lat, lng, and location name for similar venues
// $.getJSON(configFoursquare.apiURL + 'v2/venues/explore?ll=' + lat + ',' + lng + '&query=' + query + '&client_id=' + configInstagram.clientID, function(data) {
//     venueID = data['response']['groups'][0]['items']['venue']['id'];
// });

// // query foursquare API for photos of similar locations using venueID
// // HOW DO I ACCESS PHOTOS?
// $.getJSON(configFoursquare.apiURL + 'v2/venues/' + venueID + '/photos' + '&client_id=' + configInstagram.clientID, function(data) {
//     venues = data['response']['photos']['items']['venue']['name'];
// });

// https://api.instagram.com/v1/media/3?&clien_id=367f129512724dabba9368ca50d234b1
