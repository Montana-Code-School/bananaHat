//Javascript test set for converting strings to pig latin
// const expect = chai.expect;

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
// const punctuationObjTest = (phrase) => {
//   let matchArr = phrase.split("");
//   let woof = {};
//   matchArr.map((character,index) => {
//     if (/[.,\/#!\?$%\^&\*;:{}=\-_`~()]/.test(character)) {
//         woof[index] = character;
//     }
//   })
//   return woof;
// }
//
// const punctuationArrayTest = (phrase) => {
//   let matchArr = phrase.split("");
//
//   let bucket = matchArr.map((character,index) => {
//     if (/[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(character)) {
//       let woof = {};
//         woof[index] = character;
//         console.log(woof);
//         return woof;
//     }
//   }).filter(the => the !== undefined)
// }
// const punctuationTest = (phrase) => {
//   let punctuation = '';
//   if (phrase.includes('.')){
//     punctuation = phrase[phrase.lastIndexOf('.')]
//   }
//   else if (phrase.includes('!')){
//      punctuation = phrase[phrase.lastIndexOf('!')]
//   }
//   else if (phrase.includes('?')){
//     punctuation = phrase[phrase.lastIndexOf('?')]
//   }
//   else {
//     punctuation = ''
//   }return punctuation
// }

  let bucket = matchArr.map((character,index) => {
    if (/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/.test(character)) {
      let woof = {};
        woof[index] = character;
        return woof;
    }
  }).filter(the => the !== undefined)
  return bucket
}
console.log(punctuationArrayTest("string! I am over this exercise?"));

const punctuationTest = (word) => {
  let arrPunc = [];
  let arrChar = [];
  let vowelIndex = findVowelIndex(word);
  let modWord = ''
  let wordEnding = ''

  word.split('').map((char) =>{
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()\"]/.test(char)) {
    arrPunc.push(char)
    arrChar.push(null)
  }else {
    arrChar.push(char)
    arrPunc.push(null)

   }
 })

 if ( isVowel(word.charAt(0)) ) {
   wordEnding = 'way'
   modWord = word += 'way'
   arrPunc.push(null)
   arrChar.splice(word.length, 0, wordEnding)
 } else if (word[0] === 'q') {
   wordEnding = word.slice(0, vowelIndex + 1) + 'ay'
   modWord = word.slice(vowelIndex + 1, word.length) + wordEnding;
   arrPunc.push(null)
   arrChar.splice(word.length-1, 0, wordEnding)
 } else if (!isVowel(word.charAt(0))) {
   wordEnding = word.slice(0,vowelIndex) + 'ay'
   modWord = word.slice(vowelIndex, word.length) + wordEnding;
   arrPunc.push(null)
   arrChar.splice(word.length-1, 0, wordEnding)
 }
 // return propNounMod(word, modWord)
let testWord = 'oan,ana!,'
let testWordPuncArray = testWord.match(/[.,\/#!$%\^&\*;:{}=\-_`~()\"]/g)
let lastPunctuation = testWordPuncArray[testWordPuncArray.length - 1]
let lastPunctuationRegex =  new RegExp('\\' + lastPunctuation, 'gi')
let lastPunctuationIndex = testWord.search(lastPunctuation)
let samePuncArray = testWord.match(lastPunctuationRegex)

if (samePuncArray.length !== 1){
    lastPunctuation = samePuncArray[samePuncArray.length-1]
    lastPunctuationIndex = testWord.lastIndexOf(lastPunctuation)

}else {

}
  console.log(arrPunc);
  console.log(arrChar);
  console.log(testWordPuncArray);
  console.log(lastPunctuation);
  console.log(lastPunctuationIndex);
  console.log(lastPunctuationRegex);
  console.log(samePuncArray);
  console.log(samePuncArray.length === 1);
}

punctuationTest('butt!')

// need to refactor to use punctuationObjTest
const makePigSentence = (phrase) => {
  let punctuation = punctuationTest(phrase);
  let phraseArr = phrase.replace(/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/g, '').split(' ');
  phraseArr = phraseArr.map((word, index) => {
    let meow = word.toLowerCase();
    if(/^[A-Z]/.test(word)) {
      meow = toTitleCase(testFile(meow))
    } else {
      meow = testFile(meow);
    }
    return meow;
  }).join(' ')
  return phraseArr + punctuation
}
makePigSentence('Claire had the "Banana Hat Song" stuck in her head all weekend.')

module.exports = {
  testFile:testFile,
  makePigSentence:makePigSentence
}
