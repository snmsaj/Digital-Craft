const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid')

// Route is /trips
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

// Set the values to the updates page
router.get('/:id', (req, res) => {
    const id = req.params.id
    const findId = tripList.find((trip) => trip.id == id);
    res.render('update-trip', {trip:findId})
})

// Update a trip
router.post('/:id', (req, res) => {
    const title = req.body.title
    const departTrip = req.body.departTrip
    const returnTrip = req.body.returnTrip
    const image = req.body.image
    const id = req.body.id

    let trip = tripList.find((trip) => trip.id == id)
    
    trip.title = title
    trip.departTrip = departTrip
    trip.returnTrip = returnTrip
    trip.image = image

    res.redirect('/trips')
})


module.exports = router