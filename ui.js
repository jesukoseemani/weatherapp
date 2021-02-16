class UI{
  constructor(){
    this.location = document.querySelector('#location');
    this.atmosphere = document.querySelector('#atmosphere');
    this.temperature = document.querySelector('#temperature');
    this.image = document.querySelector('#icon');
    this.humidity = document.querySelector('#humidity');
    this.feelslike = document.querySelector('#feels-like');
    this.wind = document.querySelector('#wind');
    this.dewpoint = document.querySelector('#dew-point');
  }

  paint(data){
    this.location.textContent = data.display_location.full;
    this.atmosphere.textContent = data.weather;
    this.temperature.textContent = data.temperature_string;
    this.image.setAttribute('src', data.icon_url);
    this.humidity.textContent = `Relative Humidity: ${data.relative_humidity}`;
    this.feelslike.textContent =`Feels Like: ${weather.feelslike_string}` 
    this.wind.textContent = `DewPoint: ${weather.dewpoint_string}`
    this.dewpoint.textContent =`Wind: ${weather.wind_string}` 

  }
}