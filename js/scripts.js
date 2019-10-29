window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature__description');
  let temperatureDegree = document.querySelector('.temperature__degree');
  let locationTimezone = document.querySelector('.location__timezone');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';

      const api = `${proxy}https://api.darksky.net/forecast/db04e985a038ae9de74f3e8bfa49bdf7/${lat},${long}`;

    fetch(api)
    .then(response => {
      return response.json();
      })
      .then(data => {
        console.log(data);
        const {temperature, summary} = data.currently;
        // set ODM elements from api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
      });
    });

  }
});