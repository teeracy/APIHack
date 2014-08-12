// foursquare configuration
var configFoursquare = {
    clientID: 'DBDWTOGMYNPAJUL3Z3RHQCEQM5GQOEN0I5FOM43MQJYC2NHT',
    clientSecret: 'S0P34PETVGFCGVVUWIDSM2TYKQOA34TJ5KJMDOCD2EPME4NJ',
    authUrl: 'https://foursquare.com/',
    apiUrl: 'https://api.foursquare.com/',
    version: '20140208'
};

var lat = null;
var lng = null;
nearbyVenues = [];

$(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
        //query for local venues
        $.getJSON(configFoursquare.apiUrl + 'v2/venues/explore?ll=' + lat + ',' + lng + '&venuePhotos=1&sortByDistance=1&limit=50&client_id=' + configFoursquare.clientID + '&client_secret=' + configFoursquare.clientSecret + '&v=' + configFoursquare.version, function(data) {
            console.log(data);
            var items = data.response.groups[0].items;
            //loops through number of response
            for (var i = 0; i < items.length; i++) {
                //sorts out only response with photos
                if (items[i].venue.photos.groups.length > 0) {
                    //creates array of objects with relavent nearby venues
                    nearbyVenues.push(new NearbyVenue(items[i].venue));
                }
            }
            //runs through array length
            for (var i = 0; i < nearbyVenues.length; i++) {
                //appends picture to left-hand bar
                $('#nearby_pictures').append('<a data-id="' + i + '"><img class="photo" src= "' + nearbyVenues[i].photo + '"//> <div class="store_type">' + nearbyVenues[i].name + '<br>' + nearbyVenues[i].type + '</div></a>')
                //plots markers for nearby venues
                var myLatlng = new google.maps.LatLng(nearbyVenues[i].lat ,nearbyVenues[i].lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: nearbyVenues[i].name
                });
            }

            //lets user select photo
            $('a').on('click', function() {
                $('h1').hide();
                $('#similar_pictures').html('<header>Similar Venues</header>');
                //resets array of similar values
                // var similar = [];
                //grabs data associated with photo
                i = $(this).data('id');
                //queries for similar venues
                $.getJSON(configFoursquare.apiUrl + 'v2/venues/' + nearbyVenues[i].id + '/similar?client_id=' + configFoursquare.clientID + '&client_secret=' + configFoursquare.clientSecret + '&v=' + configFoursquare.version, function(data) {
                    var items = data.response.similarVenues.items;
                    console.log(data);
                    //loops through number of similar venue responses (should be 5)
                    for (var i = 0; i < items.length; i++) {
                        //queries for information on each venue
                        $.getJSON(configFoursquare.apiUrl + 'v2/venues/' + items[i].id + '?venuePhotos=1&client_id=' + configFoursquare.clientID + '&client_secret=' + configFoursquare.clientSecret + '&v=' + configFoursquare.version, function(data) {
                            console.log(data);
                            var venue = data.response.venue;
                            //sorts out only response with photos
                            if (venue.photos.groups.length > 0) {
                                //creates array of objects with relavent nearby venues
                                // similar.push(new SimilarVenue(venue))
                                //appends picture to left-hand bar
                                $('#similar_pictures').append('<a data-id="' + i + '" href="' + venue.shortURL + '"><img  class="photo" src= "' + venue.photos.groups[0].items[0].prefix + 'width250' + venue.photos.groups[0].items[0].suffix + '"//> <div class="store_type">' + venue.name + '</div></a>')
                            }
                        });
                    };
                    // setTimeout(function() {
                    //         //runs through array length
                    //         for (var i = 0; i < similar.length; i++) {
                    //             console.log('Hi')
                    //             //appends picture to left-hand bar
                    //             $('#similar_pictures').append('<a data-id="' + i + '" href="' + similar[i].shortURL + '""><img  class="photo" src= "' + similar[i].photo + '"//> <div class="store_type">' + similar[i].name + '</div></a>')
                    //         }
                    // }, 2000);
                });
            });
        });  
    });
});


function NearbyVenue (venue) {
    this.lat = venue.location.lat;
    this.lng = venue.location.lng;
    this.type = venue.categories[0].shortName;
    this.name = venue.name;
    this.id = venue.id;
    this.photo = venue.photos.groups[0].items[0].prefix + 'width250' + venue.photos.groups[0].items[0].suffix;
}

function SimilarVenue (venue) {
    this.url = "https://" + venue.shortURL;
    this.id = venue.id;
    this.name = venue.name;
    this.lat = venue.location.lat;
    this.lng = venue.location.lng;
    this.photo = venue.photos.groups[0].items[0].prefix + 'width250' + venue.photos.groups[0].items[0].suffix;
}
    

