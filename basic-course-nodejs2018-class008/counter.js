module.exports = {
    syncCounter: function (number, increment) {
        console.log(`Counting from 0 to ${number}...`);
        for(let i = 0; i <= number; i += increment) {
            console.log(i);
        }
    },
    asyncCounter: function (number, increment) {
        setTimeout(() => {
            console.log(`Counting from 0 to ${number}...`);
            for(let i = 0; i <= number; i += increment) {
                console.log(i);
            }
        }, 2000);
    }
}