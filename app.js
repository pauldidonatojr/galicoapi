const express = require('express')
const app = express()
const path = require('path')
const { restaurants, meals, products, people, gfm } = require('./data.js')
const port = 5000
// setup static and middleware
// app.use(express.static('./public'))
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
//     adding to static assets
//     SSR
// })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.get('/', (req, res) => {
//   res.json(gfm)
// })
app.set('json spaces', 3)
app.get('/', (req, res) => {
  res.send(
    `<div> <h1> Home Page </h1>

    <a href="/api/products"> products </a> </br>
     <a href="/api/gfm"> gfm </a> </br>
   <a href="/api/meals"> meals </a></br>

 <a href="/functions/airtable"> airtable </a>
     </div>`
  )
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  // const newProducts = products
  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const singleProduct = products.find((product) => product.id === 1)
  res.json(singleProduct)
})
app.get('/api/gfm', (req, res) => {
  // const newGFM = gfms.map((gfm) => {
  //   const { id, name, image } = product
  //   return { id, name, image }
  // })

  const newGFM = gfm[0]
  res.json(newGFM)
})
app.get('/api/meals', (req, res) => {
  // const newGFM = gfms.map((gfm) => {
  //   const { id, name, image } = product
  //   return { id, name, image }
  // })
  const newMeals = meals.map((meal) => {
    const { id, fields } = meal
    return { fields }
  })

  res.json(newMeals)
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
