const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ msg: 'This is the List endpoint' })
})

module.exports = router