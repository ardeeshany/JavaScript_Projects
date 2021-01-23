let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ')

console.log(`Number of Words is ${storyWords.length}`)

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word)
})

console.log(`Number of Better Words is ${betterWords.length}`)

let overusedWords = ['really', 'very', 'basically'];

const OverusedNumber = word => {
  return storyWords.filter(word2 => {
 return word2 === word}).length
}

overusedWords.forEach(word => {
  console.log(`Number of "${word}" used in the text is ${OverusedNumber(word)}`)
})

let counter = 0;
const storyChars = story.split('');
for(let i = 0; i < storyChars.length; i++){
  if(storyChars[i] === '.' || storyChars[i] === '!'){
    counter++;
  }
}

console.log(`Number of sentences is ${counter}`)
console.log(betterWords)