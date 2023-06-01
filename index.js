const express = require('express')
const { exec } = require('node:child_process')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/image', (req, res) => {
  const { scroll } = req.query;

  exec(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" "file:///Users/danielerrante/playground/image-resizer/screenshotter/index.html#${scroll}"`, (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err)
      return
    }
    console.log('output', output);
  });

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
