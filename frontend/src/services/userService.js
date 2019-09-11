import httpService from './http.service.js';



export default {
signUp,
logIn,
logOut,
getLoggedinUser,
}

function _getUrl(id = '') {
    return `user/${id}`
}


function getLoggedinUser() {
    const user = JSON.parse(sessionStorage.getItem('LoggedUser'));
    return user;
}

async function logIn(user) {
    const currUser = await httpService.post(_getUrl(), user);
    try {
            if (!currUser) throw new Error('Cant Login')
            sessionStorage.setItem('LoggedUser', JSON.stringify(currUser));
            return currUser;
    }
    catch (err) {
                console.log(err, 'cannot do login');
                throw err;
    }
}

async function signUp(user) {
    const res = await httpService.post(_getUrl('signup'), user);
    try {
        sessionStorage.setItem('LoggedUser', JSON.stringify(res));
        return res;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

function logOut() {
    return httpService.post(_getUrl('logout'))
        .then(() => {
            sessionStorage.clear()
        })
        .catch(err => {
            console.log('Could not logout', err);
            throw err;
        })
}
