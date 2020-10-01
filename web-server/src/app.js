const express = require('express')

const app = express()
// app.com
app.get('', (req,res) => {
  res.send('<h1>Weather</h1>')
})

// app.com/help
app.get('/help', (req,res) => {
  res.send({
    name: 'William',
    age: 28
  })
})

// app.com/about
app.get('/about', (req,res) => {
  res.send('<h1>About</h1>')
})

// app.com/weather
app.get('/weather', (req,res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Uberlandia'
  })
})

app.get('/isabela', (req,res) => {
  res.send({
    name: 'Isabela Scheicher',
    age: 26,
    descripton: 'Muito gostosa!'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})

