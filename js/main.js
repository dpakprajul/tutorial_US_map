window.onload = function () {
  var southWest = L.latLng(37, -96.3),
    northEast = L.latLng(40.8, -90.3);
    //bounds = L.latLngBounds(southWest, northEast);

  //initialize map
  var map = L.map("base", {
    center: [39.0, -93.3],
    measureControl: true,
    minZoom: 2,
    maxZoom: 13,
    zoom: 8,
  });

  //basemap definition
  L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | <a href="http://cartodb.com/attributions" title="CartoDB" target="_blank">CartoDB</a>',
    subdomains: ["a", "b", "c", "d", "e", "f"],
  }).addTo(map); //add to map

  L.control.scale().addTo(map);



//jquery to get the location of the user when locator buttom is clicked
$("#locator").click(function () {
  map.locate({ setView: true, maxZoom: 10 });
});
//show the radius of the location
function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng)  //marker
    .addTo(map)
    .bindPopup("You are within " + radius + " meters from this point")  
    .openPopup();

  L.circle(e.latlng, radius).addTo(map);  //circle
}
map.on("locationfound", onLocationFound);


  var circle = "PT";
  var year = "04";
  var schFill = "PT04";

  var previousZoom = 8;
  var currentZoom = 8;

  $(function(){
    $("#var2").selectmenu({
      change: function (event, ui) {
        sch = "stuSch" + $("#var2").val();

        layerHandler();
      },
    })
  });

  $(function(){
    $("#var1").selectmenu({
      change: function (event, ui) {
        layerHandler();
        $("#leg6").val(
          Math.random()*100+ "%"
        );
        $("#leg7").val(
          Math.random()*100+ "%"
        );
        $("#leg8").val(
          Math.random()*100+ "%"
        );
      },
    })
  });

  $("#admin").val("County Level");

  //create a list of five fruits
  var Ttext = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  //create a list of first letter of the five fruits
  var Tmenu = ["A", "B", "O", "M", "P"];

  //create a list of five animal
  var Ttext2 = ["Dog", "Cat", "Cow", "Horse", "Pig"];
  //create a list of first letter of the five animal
  var Tmenu2 = ["D", "C", "C", "H", "P"];
  
  //create a list of five birds
  var Ttext3 = ["Eagle", "Owl", "Parrot", "Pigeon", "Sparrow"];
  //create a list of first letter of the five birds
  var Tmenu3 = ["E", "O", "P", "P", "S"];

  function menuHandler(list, text) {
    $("#var1 option").each(function(index, option) {
      $(option).remove();
    });
    var options = [];
    options.push("<option value='A' selected = 'selected'>Select</option>");
    for (var i = 0; i < list.length; i++) {
      options.push("<option value='" + list[i] + "'>" + text[i] + "</option>");
    }
    $("#var1").append(options.join("")).selectmenu().selectmenu('refresh', true);
  }




    menuHandler(Tmenu, Ttext);
  function getColor(d) {
    if (d <= 3) {
      return "#ccffbb";
    } else if (d <= 6) {
      return "#18cd02";
    } else if (d <= 9) {
      return "#00ad00";
    } else if (d <= 12) {
      return "#51a2ff";
    } else if (d <= 15) {
      return "#0e6b56";
    } else if (d <= 18) {
      return "#a0d5f5";
    } else if (d <= 21) {
      return "#844e0e";
    } else if (d <= 24) {
      return "#31a9b8";
    } else if (d <= 27) {
      return "#ffff00";
    } else if (d <= 30) {
      return "#bf360c";
    } else if (d <= 33) {
      return "#f6d945";
    } else if (d <= 36) {
      return "#004040";
    } else if (d <= 39) {
      return "#1ea69a";
    } else if (d <= 42) {
      return "#7a5f5f";
    } else if (d <= 45) {
      return "#7d0552";
    } else {
      return "#000000";
    }
  }
  function getColor1(d) {
    if (d <= 3) {
      return "#00ff00";
    } else if (d <= 6) {
      return "#18cd02";
    } else if (d <= 9) {
      return "#ccffbb";
    } else if (d <= 12) {
      return "#00ad00";
    } else if (d <= 15) {
      return "#51a2ff";
    } else if (d <= 18) {
      return "#5c5c5c";
    } else if (d <= 21) {
      return "#a0d5f5";
    } else if (d <= 24) {
      return "#0e6b56";
    } else if (d <= 27) {
      return "#844e0e";
    } else if (d <= 30) {
      return "#f7d22b";
    } else if (d <= 33) {
      return "#2090ae";
    } else if (d <= 36) {
      return "#bf360c";
    } else if (d <= 39) {
      return "#31a9b8";
    } else if (d <= 42) {
      return "#ffff00";
    } else if (d <= 45) {
      return "#f6d945";
    } else {
      return "#000000";
    }
  }

  function getSize() {
    return Math.random() * 100;
  }
  function getSize1() {
    return Math.random() * 10000;
  }

  function style(feature) {
    return {
      fillColor: getColor(getSize(feature.properties.whStu11)),
      weight: 1,
      opacity: 1,
      color: "orange",
      dashArray: "2",
      fillOpacity: 0.2,
    };
  }

  function new_style(feature) {
    return {
      fillColor: getColor1(getSize(feature.properties.sch)),
      weight: 1,
      opacity: 1,
      color: "orange",
      dashArray: "2",
      fillOpacity: 0.2,
    };
  }


  function style2(feature) {
    return {
      fillColor: getColor1(getSize(feature.properties.whStu11)),
      weight: 1,
      opacity: 1,
      color: "orange",
      dashArray: "2",
      fillOpacity: 1,
    };
  }
   var a = L.geoJson(county, {
     style: style,
     onEachFeature: onEachFeature1,
   }).addTo(map);

   
  
  function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
      color: "orange",
      opacity: 1,
      weight: 2,
      fillOpacity: 0.95,
    });
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
    });

    // create popup
    layer.bindPopup(
      "<strong> County Name: </strong>" +
        feature.properties.NAMELSAD10 +
        "<br />" +
        "<strong> Population: </strong>" +
        getSize(feature.properties.D02)
    );
    layer.on("click", function (e) {
      var layer = e.target;
      //display(layer.toGeoJSON());
    }
      );

      $('#export').click(function(){
        var data = JSON.stringify(layer.toGeoJSON());
        var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "data.geojson");
      });

      function display(data){
        //display the data in the echarts library
        var myChart = echarts.init(document.getElementById('main'));
        var listItem = [];
  
        var item = data.properties.NAMELSAD10;
        var value= data.properties.school10;
        var item1 = data.properties.NAMELSAD10;
        var value1= data.properties.school12;
        var item2 = data.properties.NAMELSAD10;
        var value2= data.properties.school09;
        var item3 = data.properties.NAMELSAD10;
        var value3= data.properties.school08;
        var item4 = data.properties.NAMELSAD10;
        var value4= data.properties.school07;
  
  
        listItem.push({name: item, value: value});
        listItem.push({name: item1 + "1", value: value1});
        listItem.push({name: item2 + "2", value: value2});
        listItem.push({name: item3 + "3", value: value3});
        listItem.push({name: item4 + "4", value: value4});
  
  
        var option = {
          title: {
            text: 'County Population',
            subtext: 'Source: US Census',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [{
            data: listItem,
            type: 'line',
            radius: '50%',
  
          }],
          xAxis: {
            type: 'category',
            data: ['2010', '2011', '2012', '2013', '2014']
          },
          yAxis: {
            type: 'value'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
  
        };
        myChart.setOption(option);
      }
      function saveAs(blob, fileName) {
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      }
    
  
  }

  function onEachFeature1(feature, layer) {
   

    // create popup
    layer.bindPopup(
      "<strong> County Name: </strong>" +
        feature.properties.NAME10 +
        "<br />" +
        "<strong> Population: </strong>" +
        feature.properties.D02
    );
    data1 = [];
    //layer on click add the data from that county to the table
    layer.on("click", function (e) {
      var layer = e.target;
      var county = layer.feature.properties.NAME10;
      var area = layer.feature.properties.D02;
      //add the data to the table
      //  $("#table").append(
      //   "<tr><td>" +
      //      county +
      //      "</td><td>" +
      //      area +
      //      "</td></tr>"
      //  );
       //append county and area data to the data1 array
        data1.push({county: county, area: area});
        //display the data in the echarts library
        var myChart = echarts.init(document.getElementById('main'));
        var listItem = [];
        for (var i = 0; i < data1.length; i++) {
          var item = data1[i].county;
          var value= data1[i].area;
          listItem.push({name: item, value: value});
        }
        var option = {
          title: {
            text: 'County Population',
            subtext: 'Source: US Census',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [{
            data: listItem,
            type: 'line',
            radius: '50%',

          }],
          encode: { x: 'name', y: 'score' },
          xAxis: {
            type: 'category',
            data: data1.county
          },
          yAxis: {
            type: 'value'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }

        };
        myChart.setOption(option);



      //var data = JSON.stringify(layer.toGeoJSON());
      //display(layer.toGeoJSON());
    


      //export multiple layer to geojson on click
      $('#export').click(function(){
        var data = JSON.stringify(layer.toGeoJSON());
        var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "data.geojson");

        //on click on the map layer send the geojson to another function

      

    });
 
    function display(data){
      //display the data in the echarts library
      var myChart = echarts.init(document.getElementById('main'));
      var listItem = [];

      var item = data.properties.NAME10;
      var value= data.properties.D02;
      var item1 = data.properties.NAME10;
      var value1= data.properties.D03;
      var item2 = data.properties.NAME10;
      var value2= data.properties.D05;
      var item3 = data.properties.NAME10;
      var value3= data.properties.D07;
      var item4 = data.properties.NAME10;
      var value4= data.properties.D09;


      listItem.push({name: item, value: value});
      listItem.push({name: item1 + "1", value: value1});
      listItem.push({name: item2 + "2", value: value2});
      listItem.push({name: item3 + "3", value: value3});
      listItem.push({name: item4 + "4", value: value4});


      var option = {
        title: {
          text: 'County Population',
          subtext: 'Source: US Census',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [{
          data: listItem,
          type: 'line',
          radius: '50%',

        }],
        xAxis: {
          type: 'category',
          data: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
          type: 'value'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }

      };
      myChart.setOption(option);
    }

   //export the name and census area to txt file
    $('#convert').click(function(){
      var data = JSON.stringify(layer.feature.properties.NAME10 + " "+ layer.feature.properties.D02);
      var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "data.txt");
    });

    


    //define saveAs function but wait for all the layer
    function saveAs(blob, fileName) {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    }

  
  });

  }
  var b = L.geoJson(county2, {
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, getSize1(feature.properties.D01), Cstyle(feature));
    },
    onEachFeature: onEachFeature,
    style: style,
  });

  var c = L.geoJson(district, {
    style: style,
    onEachFeature: onEachFeature1,
  });



  
  function style1(feature) {
    return {
      fillColor: getColor(getSize(feature.properties.D01)),
      weight: 0,
      opacity: 1,
      color: "orange",
      dashArray: "0.0",
      fillOpacity: 0,
    };
  }

  // }).addTo(map);

  // var c = L.geoJson(county2, {
  //     pointToLayer: function (feature, latlng) {
  //         var circle = new L.Circle(latlng, getSize1(), style1(feature)).addTo(map);
  //         var rectangle = new L.Rectangle(circle.getBounds(), style2(feature)).addTo(map);
  //     }
  // }).addTo(map);

  //get the current zoom level
  var zoom = map.getZoom();
  function Cstyle(feature) {
    switch (circle) {
      case "level":
      case "title1":
      case "nonpub":
        return {
          fillColor: getColor(feature.properties[circle]),
          weight: 1,
          color: "white",
          fillOpacity: 0.7,
        };
        break;
      default:
        return {
          fillColor: getColor(feature.properties[schFill]),
          weight: 1,
          color: "white",
          fillOpacity: 0.7,
        };
        break;
    }
  }

  function layerHandler() {
    map.removeLayer(a);
    map.removeLayer(b);

    schFill = circle + year;
    //sch = "stuSch" + year;


    f = L.geoJson(county2, {
      pointToLayer: function (feature, latlng) {
        return L.circle(latlng, getSize1(feature.properties.D01), Cstyle(feature));
      },
      onEachFeature: onEachFeature,
    });
    d = L.geoJson(county, {style: new_style});
    map.addLayer(d);
    map.addLayer(f);
  }

  map.on("zoomend", function () {
    if (map.getZoom() > 8) {
    menuHandler(Tmenu2, Ttext2);
      
      map.removeLayer(a);
      map.removeLayer(b);
      $("#admin").val("District Level");
      c.addTo(map);
    } else if (map.getZoom() < 8) {
      menuHandler(Tmenu3, Ttext3);
      a.addTo(map);
      map.removeLayer(b);
      $("#admin").val("County Level");
      
    } else {
      menuHandler(Tmenu, Ttext);
      a.addTo(map);
      b.addTo(map);
      $("#admin").val("County Level");
    }
  });

  $(function () {
    $("#slider")
      .slider({
        value: 2004,
        min: 2004,
        max: 2014,
        step: 1,
        slide: function (event, ui) {
          $("#amount").val(ui.value - 1 + "-" + ui.value);
        },
      })
      .each(function () {
        var opt = $(this).data().uiSlider.options;
        var vals = opt.max - opt.min;
        for (var i = 0; i <= vals - 1; i++) {
          var el = $("<label>" + (i + opt.min) + "</label>").css(
            "left",
            (i / vals) * 100 + "%"
          );
          $("#slider").append(el);
        }
      });
    $("amount").val(
      $("#slider").slider("value") - 1 + "-" + $("#slider").slider("value")
    );
  });

  //slider handler for time change
  $("#slider").on("slidechange", function (event, ui) {
    year = String(ui.value).substring(2);
    layerHandler();
  });
  
  $("#slide").css("display", "initial");
  $("#cover").css("display", "none");


