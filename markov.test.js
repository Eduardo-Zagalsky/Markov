let machine = require('./markov_machine');
let file = require('fs');

file.readFile('eggs.txt', "utf8", function cb(err, data) {
    if (err) {
        console.error(`Cannot read file: ${err}`);
    } else {
        const mm = machine.MarkovMachine(data);
    }
})
test('The program should read the file', () => {
    expect(mm).toBeTruthy();
})