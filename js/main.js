window.onload = function () {
    var southWest = L.latLng(37, -96.3), // crea la última esquina SW y NE del área visible
        northEast = L.latLng(40.8, -90.3),
        bounds = L.latLngBounds(southWest, northEast); // creo una variable que incluya las dos esquinas

    //initialize the map
    var map = L.map('base', { center: [39, -93.3], minZoom: 7, maxZoom: 13, maxBounds: bounds, zoom: 8 });
    //var map = L.map('base').setView([39, -93.3], 8);
    //add the basemap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function getColor(d) {
        if (d <= 3) { return '#ccffbb' }
        else if (d <= 6) { return '#18cd02' }
        else if (d <= 9) { return '#00ad00' }
        else if (d <= 12) { return '#51a2ff' }
        else if (d <= 15) { return '#0e6b56' }
        else if (d <= 18) { return '#a0d5f5' }
        else if (d <= 21) { return '#844e0e' }
        else if (d <= 24) { return '#31a9b8' }
        else if (d <= 27) { return '#ffff00' }
        else if (d <= 30) { return '#bf360c' }
        else if (d <= 33) { return '#f6d945' }
        else if (d <= 36) { return '#004040' }
        else if (d <= 39) { return '#1ea69a' }
        else if (d <= 42) { return '#7a5f5f' }
        else if (d <= 45) { return '#7d0552' }

        else { return '#000000' }
    }
    function getColor1(d) {
        if (d <= 3) { return '#00ff00' }
        else if (d <= 6) { return '#18cd02' }
        else if (d <= 9) { return '#ccffbb' }
        else if (d <= 12) { return '#00ad00' }
        else if (d <= 15) { return '#51a2ff' }
        else if (d <= 18) { return '#5c5c5c' }
        else if (d <= 21) { return '#a0d5f5' }
        else if (d <= 24) { return '#0e6b56' }
        else if (d <= 27) { return '#844e0e' }
        else if (d <= 30) { return '#f7d22b' }
        else if (d <= 33) { return '#2090ae' }
        else if (d <= 36) { return '#bf360c' }
        else if (d <= 39) { return '#31a9b8' }
        else if (d <= 42) { return '#ffff00' }
        else if (d <= 45) { return '#f6d945' }

        else { return '#000000' }
    }

    function getSize() {
        return Math.random() * 100
    }
    function getSize1() {
        return Math.random() * 10000
    }

    function style(feature) {
        return {
            fillColor: getColor(getSize(feature.properties.whStu11)),
            weight: 1,
            opacity: 1,
            color: 'orange',
            dashArray: '2',
            fillOpacity: .7

        }
    }

    function style2(feature) {
        return {
            fillColor: getColor1(getSize(feature.properties.whStu11)),
            weight: 1,
            opacity: 1,
            color: 'orange',
            dashArray: '2',
            fillOpacity: 1

        }
    }
    var a = L.geoJson(county, {
        style: style
    })

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({ color: 'orange', opacity: 1, weight: 2, fillOpacity: .95 })
    }


    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,

        });

        // create popup
        layer.bindPopup(
            "<strong> County Name: </strong>" + feature.properties.NAMELSAD10 + "<br />"
            + "<strong> Population: </strong>" + getSize(feature.properties.D02));
    }


    // var b = L.geoJson(county2, {
    //     pointToLayer: function (feature, latlng) {
    //         return L.circle(latlng, Math.random() * 10000 + 2000, style(feature));
    //     },
    //     onEachFeature: onEachFeature,


function style1(feature) {
        return {
            fillColor: getColor(getSize(feature.properties.D01)),
            weight: 0,
            opacity: 1,
            color: 'orange',
            dashArray: '0.0',
            fillOpacity: 0

        }
    }

    // }).addTo(map);

    var c = L.geoJson(county2, {
        pointToLayer: function (feature, latlng) {
            var circle = new L.Circle(latlng, getSize1(), style1(feature)).addTo(map);
            var rectangle = new L.Rectangle(circle.getBounds(), style2(feature)).addTo(map);
        }
    }).addTo(map);

    //get the current zoom level
    var zoom = map.getZoom();

    map.on('zoomend', function () {
        if (map.getZoom() > 8) {
            c.addTo(map);
            a.removeFrom(map);
        } else if (map.getZoom() < 8) {
            a.addTo(map);
            c.removeFrom(map);
        } else {
            c.addTo(map);
            a.addTo(map);
            
        }
    });

}

