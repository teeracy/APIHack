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
$(document).ready(function() {
    $('button').on('click', function() {
        console.log('hi');
        navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
        });
    
// var lat = 29.7600391;
// var lng = -95.3900965;

// query instagram API for photos nearby
        $.getJSON(configInstagram.apiUrl + 'v1/media/search?lat=' + lat + '&lng=' + lng + '&client_id=' + configInstagram.clientID + '&callback=?', function(data) {
            console.log(data)
            for (var i = 0; i < data.data.length; i++) {
                if ('image' == data.data[i]['type']) {
                console.log(data.data[i].location.name)
                }
            }
    // var d = data.data
        });
    });

// $('img').on('click', function() {
//     pull lat, lng, and location name from object
// });

// // query foursquare API for location ID using lat, lng, and location name
// $.getJSON(configFoursquare.apiURL + 'v2/venues/explore?ll=' + lat + ',' + lng + '&query=' + query + '&client_id=' + configInstagram.clientID, function(data) {
//     venueID = data['response']['groups'][0]['items']['venue']['id'];
// });

// // query foursquare API for photos of similar locations using venueID
// $.getJSON(configFoursquare.apiURL + 'v2/venues/' + venueID + '/photos' + '&client_id=' + configInstagram.clientID, function(data) {
//     venues = data['response']['photos']['items']['venue']['name'];
// });

});