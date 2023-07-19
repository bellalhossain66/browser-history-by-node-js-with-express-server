const express = require('express')
const app = express()
const browser = require('browser-detect')
const BrowserHistory = require('node-browser-history')
const { getAllHistory, getChromeHistory } = BrowserHistory

app.get('/', (req, res) => {
    let browser_r = browser(req.headers['user-agent'])
    console.log(browser_r)
    getAllHistory(10).then(function (history) {
        console.log(history)
    })
    getChromeHistory(10).then(function (history) {
        console.log(history);
    })
    res.send(browser_r)
})

app.listen(5999, () => {
    console.log('app is listening on  http://localhost:5999')
})