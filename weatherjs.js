let weather={
    apiKey:"b74fd8d74261fcea03e710fb4fd6b31e",
    fetchweather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey).then((response)=>response.json())
        .then((data)=>this.displayweather(data));
    },
    displayweather:function(data)
    {
         const{name}=data;
         const{icon,description}=data.weather[0];
         const{temp,humidity}=data.main;
         const{speed}=data.wind;
         document.querySelector(".city").innerText="weather in "+name;
         document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon+"@2x.png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity :"+humidity+"%";
        document.querySelector(".wind").innerText="Wind speed:"+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    
    
    search:function(){
    this.fetchweather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
        weather.search();
    }
});
document.fetchweather("tokya");