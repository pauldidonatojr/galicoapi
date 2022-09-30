const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// setup static and middleware
app.use(express.static('./public'))
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
//     adding to static assets
//     SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.post()
// app.get()
// app.post()
