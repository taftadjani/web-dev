const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.card .details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new ForeCast();

const updateUI = data => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    // Destructures properties
    const { cityDets, weather } = data;

    // Update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    // Update the night/day & Icon image
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    let timeSrc = null;

    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);

    // Remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the ui with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if (localStorage.city) {
    forecast.updateCity(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}