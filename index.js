const geocode=require('./utils/geocode');
const forecast=require('./utils/weatherReport');
const process=require('process');
const argv=process.argv;


geocode(argv[2],(error,data)=>{
    if(error){
        return console.log("error");
    }

    forecast(data.longitude,data.latitude,(werror,weatherData)=>{
        if(werror){
            return console.log(error);
        }

        console.log(data.location);
        console.log(weatherData);
        
    })
    
})




