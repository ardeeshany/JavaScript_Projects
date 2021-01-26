let finalWisdom = [];

const messageBox = {
    color: ['pink', 'blue', 'green'],
    song: ['Jazz', 'Classic', 'Rock'],
    city: ['New York', 'Los Angeles', 'Paris', 'London']
};

for(let m in messageBox){
    let p = Math.floor(Math.random()*messageBox[m].length);
    switch(m) {
        case 'color':
            finalWisdom.push(`Your favorite color would be ${messageBox[m][p]}`);
            break;
        case 'song':
            finalWisdom.push(`Love to hear more ${messageBox[m][p]}`);
            break;
        case 'song':
            finalWisdom.push(`The next destination would be ${messageBox[m][p]}`);
            break;
        default:
            finalWisdom.push(`There is not enought info.`);
    }
};

console.log(finalWisdom.join('\n'));