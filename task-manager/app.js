const express = require('express')
const router = express.Router();
const app = express()

app.get('/hello', (req, res) => {
  res.send('task manager app')
})
const port = 3000
app.listen(port, console.log(`listening on ${port}`))
/*
app.get('/api/v1/tasks')       - get all the tasks
app.post('/api/v1/tasks')      - create a new tasks
app.get('/api/v1/tasks/:id')   - get single task
app.patch('/api/v1/tasks/:id)  - update task
app.delete('/api/v1/tasks/:id) - delete tasks
*/


