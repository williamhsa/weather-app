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

