'use strict'

// Fájl: solutions/app1.js
// Függvény neve: setCookie
// Export: a setCookie legyen a default export.
// A függvény meghívása esetén tárold el a függvénynek átadott string-et egy token nevű cookie-ba, amely 15 perc után lejár!

const setCookie = (value = '') => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `token = ${value}; expires =${expires}`;
}
export default setCookie;