//upload a file from the user's computer and add it to the map
  $("#upload").on("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var text = e.target.result;
      upload = L.geoJson(JSON.parse(text), {
        style: style,
        onEachFeature: onEachFeature1,
      }).addTo(map);
    };
    reader.readAsText(file);
    //create a function to remove the upload data as well as reader file
    $("#remove").on("click", function () {
      map.removeLayer(upload);
      //remove text
      $("#upload").val("");
      //remove info
      $("#info").html("");
    }
    );


  });
  options = {
    position: 'topleft',            // Position to show the control. Values: 'topright', 'topleft', 'bottomright', 'bottomleft'
    unit: 'kilometres',             // Default unit the distances are displayed in. Values: 'kilometres', 'landmiles', 'nauticalmiles'
    useSubunits: true,              // Use subunits (metres/feet) in tooltips if distances are less than 1 kilometre/landmile
    clearMeasurementsOnStop: true,  // Clear all measurements when Measure Control is switched off
    showBearings: false,            // Whether bearings are displayed within the tooltips
    bearingTextIn: 'In',            // language dependend label for inbound bearings
    bearingTextOut: 'Out',          // language dependend label for outbound bearings
    tooltipTextFinish: 'Click to <b>finish line</b><br>',
    tooltipTextDelete: 'Press SHIFT-key and click to <b>delete point</b>',
    tooltipTextMove: 'Click and drag to <b>move point</b><br>',
    tooltipTextResume: '<br>Press CTRL-key and click to <b>resume line</b>',
    tooltipTextAdd: 'Press CTRL-key and click to <b>add point</b>',
                                    // language dependend labels for point's tooltips
    measureControlTitleOn: 'Turn on PolylineMeasure',   // Title for the Measure Control going to be switched on
    measureControlTitleOff: 'Turn off PolylineMeasure', // Title for the Measure Control going to be switched off
    measureControlLabel: '&#8614;', // Label of the Measure Control (Unicode symbols are possible)
    measureControlClasses: [],      // Classes to apply to the Measure Control
    showClearControl: false,        // Show a control to clear all the measurements
    clearControlTitle: 'Clear Measurements', // Title text to show on the Clear Control
    clearControlLabel: '&times',    // Label of the Clear Control (Unicode symbols are possible)
    clearControlClasses: [],        // Classes to apply to Clear Control
    showUnitControl: false,         // Show a control to change the units of measurements
    unitControlUnits: ["kilometres", "landmiles", "nauticalmiles"],
                                    // measurement units being cycled through by using the Unit Control
    unitControlTitle: {             // Title texts to show on the Unit Control
        text: 'Change Units',
        kilometres: 'kilometres',
        landmiles: 'land miles',
        nauticalmiles: 'nautical miles'
    },
    unitControlLabel: {             // Unit symbols to show in the Unit Control and measurement labels
        metres: 'm',
        kilometres: 'km',
        feet: 'ft',
        landmiles: 'mi',
        nauticalmiles: 'nm'
    },
    unitControlClasses: [],         // Classes to apply to the Unit Control
    tempLine: {                     // Styling settings for the temporary dashed line
        color: '#00f',              // Dashed line color
        weight: 2                   // Dashed line weight
    },          
    fixedLine: {                    // Styling for the solid line
        color: '#006',              // Solid line color
        weight: 2                   // Solid line weight
    },
    arrow: {                        // Styling of the midway arrow 
        color: '#000',              // Color of the arrow
    },
    startCircle: {                  // Style settings for circle marker indicating the starting point of the polyline
        color: '#000',              // Color of the border of the circle
        weight: 1,                  // Weight of the circle
        fillColor: '#0f0',          // Fill color of the circle
        fillOpacity: 1,             // Fill opacity of the circle
        radius: 3                   // Radius of the circle
    },
    intermedCircle: {               // Style settings for all circle markers between startCircle and endCircle
        color: '#000',              // Color of the border of the circle
        weight: 1,                  // Weight of the circle
        fillColor: '#ff0',          // Fill color of the circle
        fillOpacity: 1,             // Fill opacity of the circle
        radius: 3                   // Radius of the circle
    },
    currentCircle: {                // Style settings for circle marker indicating the latest point of the polyline during drawing a line
        color: '#000',              // Color of the border of the circle
        weight: 1,                  // Weight of the circle
        fillColor: '#f0f',          // Fill color of the circle
        fillOpacity: 1,             // Fill opacity of the circle
        radius: 6                   // Radius of the circle
    },
    endCircle: {                    // Style settings for circle marker indicating the last point of the polyline
        color: '#000',              // Color of the border of the circle
        weight: 1,                  // Weight of the circle
        fillColor: '#f00',          // Fill color of the circle
        fillOpacity: 1,             // Fill opacity of the circle
        radius: 3                   // Radius of the circle
    },
};
  L.control.polylineMeasure(options).addTo(map);
  map.on('measurefinish', function(evt) {
    writeResults(evt);
    $("#remove").on("click", function (evt) {
      //remove layer using target
      map.removeLayer(evt.target);
      //remove text

      
     
    $("#info").html("");
  } );

  });

  
  // function writeResults(results) {
  //   document.getElementById('info').innerHTML = JSON.stringify(
  //     {
  //       area: results.area,
  //       areaDisplay: results.areaDisplay,
  //       lastCoord: results.lastCoord,
  //       length: results.length,
  //       lengthDisplay: results.lengthDisplay,
  //       pointCount: results.pointCount,
  //       points: results.points
  //     },
  //     null,
  //     2
  //   );

