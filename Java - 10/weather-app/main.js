async function fetchWeatherAsync() {
  hideCard('weather-card');
  hideCard('error');

  const inpCity = document.getElementById('inp-city');
  const city = inpCity.value.trim();
  const unit = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
  const url = 'https://api.openweathermap.org/data/2.5/weather?appid={YOUR_API_KEY}';

  // city === null || city === ''
  if (!city) {
    alert('Shkruani qytetin');
    return;
  }

  try {
    showSpinner();
    const requestUrl = `${url}&q=${city}&units=${unit}`;
    // console.log(requestUrl);
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error('Error failed to fetch data');
    }

    const data = await response.json();
    displayWeather(data);
    // console.log(data);
    // hideSpinner();
  } catch (e) {
    // console.log(e);
    showCard('error');
  } finally {
    hideSpinner();
  }
}

function displayWeather(data) {
  const cityName = document.getElementById('city-name');
  const currentTemp = document.getElementById('current-temp');
  const feelsLike = document.getElementById('feels-like');
  const maxTemp = document.getElementById('max-temp');
  const minTemp = document.getElementById('min-temp');
  const weatherDesc = document.getElementById('weather-desc');
  const weatherIcon = document.getElementById('weather-icon');

  const unit = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
  let unitText = '';
  if (unit === 'metric') {
    unitText = '℃';
  } else {
    unitText = '℉';
  }

  cityName.textContent = data.name;
  currentTemp.textContent = data.main.temp + unitText;
  feelsLike.textContent = data.main.feels_like + unitText;
  maxTemp.textContent = data.main.temp_max + unitText;
  minTemp.textContent = data.main.temp_min + unitText;
  weatherDesc.textContent = data.weather[0].description;

  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.src = iconUrl;
  weatherIcon.alt = data.weather[0].description;

  showCard('weather-card');
}

function hideCard(id) {
  const card = document.getElementById(id);
  card.classList.add('d-none');
}

function showCard(id) {
  const card = document.getElementById(id);
  card.classList.remove('d-none');
}

function showSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('d-none');
}

function hideSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.add('d-none');
}

document.getElementById('btn-search').addEventListener('click', fetchWeatherAsync);
document.getElementById('inp-city').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    fetchWeatherAsync();
  }
});
