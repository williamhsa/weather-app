const request = require('postman-request')
// console.log('request', request);

const url = 'http://api.weatherstack.com/current?access_key=2389ca1cebb708e5a4db67f0110b176a&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) => {
  // console.log('response: ', response);
  // const data = JSON.parse(response.body)
  // console.log(data);
  // console.log('Current: ' + data.current.temperature);
  const {current} = response.body;
  const {temperature, feelslike, weather_descriptions} = current;
  console.log( weather_descriptions[0] + '. It is a currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
})

// Geocoding
// Address -> lat/long -> Weather

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2lsbGlhbXNjaGVpY2hlciIsImEiOiJja2ZsYzZ3anYxNTdyMnhxZWhodmdqMHVtIn0.mlF0L9YLl8eGGGBEL-5h9A'



request({url: url2, json: true}, (error, response) => {
  // console.log('response: ', response.body);
  const { features } = response.body
  const {center} = features[0];
  const latitude = center[1]
  const {center: centerLong} = features[0];
  const longitude = centerLong[0]
  console.log('latitude', latitude);
  console.log('longitude', longitude);
})
