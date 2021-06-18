const readLine = require('readline');
const readLineDoc = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
    "What is your first name? ",
    "What is your last name? ",
    "How old are you? ",
];

const askQuestions = ( readLineDoc, question ) => {
    return new Promise( (resolve, reject) => {
        readLineDoc.question( question, answer => {
            resolve(answer);
        })
    });
};

const ask = function (questions) {
    return new Promise ( async (resolve, reject) => {
        let result = [];
        for(let i=0; i <= questions.length - 1; i++) {
            const answer = await askQuestions(readLineDoc, questions[i]);
            result.push(answer);
        }
        readLineDoc.close();
        resolve(result);
    })
};

ask(questions)
    .then( question => console.log(`Hi! ${question[0]} ${question[1]}, you are ${question[2]} years old`) )
    .catch( e => console.error(e) )