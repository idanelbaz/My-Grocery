const userService = require('../services/user.service.js')
const express = require('express')
const router = express.Router()

module.exports = router



// if need auth - use this
function requireAuth(req, res, next) {
    // const user = req.session.loggedinUser
    // if (!user) return res.status(401).send('Unauthenticated');
    next();
}

function requireAdmin(req, res, next) {
    // const user = req.session.loggedinUser
    // if (!user) return res.status(401).send('Unauthenticated');
    // if (user.isAdmin===false) return res.status(403).send('UnPrivileged');
    next();
}

//login

router.post('/',async (req, res) => {
    const user = req.body;
    const currUser = await userService.logIn(user)
    try {
        req.session.loggedinUser = currUser[0];
        res.json(currUser[0]);
    } catch {
        console.log('cant login in route', err);
        res.status(404).send();
    }
})

//signup

router.post('/signup', async (req, res) => {
    const user = req.body;
    const userWithId = await userService.signUp(user)
    try {
        res.json(userWithId)
    } catch {
        res.status(401).send('Not Authorized')
    }
})

//logout

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.end()
})


