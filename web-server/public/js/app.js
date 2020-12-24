const getPuzzle = () => {
  fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
      console.log('data: ', data);
    })
  })
}


const getWeather = locationIn => {
  // const address = 'Campinas'

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`http://localhost:3000/weather?address=${locationIn}`).then( res => {
    res.json().then( data => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error
        messageTwo.textContent = ''
      } else {
        console.log(`\n In ${data.location} is ${data.forecast}\n`)
        messageOne.textContent = ''
        messageTwo.textContent = `\n In ${data.location} is ${data.forecast}\n`
      }
    })
  }).catch(err => console.log(err))
}


console.log('Client side javascript file is loaded!');
// getWeather()
getPuzzle()

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', e => {
  e.preventDefault() //previne o comportamento padrao que é atualizar o navegador.
  const location = search.value
  // console.log('works!');
  getWeather(location)
})




