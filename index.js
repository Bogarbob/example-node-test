const app = require('express')()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home', {title: "Hello World"})
})
  .post('/', (req, res) => {
  res.render('home', {title: "By World"})
})

var user = require('./user')
app.use('/user', user)
// app.get('/user/:userName', (req, res) => {
//   res.render('hello', req.params)
// })

app.listen(8080)
console.log('listening on port 8080')