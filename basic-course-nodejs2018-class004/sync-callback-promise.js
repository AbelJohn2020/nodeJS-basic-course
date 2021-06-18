module.exports = {
    sync: function(name) {
        return `Hi! my name is ${name} and I am a fullstack developer`
    },
    withCallback: function(name, cb) {
        setTimeout(() => {
            console.log(cb(name));
        }, 2000);
    },
    withPromise: function(name) {
        return new Promise(( resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 2000);
        })
    }
}