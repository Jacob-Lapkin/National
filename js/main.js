// current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("current-date").innerHTML = today;



//temperature yellowstone
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=570830c0c8ec32c1824ab7c214e2493f&units=imperial')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(data =>  {
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var iconValue = data['weather'][0]['icon']


    console.log(data)
    temp.innerHTML = tempValue + ' F';
    desc.innerHTML = descValue;
    document.getElementById('temp-icon').innerHTML = '<img src="http://openweathermap.org/img/w/' + iconValue + '.png"/>';
  })

  //temperature 





  // Initialize and add the map
function initMap() {
    // STARTING ALASKA
    // The location of Denali
    var denali = { lat: 63.069, lng: -151.00};
    var gates = { lat: 67.88, lng: -153.18};
    var glacier = { lat: 58.66, lng: -136.9};
    var katmai = { lat: 58.61, lng: -155.06};
    var kenai = { lat: 59.84, lng: -150.18};
    var kobuk = { lat: 67.33, lng: -159.12};
    var lake = { lat: 60.41, lng: -154.32};
    var wrangell = { lat: 61.7, lng: -142.98};

    // The map, centered at Denali
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: denali,
    });
    // The marker, positioned at Denali
    var marker = new google.maps.Marker({
      position: denali,
      map: map,
    });

    var marker1 = new google.maps.Marker({
      position: gates,
      map: map,
    });

    var marker2 = new google.maps.Marker({
      position: glacier,
      map: map,
    });

    var marker3 = new google.maps.Marker({
      position: katmai,
      map: map,
    });

    var marker4 = new google.maps.Marker({
      position: kenai,
      map: map,
    });

    var marker5 = new google.maps.Marker({
      position: kobuk,
      map: map,
    });

    var marker6 = new google.maps.Marker({
      position: lake,
      map: map,
    });

    var marker7 = new google.maps.Marker({
      position: wrangell,
      map: map,
    });

    // STARTING California
    // The location of Denali
    var seq = { lat: 36.48, lng: -118.56};
    var channel = { lat: 34.00, lng: -119.77};
    var death = { lat: 36.5, lng: -117.07};
    var josh = { lat: 33.87, lng: -115.9};
    var kings = { lat: 36.88, lng: -118.55};
    var lassen = { lat: 40.49, lng: -121.4};
    var pin = { lat: 36.49, lng: -121.18};
    var red = { lat: 41.21, lng: -124.00};
    var yos = { lat: 37.86, lng: -119.53};


    // The map, centered at Denali
    var map = new google.maps.Map(document.getElementById("map3"), {
      zoom: 4,
      center: seq,
    });
    // The marker, positioned at Denali
    var marker = new google.maps.Marker({
      position: seq,
      map: map,
    });

    var marker1 = new google.maps.Marker({
      position: channel,
      map: map,
    });

    var marker2 = new google.maps.Marker({
      position: death,
      map: map,
    });

    var marker3 = new google.maps.Marker({
      position: josh,
      map: map,
    });

    var marker4 = new google.maps.Marker({
      position: kings,
      map: map,
    });

    var marker5 = new google.maps.Marker({
      position: lassen,
      map: map,
    });

    var marker6 = new google.maps.Marker({
      position: pin,
      map: map,
    });

    var marker7 = new google.maps.Marker({
      position: red,
      map: map,
    });

    var marker7 = new google.maps.Marker({
      position: yos,
      map: map,
    });


    //STARTING COLORADO
    // The location of Rocky
    var rocky = { lat: 40.342, lng: -105.68};
    // The map, centered at Rocky
    var map = new google.maps.Map(document.getElementById("map1"), {
      zoom: 4,
      center: rocky,
    });
    // The marker, positioned at Rocky
    var marker = new google.maps.Marker({
      position: rocky,
      map: map,
    });

    // The location of Zion
    var zion = { lat: 37.298, lng: -113.02};
    // The map, centered at Zion
    var map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 4,
      center: zion,
    });
    // The marker, positioned at Zion
    var marker = new google.maps.Marker({
      position: zion,
      map: map,
    });
  }





  
  