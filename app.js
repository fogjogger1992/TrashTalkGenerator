const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const port = 3000
const generateTrashTalk = require('./generate_trash_talk')

// express template engine, handlebars
app.engine('handlebars', exphbs({ drfaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))


// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/trashtalk', (req, res) => {
  const target = req.body.target
  const trashTalk = generateTrashTalk(target)
  res.render('index', { trashTalk })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})