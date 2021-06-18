module.exports = {
    greet: function(completeName) {
        console.log(`Hi! ${completeName}. Do you feel the sync?`);
    },
    withPromise: function(name, lastname) {
        console.log('Call the function with the promise...');
        return new Promise((resolve, reject) => {
            console.log('Waiting...');
            setTimeout(() => {
                console.log(`Solving wait...`);
                resolve(`${name}, ${lastname}`);
            }, 2000);
        })
    }
}