// Code your solutions in this file

function writeCards(arrayOfNames, event) {
    const message = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
        message.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}