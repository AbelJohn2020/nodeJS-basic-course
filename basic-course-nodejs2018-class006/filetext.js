module.exports = {
    /**
     * @param {number[]} list
     */
    
    incrementValues: function(list) {
        const mapIncrement = val => `The number is: ${Number(val) + 1}`;
        return list.map(mapIncrement);
    },
    /**
     * @param {string[]} list
     */
    callNames: function (list) {
        const mapNames = name => `Hi! ${name} here we go! enjoy it!`
        return list.map(mapNames)
    }
}