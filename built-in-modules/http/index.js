const http = require('http')

const writeAndEnd = (res, resp) => {
  res.write(resp)
  res.end()
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    writeAndEnd(res, 'welcome to our home page')
    return
  }
  if (req.url === '/about') {
    writeAndEnd(res, 'welcome to know about us')
    return
  }

  writeAndEnd(res, `<h1>Oops!</h1>
    <p>something went wrong</p>
    <a href="/">go back to home page</a>`
  )
})

server.listen(5001)
