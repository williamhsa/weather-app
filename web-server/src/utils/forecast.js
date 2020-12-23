const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2389ca1cebb708e5a4db67f0110b176a&query=${latitude},${longitude}`
  request({url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to to weather service!')
    } else if (response.body.error) {
      callback(response.body.error.info)
    } else {
      const {current} = response.body
      const {temperature, feelslike, weather_descriptions} = current
      callback(undefined, weather_descriptions[0] + '. It is a currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
    }
  })
}

module.exports = forecast