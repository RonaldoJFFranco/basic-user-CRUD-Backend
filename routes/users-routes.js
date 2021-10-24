router = require('express').Router()

const UsersController = require('../controllers/users-controller')
const controller = new UsersController()

const validateCreateUser = (req, res, next) => {
    if(!Object.keys(req.body).length)
        return res.json({error: true, message: "Body content empty!"})
    next()
}

const getAll = (req, res) => {
    controller.getAllUsers((err, result) => {
        if (err) return res.json({ error: true, message: err.message })
        return res.json({ error: false, data: result })
    })
}

const createUser = (req, res) => {
    let obj = {
        name: req.body.name,
        birthday: req.body.birthday,
        photo: req.body.photo
    }
    controller.checkNewUser(obj, (err) => {
        if (err) {
            return res.json({ error: true, message: err.message })
        }
        controller.createUser(obj, (err, result) => {
            if (err) return res.json({ error: true, message: err.message })
            return res.json({ error: false, data: result })
        })
    })
}

const updateUser = (req, res) => {
    let obj = {
        cod: req.body.cod,
        name: req.body.name,
        birthday: req.body.birthday,
        photo: req.body.photo
    }
    controller.findUserByCod(obj, (err) => {
        if (err) {
            if (err) return res.json({ error: true, message: err.message })
            return res.json({ error: false, data: result })
        }
        controller.updateUser(obj, (err, result) => {
            if (err) return res.json({ error: true, message: err.message })
            return res.json({ error: false, data: result })
        })
    })
}

const removeUser = (req, res) => {
    let obj = {
        cod: req.body.cod
    }
    controller.findUserByCod(obj, (err) => {
        if (err) {
            if (err) return res.json({ error: true, message: err.message })
            return res.json({ error: false, data: result })
        }
        controller.removeUser(obj, (err, result) => {
            if (err) return res.json({ error: true, message: err.message })
            return res.json({ error: false, data: result })
        })
    })
}

router.route('/').get(getAll)
router.route('/create').post([validateCreateUser, createUser])
router.route('/update').put(updateUser)
router.route('/remove').delete(removeUser)

module.exports = router;