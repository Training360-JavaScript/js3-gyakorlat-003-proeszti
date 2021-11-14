
const setCookie = (value = '') => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = ` token = ${value}; expires =${expires}; path = /`;
}
setCookie('viewed', '5');
setCookie('uid' '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

export default {
    const cookieHandler = {
        getAll(name) {
            let cookieObject = {};
            getCookieNames = document.cookie
                .split(' ;')
                .forEach(item => {
                    getCookieNames[item.split('=')[0]] = item.split('=')[1];
                });
            return getCookieNames;
        },
        toSessionStorage() {
            document.cookie.split(';')
                .forEach(item => sessionStorage.setItem(item.split('=')[0], item.split('=')[1]))
        },
        flush() {
            const deletCookie = cookieHandler.getAll();
            for (let i = 0; i < deletCookie.length; i++) {
                document.cookie = `${deletCookie[i]} =; expires = Thu, 01 Jan 1970 00:00:00 UTC; path /;`;

            }
        },
    }
}
export { cookieHandler };