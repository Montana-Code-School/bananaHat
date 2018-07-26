//Javascript test set for converting strings to pig latin
// const expect = chai.expect;

export default {
const isVowel = (char, needsWhy) => {
  if (char.length == 1 ) {
    return /[aeiou]/.test(char);
  }
}

const findVowelIndex = (word) => {
  for (let x = 1; x < word.length; ++x) {
    if (isVowel(word[x]) || word[x] === 'y') {
      return x;
    }
  }
}

const propNounMod = (word, modWord) => {
  if( !(word.charAt(0) === word.charAt(0).toLowerCase()) ) {
    return modWord.charAt(0).toUpperCase() + modWord.substr(1, modWord.length).toLowerCase()
  }
  return modWord
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

const testFile = (word) => {
  let vowelIndex = findVowelIndex(word);
  let modWord = ''
  if ( isVowel(word.charAt(0)) ) {
    modWord = word += 'way'
  } else if (word[0] === 'q') {
    modWord = word.slice(vowelIndex + 1, word.length) + word.slice(0, vowelIndex + 1) + 'ay';
  } else if (!isVowel(word.charAt(0))) {
    modWord = word.slice(vowelIndex, word.length) + word.slice(0,vowelIndex) + 'ay';
  }
  return propNounMod(word, modWord)
}

const punctuationObjTest = (phrase) => {
  let matchArr = phrase.split("");
  let woof = {};
  matchArr.map((character,index) => {
    if (/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/.test(character)) {
        woof[index] = character;
    }
  })
  return woof;
}

const punctuationTest = (phrase) => {
  let punctuation = '';
  if (phrase.includes('.')){
    punctuation = phrase[phrase.lastIndexOf('.')]

  }
  else if (phrase.includes('!')){
     punctuation = phrase[phrase.lastIndexOf('!')]
  }
  else if (phrase.includes('?')){
    punctuation = phrase[phrase.lastIndexOf('?')]
  }
  else {
    punctuation = ''
  }return punctuation
}

const makePigSentence = (phrase) => {
  let punctuation = punctuationTest(phrase);
  let phraseArr = phrase.replace(punctuation, '').split(' ');
  phraseArr = phraseArr.map((word, index) => {
    let meow = word.toLowerCase();
    if(/^[A-Z]/.test(word)) {
      meow = toTitleCase(testFile(meow))
    } else {
      meow = testFile(meow);
    }
    return meow;
  }).join(' ')

  return phraseArr + punctuation;
}

console.log(makePigSentence('Claire had the "Banana Hat Song" quite stuck in her head all weekend.'));


module.exports = {
  testFile:testFile,
  makePigSentence:makePigSentence
}
}
