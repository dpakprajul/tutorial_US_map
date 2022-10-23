window.onload = function () {
  var southWest = L.latLng(37, -96.3),
    northEast = L.latLng(40.8, -90.3);
    //bounds = L.latLngBounds(southWest, northEast);

  //initialize map
  var map = L.map("base", {
    center: [39.0, -93.3],
    
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
        selected = $("#var1").val(); //get selected value
        layerHandler();
        $("#leg7").val(
          Math.random()*100 + "%"
        );
        $("#leg6").val(
          Math.random()*100 + "%"
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
  
  }

  function onEachFeature1(feature, layer) {
   

    // create popup
    layer.bindPopup(
      "<strong> County Name: </strong>" +
        feature.properties.NAME +
        "<br />" +
        "<strong> Population: </strong>" +
        feature.properties.CENSUSAREA
    );
    //layer on click add the data from that county to the table
    layer.on("click", function (e) {
      var layer = e.target;
      var county = layer.feature.properties.NAME;
      var area = layer.feature.properties.CENSUSAREA;
      //add the data to the table
      $("#table").append(
        "<tr><td>" +
          county +
          "</td><td>" +
          area +
          "</td></tr>"
      );
     
      //export multiple layer to geojson on click
      $('#export').click(function(){
        var data = JSON.stringify(layer.toGeoJSON());
        var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "data.geojson");

     


    });
   


   //export the name and census area to txt file
    $('#convert').click(function(){
      var data = JSON.stringify(layer.feature.properties.NAME + " "+ layer.feature.properties.CENSUSAREA);
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
      L.geoJson(JSON.parse(text), {
        style: style,
        onEachFeature: onEachFeature1,
      }).addTo(map);
    };
    reader.readAsText(file);
  });
 
  


};


