function initMap() {
    // Map options .. .
    var options = {
        zoom: 8,
        center: { lat: 25.3176, lng: 82.9739 }
    }
    // new map here . . .. . 
    var map = new google.maps.Map(document.getElementById('map'), options);

    // adding marker here . . . .

    // Listining for clicks on maps
    google.maps.event.addListener(map,'click',
    function(event){
        marking({coords:event.latLng});
    });

    var markerStorage = [{
        coords: { lat: 25.3176, lng: 82.9739 },
        content: '<h1> mera Area hai </h1>'
    },

    {
        coords: { lat: 25.4358, lng: 81.8463 },
        content: '<h1> aur yeh bhi mera Area hai </h1>'
    },

    {
        coords: { lat: 26.4388, lng: 81.8463 },
        content: '<h1> yeh bhi mera Area hai </h1>'
    }

    ];

    markerStorage.forEach(function(content){
        marking(content);
    });

    //markerStorage.forEach(content=>{marking(content)});


    function marking(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: ''
        });
        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }

    }

}