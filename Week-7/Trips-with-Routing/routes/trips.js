const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid')

router.get('/', (req, res) => {
    res.render("index",{trips:tripList});
})

router.get('/add-trip', (req, res) => {
    res.render('add-trip');
})

router.post('/add-trip', (req, res) => {
    const title = req.body.title
    const departTrip = req.body.departTrip
    const returnTrip = req.body.returnTrip
    const image = req.body.image
    let trip = {title: title, departTrip: departTrip, returnTrip: returnTrip, image: image}
    
    tripList.push(trip)
    res.redirect('/')
})

module.exports = router