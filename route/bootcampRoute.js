const{getbootcamp,postbootcamp,putbootcamp,deletebootcamp} = require('../controller/bootcampController')

const route = require('express').Router()
const auth = require('../midleware/auth')

route.get('/',getbootcamp)

route.post('/',auth,postbootcamp)

route.put('/:id',auth,postbootcamp)

route.delete('/:id',deletebootcamp)

module.exports = route