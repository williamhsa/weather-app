const path = require('path')
const express = require('express')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
// permite que voce defina um valor para uma determinada configuracao expressa
// handlersbar nos permite a renderizacao de conteudo dinamico,somo capazes de configurar modelos
// muito semelhantes aos documentos html, que podemos injetar valores especificos dentro de um nome de titulo de texto de ajuda
// ou qualquer outra coisa que seu aplicativo precise.
app.set('view engine', 'hbs')
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
    helpText: 'me ajude porra'
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
    descripton: 'Muito linda!'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})

