const input = document.getElementById('place');
const btn = document.getElementById('btn');
const name = document.getElementById('name');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const visibility = document.getElementById('visibility');
const img = document.getElementById('img');
showWeather()

btn.addEventListener('click', showWeather);

function showWeather(){
	let place = input.value;
	let API_KEY = config.API_KEY;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`)
	.then(response => response.json())
	.then(data =>{
		name.innerText = data.name;
		temp.innerText = Math.floor(data.main.temp-273)+"°C";
		wind.innerText = "Wind: "+data.wind.speed+" mph";
		humidity.innerText = "Humidity: "+data.main.humidity+"%";
		pressure.innerText = "Pressure: "+data.main.pressure+" hPa";
		description.innerText = data.weather[0].description;
		visibility.innerText = "Visibility: "+Math.floor(data.visibility/1000)+" Km";
		img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

		if(data.weather[0].main == "Clear"){
			document.body.style.backgroundImage = "url('../Partials/bright.webp')"
		}else if(data.weather[0].main == "Rain"){
			document.body.style.backgroundImage = "url('../Partials/rain-drops.webp')"
		}else if(data.weather[0].main == "Thunderstorm"){
			document.body.style.backgroundImage = "url('../Partials/thunderstorm.webp')"
		}else if(data.weather[0].main == "Clouds"){
			document.body.style.backgroundImage = "url('../Partials/cloudy.webp')"
		}else if(data.weather[0].main == "Snow"){
			document.body.style.backgroundImage = "url('../Partials/snow.webp')"
		}
	})
	.catch(error => {throw new Error(error)})
}

