const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/result', (req, res) => {
  const getResult = async () => {
    const URL = 'https://www.google.com/search?q=megasena'
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(URL)
    
    const result = await page.evaluate(() => {
      const values = []
      document.querySelectorAll('.zSMazd.UHlKbe')
        .forEach(e => values.push(e.innerHTML))

      return values
    })
    await browser.close()
    res.json({values: result})
    
  }

  getResult()
})

app.listen(3333)
