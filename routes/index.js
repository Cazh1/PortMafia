const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
/*
const range = document.querySelector('input[type="range"]');
    const percent = document.querySelector('#percent');
    range.addEventListener('input', function(event) {
        percent.textContent = `${event.currentTarget.value}%`;
        document.documentElement.style.setProperty('--distance', `${event.currentTarget.value}%`);
    })
*/

module.exports = router