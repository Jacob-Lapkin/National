// current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("current-date").innerHTML = today;


// Weather API
var button = document.querySelector('.btn')
        var inputValue = document.querySelector('.inputValue')
        var name = document.querySelector('.name');
        var desc = document.querySelector('.desc');
        var temp = document.querySelector('.temp');

        button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Yellowstone&units=imperial&appid=570830c0c8ec32c1824ab7c214e2493f')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            temp.innerHTML = tempValue + ' F';
            desc.innerHTML = descValue;
        })
        } )

//remove temperature button 
$(function () {

    $('#yel-but').on('click', function(){
        $(this).closest('.input').remove();
      })

});



  // Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 63.069, lng: -151.00};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });

    // The location of Rocky
    var uluru = { lat: 40.342, lng: -105.68};
    // The map, centered at Rocky
    var map = new google.maps.Map(document.getElementById("map1"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Rocky
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });

    // The location of Zion
    var uluru = { lat: 37.298, lng: -113.02};
    // The map, centered at Zion
    var map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Zion
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }





  
  