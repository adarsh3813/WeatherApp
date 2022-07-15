const request=require('postman-request');


const geocode=(place,callback)=>{
    const cordinate='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(place)+'.json?access_token=pk.eyJ1IjoiYWpheS1wYW5kaXQiLCJhIjoiY2twNzIyeG1zMGM1OTJvcWVxODRkZmdkOSJ9.X2eUi06w_8hDtXQIn9IPxg'
    request({url:cordinate,json:true},(error,responce)=>{
        if(error){
            callback("Unable to communicate with the server",undefined);
        }
        else if(responce.body.features.length==0){
            callback("Please Enter a valid input",undefined)
        }
        else{
        const data=responce.body.features[0];
        callback(undefined,{
            location:data.place_name,
            longitude:data.center[0],
            latitude:data.center[1]
        })
        }
    })


}

module.exports=geocode;