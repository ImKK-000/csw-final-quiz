const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 9999

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors())
  .listen(PORT)

let countries = [
  { id: 1, name: 'THAILAND' },
  { id: 2, name: 'CHINA' },
  { id: 3, name: 'FRANCE' },
]
const router = express.Router()

app.use('/api', router)

router.route('/countries')
  .get((req, res) => {
    res.json(countries)
  })
  .post((req, res) => {
    const { name } = req.body
    countries.push({
      id: countries.length + 1,
      name
    })
    res.json(countries)
  })

router.route('/countries/:country_id')
  .delete((req, res) => {
    const { country_id } = req.params
    delete countries[country_id - 1]
    res.json(countries)
  })
