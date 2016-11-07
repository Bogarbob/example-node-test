var express = require('express')
var router = express.Router()

router.get('/:userName', function (req, res) {
  var salute = "Get: " + req.param('salute')
  res.render('hello', { "m":"GET", "salute": salute, "userName": req.params.userName})
})
    .post('/:userName', function (req, res) {
        var salute = "Post: " + req.param('salute')
  res.render('hello', { "m":"POST", "salute": salute, "userName": req.params.userName})
})

module.exports = router