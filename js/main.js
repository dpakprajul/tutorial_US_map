window.onload = function () {
    var southWest = L.latLng(37, -96.3), // crea la última esquina SW y NE del área visible
        northEast = L.latLng(40.8, -90.3),
        bounds = L.latLngBounds(southWest, northEast); // creo una variable que incluya las dos esquinas

    //initialize the map
    var map = L.map('base', { center: [39, -93.3], minZoom: 7, maxZoom:13,  maxBounds: bounds, zoom:8});

    //add the basemap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getColor(d){
if (d<=3) {return '#ccffbb'}
else if (d<=6) {return '#18cd02'}
else if (d<=9) {return '#00ad00'}
else if (d<=12) {return '#51a2ff'}
else if (d<=15) {return '#0e6b56'}
else if (d<=18) {return '#a0d5f5'}
else if (d<=21) {return '#844e0e'}
else if (d<=24) {return '#31a9b8'}
else if (d<=27) {return '#ffff00'}
else if (d<=30) {return '#bf360c'}
else if (d<=33) {return '#f6d945'}
else if (d<=36) {return '#004040'}
else if (d<=39) {return '#1ea69a'}
else if (d<=42) {return '#7a5f5f'}
else if (d<=45) {return '#7d0552'}

else {return '#000000'} }
function getSize(){
return Math.random()*100
}

function style(feature) {return {
    fillColor: getColor(getSize(feature.properties.whStu11)),
        weight: 1,
        opacity: 1,
        color: 'orange',
        dashArray: '2',
        fillOpacity: .8
  
}}

var a = L.geoJson(county, {
    style:style
}).addTo(map)

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({color: 'orange' , opacity:1, weight:2, fillOpacity:.95})
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


var b= L.geoJson(county2, {
    pointToLayer: function (feature, latlng) {
        return L.circle(latlng, Math.random()*10000+2000, style(feature));
      },
      onEachFeature:  onEachFeature,


      

    }).addTo(map);

}