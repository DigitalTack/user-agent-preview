import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const userAgent = req.headers["user-agent"] || "Unknown User-Agent";

  fs.appendFileSync('user-agents.log', `${new Date().toISOString()} - ${userAgent}\n`);

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="User-Agent: ${userAgent}">
    </head>
    <body>
      <h1>The User-Agent is:</h1>
      <p>${userAgent}</p>
    </body>
    </html>
  `;
  res.send(htmlResponse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})