const express = require('express')
const app = express()
app.use(express.static('./public'))
const port = 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
