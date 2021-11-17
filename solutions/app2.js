'use strict'


// Fájl: solutions/app2.js

// Objektum neve: cookieHandler

// Export: export { cookieHandler };

// Az alábbi cookie-k legyenek a böngésződben tárolva (az első feladatban szereplő setCookie függvénnyel hozd őket létre, egyszerűen másold át a függvényt ebbe a feladatba is, és futtasd háromszor):
//     viewed: 5
//     uid: 354774631237
//     ssid: Bx55OWbHJ0Vt_IGIF

// A cookieHandler objektum az alábbi három metódust tartalmazza:
//     getAll: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key és az értéke a value (pl. {viewed: 5}).
//     toSessionStorage: minden sütit egyenként elment a sessionStorage-ba az adott süti nevével és értékével.
//     flush: törli az összes sütit.

const setCookie = (value = '') => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = ` token = ${value}; expires =${expires}`;
}
setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');


const cookieHandler = {
    getAll() {
        let cookieObject = {};
        getCookieNames = document.cookie
            .split(' ;')
            .forEach(item =>
                cookieObject[item.split('=')[0]] = item.split('=')[1]);
        return cookieObject;
    },
    toSessionStorage() {
        document.cookie.split(';')
            .forEach(item => sessionStorage.setItem(item.split('=')[0], item.split('=')[1]))
    },
    flush() {
        const deletCookie = document.cookie.split(';');
        for (let i = 0; i < deletCookie.length; i++) {
            document.cookie = `${deletCookie[i]} =; expires = Thu, 01 Jan 1970 00:00:00 UTC`;

        }
    }
}

export { cookieHandler };