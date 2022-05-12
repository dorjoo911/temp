function getWeather(id) {
  fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  )
    .then((result) => {
      return result.json();
    })
    .then((r) => {
      let data = JSON.parse(r.contents);
      //console.log(data);
      let today = data.consolidated_weather[0];
      document.getElementById("info").innerHTML += `
  Today's temprature ${data.title} city: ${today.min_temp} between ${today.max_temp}.<br>`;
    });
}

getWeather(2487956);
getWeather(44418);

async function getWeatherAsync(id) {
  const result = await fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  );

  const json = await result.json();
  data = JSON.parse(json.contents);
  //console.log(data);
  let today = data.consolidated_weather[0];
  document.getElementById("info").innerHTML += `
  async ::> Today's temprature ${data.title} city: ${today.min_temp} between ${today.max_temp}.<br>`;
}

getWeatherAsync(2487956);
getWeatherAsync(44418);
