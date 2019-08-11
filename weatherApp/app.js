window.addEventListener('load',()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long  = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/9aaf510b991d567c054e0a1f0765416a/{$lat},{$long}`;
        
            $.getJSON(api, function (res) {

                var celsius = res.main.temp;
                var farenheit = (celsius * 1.8) + 32;

                var location = res.name;


                $('.weather-location').html(location);
                $('.temp').html(Math.floor(celsius));
                $('.weather-description').html(res.weather[0].description);
                $('.weatherType').attr('id', res.weather[0].main);
                $('.row2').on('click', function () {
                    if ($('.temp').html() == (Math.floor(celsius))) {
                        $('.temp').html(Math.floor(farenheit));
                        $('.temp-type').html('°F');

                    } else {
                        $('.temp').html(Math.floor(celsius));
                        $('.temp-type').html('°C');
                    }
                });


                
                var icons = new Skycons({
                    "color": "white"
                });

                icons.set("Clear-day", Skycons.CLEAR_DAY);
                icons.set("Clear-night", Skycons.CLEAR_NIGHT);
                icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("Clouds", Skycons.CLOUDY);
                icons.set("Rain", Skycons.RAIN);
                icons.set("Sleet", Skycons.SLEET);
                icons.set("Snow", Skycons.SNOW);
                icons.set("Wind", Skycons.WIND);
                icons.set("Fog", Skycons.FOG);
                icons.play();

            });
        });
    }
});