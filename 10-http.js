const http = require('http')

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('welcome to our home page')
   } else if (req.url === '/about') {
      res.end('here is short history')
   } else
      res.end(`<h1>Oops!</h1>
   <p>We cant find page</p>
   <a href="/">Back home</a>`)
})

server.listen(5000)
