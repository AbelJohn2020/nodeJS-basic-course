const fs = require("fs");

module.exports = {
    sync: function() {
        try {
            const m = 1;
            const n = m + z;
        } catch(e) {
            console.log(`This is sync ${e}`);
        }
    },
    errorFirstCallbackWrong: function () {
        try {
            fs.readFile('./some/file/that/does-not-exist', ( e, data ) => {
                if (e) {
                    throw `This is a sync ${e}`
                }
            })
        } catch(e) {
            console.log(e)
        }
    },
    errorFirstCallback: function() {
        fs.readFile('/some/file/that/does-not-exist', (err, data) => {
            if (err) {
                console.error('This error-first callback', err);
                return;
            }
            console.log(data);
        });
    }       
}