const Express = require('express')
// import Express from 'express'

const app = new Express()

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
  console.log(`server has been starteed...on port ${PORT}`)  
})

app.get('/', (req, res) =>{
  res.end(`
  <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/test">Test</a></li>
      </ul>
  </nav>
    <h1>this is Home page</h1>
  </div>`)    
})

app.get('/about', (req, res) => {
  res.end(`
  <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/test">Test</a></li>
      </ul>
  </nav>
    <h1>this is About page</h1>
  </div>`)    
})

app.get('/test', (req, res) => {
  res.end(`
  <div>
    <nav>
      <ul>
        <li><a href="/">Test</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/test">Test</a></li>
      </ul>
  </nav>
    <h1>this is About page</h1>
  </div>`)    
})
