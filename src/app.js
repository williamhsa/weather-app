const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Goal: Accept location via command line argument
const address = process.argv[2]

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error)  return console.log(error)

    forecast(latitude, longitude, (error, forecastData) => {
      if (error)  return console.log(error)

      console.log(location, latitude, longitude)
      console.log(forecastData)
    })
  })
}

/*

geocode('Uberlândia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data);
})


forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error forecast', error)
  console.log('Data forecast', data)
})

* */