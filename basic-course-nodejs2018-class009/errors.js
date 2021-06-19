const fs = require("fs");
const assert = require("assert");

module.exports = {
    standarError: {
        syntax: function () {
            return eval("var var a;");
        },
        range: function () {
            var arr = new Array(-4);
        },
        reference: function () {
            return w;
        },
        type: function () {
            var o = new 10;
        },
        uri: function () {
            decodeURI('%');
        },
    useError: function () {
        throw new Error( 'My custom error' );
    },
    sistemError: function () {
        fs.readFileSync('foo.bar');
    },
    assertError: function () {
        assert.ok(false)
    }
    }
};