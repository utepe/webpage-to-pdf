const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

router.get('/pdf', async (req, res) => {
    const link = req.query.link;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: 'networkidle0' });
    
    const pdf = await page.pdf({ 
        printBackground: true, 
        format: 'Letter',
        margin: {
            top: '20px',
            bottom: '40px',
            left: '20px',
            right: '20px'
        } 
    });
    
    await browser.close();

    res.contentType('application/pdf');
    res.send(pdf)
});

module.exports = router;
