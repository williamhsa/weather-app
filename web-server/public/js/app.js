const getPuzzle = () => {
  fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
      console.log('data: ', data);
    })
  })
}


const getWeather = () => {
  const address = 'Campinas'
  fetch(`http://localhost:3000/weather?address=${address}`).then( res => {
    res.json().then( data => {
      console.log(`\n In ${data.location} is ${data.forecast}\n`)
    })
  }).catch(err => console.log(err))
}


console.log('Client side javascript file is loaded!');
getWeather()
getPuzzle()




