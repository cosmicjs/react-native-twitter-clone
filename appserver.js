const express = require('express')
const app = express()

app.use(express.static('App.js'))

const PORT = process.env.PORT || 1337
app.set('port', PORT)

const server = app.listen(
  PORT,
  () => {
    const { address, port } = server.address()
    const host = address === '::' ? 'localhost' : address
    const urlSafeHost = host.includes(':') ? `[${host}]` : host
    console.log(`Listening on http://${urlSafeHost}:${port}`)
  }
)

const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log(socket.id, ' connected')

  socket.on('new', () => {
    console.log('new post created');
  })

  socket.on('disconnect', () => {
    console.log(socket.id, ' disconnected')
  })
})
