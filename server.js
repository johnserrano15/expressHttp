const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

// query string
app.get('/', (req, res) => {
  // res.status(200).send(`Hola mundo ${req.query.name || 'anónimo' } :)`)
  res.render('index', { title: 'Home', message: `Hola mundo ${req.query.name || 'anónimo' } :)` })
})

// get params
app.get('/authors/:author/:book', (req, res) => {
  res.status(200).send(`Author: ${req.params.author} libro: ${req.params.book}`)
})

// Get params + query string
app.get('/authors/:author', (req, res) => {
  res.status(200).send(`Author: ${req.params.author} libro: ${req.query.book}`)
})

app.get('*', (req, res) => {
  res.status(404).send('No found 404')
})

// request post
app.post('/response-poll', (req, res) => {
  console.log(req.body)
  res.status(200).send({
    message: 'Gracias por responder',
    data: `name: ${req.body.first_name} 
           last-name: ${req.body.last_name} 
           preference: ${req.body.preference}`
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
