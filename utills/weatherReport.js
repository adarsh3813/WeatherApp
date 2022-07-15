const request=require('postman-request');

const forecast=(longitude,latitude,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=metric&appid=1e5f89c5490fb589de8628f691d377bb';


    request({url:url,json:true},(error,responce)=>{
        if(error){
            callback("Unable to communicate with the server",undefined);
        }
        else if(responce.body.cod==400){
            callback('unable to find location',undefined);
        }
        else{
            callback(undefined,{
                description:responce.body.weather[0].description,
                currentTemp:responce.body.main.temp,
                feelsLike:responce.body.main.feels_like, 
            })
        }
    })
}

module.exports=forecast;