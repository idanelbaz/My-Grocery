const shopItemService = require('../services/shopItem.service.js')
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


//shopItems List
router.get('/', async (req, res) => {
    const shopItems = await shopItemService.query()
    try {
        res.json(shopItems)
    } catch {
        res.status(404).send('Unabled to load items')
    }
})

// shopItem Single

router.get('/:id', async (req, res) => {
    const shopItemId = req.params.id
    const shopItem = await shopItemService.getById(shopItemId)
    try {
        res.json(shopItem)
    } catch {
        res.status(404).send('UNKNOWN item')
    }
})

// shopItems List - only from the same genre

router.get('/byGenre/:genre', async (req, res) => {
    const genre = req.params.genre
    console.log(genre)
    const shopItems = await shopItemService.getByGenre(genre)
    try {
        res.json(shopItems)
    } catch {
        res.status(404).send('UNKNOWN item')
    }
})


// shopItems list - only by baseGenre 

router.get('/byBaseGenre/:baseGenre', async (req, res) => {
    const baseGenre = req.params.baseGenre
    console.log(baseGenre)
    const shopItems = await shopItemService.getByBaseGenre(baseGenre)
    try {
        res.json(shopItems)
    } catch {
        res.status(404).send('UNKNOWN item')
    }
})

// shopItems list - by search

router.get('/bySearch/:filterBy', async (req, res) => {
    const filterBy = req.params.filterBy
    console.log(filterBy)
    const shopItems = await shopItemService.getBySearch(filterBy)
    try {
        res.json(shopItems)
    } catch {
        res.status(404).send('UNKNOWN item')
    }
})



// shopItem Delete

router.delete('/:id', requireAuth, async (req, res) => {
    const shopItemId = req.params.id
    await shopItemService.remove(shopItemId)
    try {
        res.json({})
    } catch {
        res.status(404).send('Could Not Delete')
    }
})

// shopItem Edit

router.put('/edit/:id', requireAuth, async (req, res) => {
    const shopItem = req.body;
    const editedshopItem = await shopItemService.update(shopItem)
    try {
        res.json(editedshopItem)
    } catch {
        res.status(500).send('Could Not Edit')
    }
})

// shopItem Add

router.post('/add', requireAuth, async (req, res) => {
    const shopItem = req.body;
    const shopItemWithId = await shopItemService.add(shopItem)
    try {
        res.json(shopItemWithId)
    } catch {
        res.status(500).send('Could Not Add')
    }

})
