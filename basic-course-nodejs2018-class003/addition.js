module.exports = {
    syncSum: function(a, b) {
        console.log(`The addition is: ${a + b}`);
    },

    asyncSum: function(a, b) {
        setTimeout(() => {
            console.log(`The addition in setTimeout is: ${a + b}`)
        }, 2000);
    },
}