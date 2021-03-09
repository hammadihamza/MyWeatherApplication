let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');
                




button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&lang=ar&units=metric&appid=241f67e42359c8d39fdd7520b6e0b216')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      main.innerHTML = nameValue;
      desc.innerHTML = `Description : ${descValue}`;
      temp.innerHTML = `Temperature : ${tempValue} °C`;
      input.value ="";
 
    })
    
    .catch(err => alert("Invalid city name!"));
    })