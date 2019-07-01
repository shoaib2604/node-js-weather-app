const request=require('request')
const geocode=(address,callback)=>{
  url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+ '.json?access_token=pk.eyJ1Ijoic2hvYWliMjYwNCIsImEiOiJjanhlbWc2ejgwbzYyM3FsNzluOTI4aDJvIn0.HUWCkJ9cHc8VoLpotjVboQ&limit=1'
  request({url,json:true},(error,{ body })=>{
    if(error){
      callback('unable to connect to service',undefined)
    }else if (body.features.length===0) {
      callback('unable to find location try different',undefined)
    }else{
      callback(undefined,{
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name
      })
    }
  })
}
module.exports=geocode
