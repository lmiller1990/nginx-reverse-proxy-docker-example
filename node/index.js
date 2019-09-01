const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'hello from node' })
})

app.listen(3000, () => console.log('listening on 3000'))
