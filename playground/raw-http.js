const http = require('http')

const latitude = -29.6771
const longitude = -51.1131

const url = `http://api.weatherstack.com/current?access_key=2389ca1cebb708e5a4db67f0110b176a&query=${latitude},${longitude}`

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })


  response.on('end', () => {
    console.log(data);
    const body = JSON.parse(data)
    console.log('aqui')
    console.log(body);
  })


})

request.on('error', (error) => {
  console.log('error', error)
})

request.end()


/*
response.on('data', chunk =>{})
 é uma função, que nos permite registrar um handler, first parameter é o nome do evento
 e um callback que sera acionado quando novos dados chegarem e obtemos acesso a esses dados
 só recebe um argumento 'chunck'


 response.on('end', chunk =>{}) : a saber quando a chamada ira terminar

 */