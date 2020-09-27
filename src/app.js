const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Uberlândia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data);
})


forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error forecast', error)
  console.log('Data forecast', data)
})

