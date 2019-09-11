import Vue from 'vue'
import Vuex from 'vuex'
import shopItemService from "./services/shopItemService"
import userService from './services/userService'



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shopItems: null,
        currShopItem: null,
        topSellers:null,
        itemsToShowSame:null,
        itemsToShow:null,
        loggedInUser:null,
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
        },
        getLoggedInUser(state){ 
            return state.loggedInUser;
        },
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
        },
        setLoginUser(state, {currUserLoggedIn}) {
            state.loggedInUser = currUserLoggedIn;
        },
        setLoggedOutUser(state) {
            state.loggedInUser = null;
        },
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

        async userLogout(context) {
            await userService.logOut()
            try {
                context.commit({
                    type: 'setLoggedOutUser'
                })
            } catch (err) {
                console.log(err);
            }
        },

        async userSignup(context, { user }) {
            const userSignedUp = await userService.signUp(user)
            try {
                context.commit({
                    type: 'setLoginUser',
                    currUserLoggedIn: userSignedUp
                })
                console.log('This is Great signup!', userSignedUp)
            } catch (err) {
                console.log(err);
            }

        },

        async userLogin(context, { currUser }) {
            const currUserLoggedIn = await userService.logIn(currUser)
            try {
                context.commit({
                    type: 'setLoginUser',
                    currUserLoggedIn: currUserLoggedIn
                })
            } catch (err) {
                console.log(err);
            }

        },

    }
})