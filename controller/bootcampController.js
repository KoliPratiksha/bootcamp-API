
const Bootcamp = require('../modeles/bootcamp')

// getbootcamp
exports.getbootcamp = async (req, res) => {
    try {
        const data = await Bootcamp.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// postbootcamp
exports.postbootcamp = async (req, res) => {
    try {
        const data = await Bootcamp.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// putbootcamp
exports.putbootcamp = async (req, res) => {
    try {
        const data = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// deletebootcamp
exports.deletebootcamp = async (req, res) => {
    try {
        const data = await Bootcamp.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}