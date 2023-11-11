const request = require('postman-request')

const geocode = (address, callback) => {
  // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoid2lsbGlhbXNjaGVpY2hlciIsImEiOiJja2ZsYzZ3anYxNTdyMnhxZWhodmdqMHVtIn0.mlF0L9YLl8eGGGBEL-5h9A`
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoid2lsbGlhbXNjaGVpY2hlciIsImEiOiJja2ZsYzZ3anYxNTdyMnhxZWhodmdqMHVtIn0.mlF0L9YLl8eGGGBEL-5h9A`

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to to weather service!')
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.')
    } else {
      const {features} = response.body
      const {center, place_name} = features[0]
      const {center: centerLong} = features[0]
      callback(undefined, {
        latitude: center[1],
        longitude: centerLong[0],
        location: place_name
      })
    } 
  })

}

module.exports = geocode

