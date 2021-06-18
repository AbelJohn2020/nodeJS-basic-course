//windows + h
const fs = require("fs")
const fileText = require("./filetext");

fs.readFile("./basic-course-nodejs2018-class006/number.txt", "utf8", (e, text) => {
    if (e) throw e;
    const numbers = text.split("\r\n").map(number => Number(number));
    console.log(numbers);
    const textValues = fileText.incrementValues(numbers);
    console.log(textValues);

    fs.writeFile("././basic-course-nodejs2018-class006/newFileNumber.txt", textValues.join("\r\n"), (e, resolve) => {
        if (e) throw e;
    })
})

fs.readFile("./basic-course-nodejs2018-class006/name.txt", "utf8", (e, text) => {
    if (e) throw e;
    const strings = text.split("\r\n");
    console.log(strings);
    const names = fileText.callNames(strings);
    console.log(names);
})

// fileText.incrementValues();
// fileText.callNames();