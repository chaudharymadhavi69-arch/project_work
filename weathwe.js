async function getWeather() {
  let city = document.getElementById("city").value.trim();
  let resultEl = document.getElementById("result");

  if (!city) {
    resultEl.innerHTML = "Please enter a city name.";
    return;
  }

  let apiKey ="09f0ce8af3fc098c9f3d18899621cc9a"; // <-- replace this with your own OpenWeatherMap API key
  if (!apiKey || apiKey === "09f0ce8af3fc098c9f3d18899621cc9a") {
    resultEl.innerHTML = "Please provide a valid OpenWeatherMap API key in weathwe.js.";
    return;
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (!response.ok) {
      resultEl.innerHTML = `Error: ${response.status} ${data.message || response.statusText}`;
      return;
    }

    resultEl.innerHTML =
      `Temperature: ${data.main.temp}°C <br>Weather: ${data.weather[0].main}`;
  } catch (err) {
    resultEl.innerHTML = `Network error: ${err.message}`;
  }
}

