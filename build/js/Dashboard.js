var map = null;

var geocoder = new google.maps.Geocoder();

var currentLoc = {
    center: {lat: 38.661148, lng: -9.203075},
    zoom: 18
};
var locations = [];
var reports;
var currentposition = "map";

var infowindow = new google.maps.InfoWindow();

google.maps.event.addDomListener(window, 'load', init());
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(38.6615119,-8.224454));
});


function init() {

    verifyIsLoggedIn();

    document.getElementById("searchLocation").onclick = searchLocation;
    document.getElementById("reportDashboard").onclick = fillReport;
    document.getElementById("logoutBut").onclick = logOut;
    document.getElementById('addReport').onclick = addReport;
    document.getElementById('mapButton').onclick = showMap;
    document.getElementById("perfilBut").onclick = showPerfil;
    document.getElementById("feedBut").onclick = showFeed;
    document.getElementById("espacinhoBut").onclick = showCantinho;
    document.getElementById("contactoBut").onclick = showContacto;
    document.getElementById("defBut").onclick = showDef;

    getMarkers("Caparica");



    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(38.6615119,-8.224454), // FCT

        // Disables the default Google Maps UI components
        disableDefaultUI: true,


        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');


// Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, currentLoc);

}

function getLocation() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            currentLoc = {
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
                zoom: 15
            };

        })
    }
    console.log(currentLoc);
    return currentLoc;
}

function searchLocation(){
    var address = document.getElementById('location').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
        } else {
            alert('A morada inserida não existe.');
        }
    });

    getMarkers(address);
}

function hideShow(element){

    console.log("Ola");
    if(currentposition === "map"){
        document.getElementById("map").style.display = "none";
        document.getElementById("searchBar").style.display = "none";
    }else if(currentposition === "report"){
        document.getElementById("reportForm").style.display = "none";
    }else if(currentposition === "cantinho"){
        document.getElementById("cantinhoId").style.display = "none";
    }else if(currentposition === "perfil"){
        document.getElementById("perfilId").style.display = "none";
    }else if(currentposition === "feed"){
        document.getElementById("feedId").style.display = "none";
    }else if(currentposition === "contactos"){
        document.getElementById("contactosId").style.display = "none";
    }else if(currentposition === "definicoes"){
        document.getElementById("definicoesId").style.display = "none";
    }

    if(element === "map"){
        document.getElementById("map").style.display = "block";
        document.getElementById("searchBar").style.display = "block";
        currentposition = "map";
    }else if(element === "report"){
        document.getElementById("reportForm").style.display = "block";
        currentposition = "report";
    }else if(element === "cantinho"){
        document.getElementById("cantinhoId").style.display = "block";
        currentposition = "cantinho";
    }else if(element === "perfil"){
        document.getElementById("perfilId").style.display = "block";
        currentposition = "perfil";
    }else if(element === "feed"){
        document.getElementById("feedId").style.display = "block";
        currentposition = "feed";
    }else if(element === "contactos"){
        document.getElementById("contactosId").style.display = "block";
        currentposition = "contactos";
    }else if(element === "definicoes"){
        document.getElementById("definicoesId").style.display = "block";
        currentposition = "definicoes";
    }

}

function fillReport(){
    hideShow('report');
}

function verifyIsLoggedIn(){
    console.log(localStorage.getItem('token'));
    fetch('https://hardy-scarab-200218.appspot.com/api/verifytoken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(function(response) {

            if (response.status !== 200) {

                window.location.href = "index.html";

            }

        }
    )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });



}

function logOut(){
    console.log(localStorage.getItem('token'));
    fetch('https://hardy-scarab-200218.appspot.com/api/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(function(response) {

            if (response.status === 200) {
                localStorage.removeItem('token');
                window.location.href = "index.html";

            }else{
                console.log("Tratar do Forbidden")
            }


        }
    )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });



}

function addReport(){
    var title = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var address = document.getElementById('address').value;

    var marker, i;

   geocoder.geocode( { 'address': address}, function(results, status) {

        if (status == 'OK') {
            locations.push([title, results[0].geometry.location.lat(), results[0].geometry.location.lng(), address, descricao]);
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                });


                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        var contentString = '<div id="content">'+
                            '<h1 style="font-family: Quicksand Bold; color:#AD363B; font-size:30px">'+ locations[i][0] +'</h1>'+ '<div>' +
                            '<p style="font-family: Quicksand Bold">'+'Localização' +'</p>'+ '<p>' + locations[i][3] + '</div>'+
                            '<div>' +
                            '<p style="font-family: Quicksand Bold">'+'Descrição' + '<p>' + locations[i][4] +'</p>'+ '</p>' +'</div>'+
                            '<div>'+
                            '<p style="font-family: Quicksand Bold">'+'Estado' +'</p>'+ '<p style="color:forestgreen">' + "OPEN" +
                            '</div>'+
                            '</div>';
                        infowindow.setContent(contentString);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
            showMap();

        } else {
            alert('A morada inserida não existe.');
        }
    });




}

function getMarkers(address){
    fetch('https://hardy-scarab-200218.appspot.com/api/report/getinlocation?location=' + address + '&offset=0&', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function(response) {

            if (response.status === 200) {
                response.json().then(function(data) {
                    reports = data;
                    console.log(reports);
                    fillMap(reports);
                });

            }else{
                console.log("Tratar do Forbidden")
            }


        }
    )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });

}

function fillMap(reports){
    var i, marker ;
    for(i = 0; i<reports.length; i++){
        var lat = reports[i].report_lat;
        var lng = reports[i].report_lng;

        console.log(lat + " " + lng);

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map
        });


        google.maps.event.addListener(marker, 'click', (function(marker, i) {

            return function() {
                var contentString = '<div id="content">'+
                    '<h1 style="font-family: Quicksand Bold; color:#AD363B; font-size:30px">'+ reports[i].report_title +'</h1>'+ '<div>' +
                    '<p style="font-family: Quicksand Bold">'+'Localização' +'</p>'+ '<p>' + reports[i].report_address + '</div>'+
                    '<div>' +
                    '<p style="font-family: Quicksand Bold">'+'Descrição' + '<p>' + reports[i].report_description +'</p>'+ '</p>' +'</div>'+
                    '<div>'+
                    '<p style="font-family: Quicksand Bold">'+'Estado' +'</p>'+ '<p style="color:forestgreen">' + reports[i].report_status +
                    '</div>'+
                    '</div>';
                infowindow.setContent(contentString);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function showMap(){
    hideShow('map');
}

function showPerfil() {
    hideShow('perfil');

}

function showFeed() {
    hideShow('feed');

}

function showCantinho() {
    hideShow('cantinho');

}

function showContacto() {
    hideShow('contactos');

}

function showDef() {
    hideShow('definicoes');

}



