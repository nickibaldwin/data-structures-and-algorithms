'use stict';

let sentence = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

function wordRepeat(str) {
  let splitStr = str.split(' ');
  let list = [];

  for (let i = 0; i < splitStr.length; i++) {
    for (let j = i + 1; j < splitStr.length; j++) {
      if (splitStr[i].toLowerCase().match(splitStr[j])) {
        list.push(splitStr[i]);
      }
    }
  }
  return list[0];
}

console.log(wordRepeat(sentence));

module.exports = wordRepeat;
