// window.addEventListener("load" ,function(){
//     let long;
//     let lat;
//         if(navigator.geolocation)
//         {
//             navigator.geolocation.getCurrentPosition(position=>{
//                 long=position.coords.longitude;
//                 lat=position.coords.latitude;
//                 const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=241f67e42359c8d39fdd7520b6e0b216`;
//             fetch(api)
//             .then(response =>{
//                 return response.json;
//             })
//             .then(data =>{
//                  const {}=data.
        
//           main.innerHTML = nameValue;
//           desc.innerHTML = `Description : ${descValue}`;
//           temp.innerHTML = `Temperature : ${tempValue} °C`;
//             });
//             });
//         }
    
//     });