const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid')

// /trips
router.get('/', (req, res) => {
    res.render('trips',{trips:tripList});
})

router.get('/add-trip', (req, res) => {
    res.render('add-trip');
})

// Add a trip
router.post('/add-trip', (req, res) => {
    const title = req.body.title
    const departTrip = req.body.departTrip
    const returnTrip = req.body.returnTrip
    const image = req.body.image

    let trip = {title:title, departTrip:departTrip, returnTrip:returnTrip, image:image, id:uuidv4()}
    
    tripList.push(trip)
    res.redirect('/trips')
})

// Delete trip by id
router.post('/', (req, res) => {
    const id = req.body.id
    tripList = tripList.filter(trip => trip.id != id)
    res.redirect('/trips')
})

module.exports = router