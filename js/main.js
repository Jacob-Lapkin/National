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


$(function () {

    $('#yel-but').on('click', function(){
        $(this).closest('.input').remove();
      })

});