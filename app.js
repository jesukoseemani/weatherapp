const storage = new Storage();

const loadStorage = storage.getStorage()

const weather = new Weather(loadStorage.city,loadStorage.state);
const ui = new UI();


document.querySelector('.btn-primary').addEventListener('click', (e) => {
 const city = document.getElementById('city').value.toLowerCase();
 const state = document.getElementById('state').value.toLowerCase();

 weather.changeLocation(city,state);


 storage.setStorage(city,state)
 
 loadWeather();

$('.modal').modal('hide')



  e.preventDefault();
})

document.addEventListener('DOMContentLoaded', loadWeather);

function loadWeather(){
weather.getWeather()
.then(data => {
  ui.paint(data);
})
.catch(err => console.log(err));
}
