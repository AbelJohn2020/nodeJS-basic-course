//windows + h
const fs = require("fs")
const fileText = require("./filetext");

fs.readFile("./basic-course-nodejs2018-class006/number.txt", "utf8", (e, text) => {
    if (e) throw e;
    const numbers = text.split("\r\n").map(number => Number(number));
    console.log(numbers);
})

// fileText.incrementValues();
// fileText.callNames();