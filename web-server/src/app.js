const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

/*permite que voce defina um valor para uma determinada configuracao expressa
handlersbar nos permite a renderizacao de conteudo dinamico,somo capazes de configurar modelos
muito semelhantes aos documentos html, que podemos injetar valores especificos dentro de um nome de titulo de texto de ajuda
ou qualquer outra coisa que seu aplicativo precise.*/

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'William Henrique'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'William Henrique'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'me ajude porra',
    title: 'Help',
    name: 'William Henrique',
  })
})

// app.com
// quando uso app.use() esse cara de baixo não é mais utilizado
// app.get('', (req,res) => {
//   res.send('<h1>Weather</h1>')
// })

// app.com/help
// app.get('/help', (req,res) => {
//   res.send({
//     name: 'William',
//     age: 28
//   })
// })

// app.com/about
// app.get('/about', (req,res) => {
//   res.send('<h1>About</h1>')
// })

// app.com/weather
app.get('/weather', (req, res) => {
  //http://localhost:3000/weather?address=udia
  if (!req.query.address) {
    return res.send({
      error: 'No address found! Please enter a address.'
    })
  }
  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if (error)  return res.send({error})

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) return res.send({error}  )

      console.log(location, latitude, longitude)
      console.log(forecastData)
      res.send({
        address: req.query.address,
        forecast: forecastData,
        location: location,
        latitude,
        longitude,
      })
    })
  })
})

app.get('/products', (req, res) => {
  //http://localhost:3000/products?search=games&rating=6
  console.log('query', req.query);
  console.log('query', req.query.search);
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term.'
    })
  }
  res.send({
    products: []
  })
})

app.get('/isabela', (req, res) => {
  res.send({
    name: 'Isabela Scheicher',
    age: 26,
    descripton: 'Muito linda!'
  })
})

/*app.get('/help/!*', (req, res) => {
  res.send('Curinga do help!')
})*/

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: '404 help',
    errorMessage: 'Help article not found!',
  })
})

/*
app.get('*', (req, res) => {
  res.send('My 404 page!')
})
*/

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Will',
    errorMessage: 'Page not Found!'
  })
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

