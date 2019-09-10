import httpService from './http.service.js';



export default {
    query,
    add,
    remove,
    getById,
    update,
    queryTheSameItems,
    querySortedByBaseGenre,
    querySortedBySearch,
}


function _getUrl(id = '') {
    return `shopitem/${id}`

}

function query() {
    return httpService.get(_getUrl())
}

function queryTheSameItems(genre){ 
    return httpService.get(_getUrl(`byGenre/${genre}`))
}


function querySortedByBaseGenre(baseGenre) { 
    return httpService.get(_getUrl(`byBaseGenre/${baseGenre}`))
}

function querySortedBySearch(filterBy) { 
    return httpService.get(_getUrl(`bySearch/${filterBy}`))
}

function getById(shopItemId) {
    return httpService.get(_getUrl(shopItemId))
}

function add(shopItem) {
    return httpService.post(_getUrl('add'), shopItem)
}

function remove(shopItemId) {
    return httpService.delete(_getUrl(shopItemId))
}

function update(updatedShopItem) {
    return httpService.put(_getUrl(`edit/${updatedShopItem._id}`), updatedShopItem)
}
