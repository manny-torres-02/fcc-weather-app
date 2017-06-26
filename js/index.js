
var API_KEY = "4d4fa64149028409712cabd7de63ab95"

$(function() {
  //Geolocation api map key - USE IPinfo- THANKS!
  var loc 
  
  $.getJSON('https://ipinfo.io', function(d){
  console.log("assign the data")
     loc= d.loc.split(",")
    console.log(loc);
    
   var lat=loc[0]
   var lon=loc[1]
   //console.log(lat)
   //console.log(lon)
   
$.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/"+API_KEY+"/"+lat+","+lon+"/?exclude=minutely,daily?", function(wd) {
      console.log( "get data", wd);
      var currentLocation=wd.timezone;
      //console.log(currentLocation);
     var currentWeather=wd.currently.summary
      //console.log(currentWeather)
    var currentTemp=wd.currently.temperature
    //console.log(currentTemp);
   
    $(".location").html(currentLocation)
    $(".currentWeather").html(currentWeather)
  $(".currentTemp").html(currentTemp)

    
       
		//Skycons
		
  var iconRequest = wd.currently.icon;
			
			var icons = new Skycons({'color' : '#f26304'});
			
			var iconList = [
				"clear-day",
				"clear-night",
				"partly-cloudy-day",
				"partly-cloudy-night",
				"cloudy",
				"rain",
				"sleet",
				"snow",
				"wind",
				"fog"
			];		
			console.log(icons);
			for (i = 0; i < iconList.length; i++) {
				if (iconRequest == iconList[i]) {
						icons.set('icon', iconList[i]);
					
				}
			}
			icons.play();
  
  //Convert Fahrenheit to Celsius 
  var celsius= (currentTemp-32)*(5/9)
  var roundC= Math.round(celsius);
  var roundF=Math.round(currentTemp)
  console.log(currentTemp)
  console.log(roundC)
  //Toggle fahrenheit and celsius - conditionals 
  $("#toggle").on("click", function(){
    if ($(this).text() ==="Fahrenheit") 
      {
        $(".temp").html(roundC+"C")
        $(this).text("Celsius")
      }
    else 
      {$(".temp").html(roundF+"F");
      $(this).text("Fahrenheit");
      }
  })
}) 
});
})
 //IP info Api Access Token   05f14825a2763c