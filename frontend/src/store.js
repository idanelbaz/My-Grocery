import Vue from 'vue'
import Vuex from 'vuex'
import shopItemService from "./services/shopItemService"



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shopItems: null,
        currShopItem: null,
        topSellers:null,
        itemsToShowSame:null,
        itemsToShow:null,
    },
    getters: {
        getShopItems(state) {
            return state.shopItems;
        },
        getShopItem(state) {
            return state.currShopItem;
        },
        getTopSellers(state){ 
            return state.topSellers;
        },
        getItemsToShowSame(state){ 
            return state.itemsToShowSame;
        },
        getItemsToShow(state){ 
            return state.itemsToShow;
        }
    },
    mutations: {
        setShopItems(state, { shopItems }) {
            state.shopItems = shopItems;
        },
        setShopItem(state, { shopItem }) {
            state.currShopItem = shopItem;
        },
        addShopItem(state, { addedShopItem }) {
            state.shopItems.unshift(addedShopItem)
        },
        deleteShopItem(state, { shopItemId }) {
            const idx = state.shopItems.findIndex(shopItem => shopItem._id === shopItemId);
            state.shopItems.splice(idx, 1);
        },
        updateShopItem(state, { updatedShopItem }) {
            const idx = state.shopItems.findIndex(shopItem => shopItem._id === updatedShopItem._id)
            state.shopItems.splice(idx, 1, updatedShopItem);
        },
        setShopItemsToShowSame(state, { sortedShopItems }) { 
            state.itemsToShowSame = sortedShopItems;
        },
        setShopItemsToShow(state, { sortedShopItems }) { 
            state.itemsToShow = sortedShopItems;
        }
    },
    actions: {
        async loadShopItems(context) {
            const shopItems = await shopItemService.query()
            try {
                context.commit({
                    type: 'setShopItems',
                    shopItems
                })
            } catch (err) {
                console.log(err);
            }
        },
        async loadShopItemById(context, { shopItemId }) {
            const shopItem = await shopItemService.getById(shopItemId)
            try {
                context.commit({
                    type: 'setShopItem',
                    shopItem
                })
            } catch (err) {
                console.log(err);
            }
        },
        async addShopItem(context, { newShopItem }) {
            const addedShopItem = await shopItemService.add(newShopItem)
            try {
                context.commit({
                    type: 'addShopItem',
                    addedShopItem
                })
            } catch (err) {
                console.log(err);
            }
        },
        async deleteShopItem(context, { shopItemId }) {
            try {
                await shopItemService.remove(shopItemId)
                context.commit({
                    type: 'deleteShopItem',
                    shopItemId
                })
            } catch (err) {
                console.log(err);
            }

        },
        async updateShopItem(context, { shopItem }) {
            const updatedShopItem = await shopItemService.update(shopItem)
            try {
                context.commit({
                    type: 'updateShopItem',
                    updatedShopItem
                })
            } catch (err) {
                console.log(err);
            }

        },

        async loadShopItemsToShowSame(context, {shopItem}) {
            const sortedShopItems = await shopItemService.queryTheSameItems(shopItem.genre)
            try {
                context.commit({
                    type: 'setShopItemsToShowSame',
                    sortedShopItems
                })
            } catch (err) {
                console.log(err);
            }
        },

        async loadShopItemsToBaseGenre(context, {baseGenre}) {
            const sortedShopItems = await shopItemService.querySortedByBaseGenre(baseGenre)
            try {
                context.commit({
                    type: 'setShopItemsToShow',
                    sortedShopItems
                })
            } catch (err) {
                console.log(err);
            }
        },

        async loadShopItemsByFilter(context, {searchBy}) {
            const sortedShopItems = await shopItemService.querySortedBySearch(searchBy)
            try {
                context.commit({
                    type: 'setShopItemsToShow',
                    sortedShopItems
                })
            } catch (err) {
                console.log(err);
            }
        },

    }
})