//function writeResults to make a geojson from the clicked coordinates
function writeResults(results) {
  var geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        //create a geometry and type in accordance with the choosen coordinates
        geometry: {
          //choose type as polygon, line or point depending on the coordinates
          type: "Polygon",
          //just take the coordinate values from the results without lat and ln
          //take the key values from the results.points and store values in an array
          coordinates: [
            results.points.map(function (point) {
              return [point.lng, point.lat];
            })
          ]
        },
      },
    ],
  };
  var geojsonStr = JSON.stringify(geojson);
  var blob = new Blob([geojsonStr], {type: "text/plain;charset=utf-8"});
  console.log(geojsonStr);
  document.getElementById("info").innerHTML = geojsonStr;
  saveAs(blob, "geojson.geojson");
}
//save geojsonStr to file

  




    //save the results to a file
    // var data = JSON.stringify({
    //   area: results.area,
    //   areaDisplay: results.areaDisplay,
    //   lastCoord: results.lastCoord,
    //   length: results.length,
    //   lengthDisplay: results.lengthDisplay,
    //   pointCount: results.pointCount,
    //   points: results.points
    // },
    // null,
    // 2);
    // var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    // saveAs(blob, "results.json");

    function saveAs(geojsonStr, fileName) {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(geojsonStr);
      link.download = fileName;
      link.click();
    }


};


