(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const pigLatin = require("pig-latin-library")

console.log(pigLatin("words"))


function onClickPig(){
  let translator = document.getElementById("translator-input").value;
  translator=pigLatin(translator)
  document.getElementById("output").innerHTML=translator;
}

document.getElementById("pigButton").addEventListener("click", onClickPig)

},{"pig-latin-library":2}],2:[function(require,module,exports){
const makePigSentence = (phrase) => {
  let phraseArr = phrase.split(' ');

  phraseArr = phraseArr.map((word, index) => {
    let beginPunctuation = beginningPunctuation(word);
    let endingPunctuation = endPunctuation(word);
    word = word.replace(/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/g, '')
    let endWord = word.toLowerCase();
    if(/^[A-Z]/.test(word)) {
      endWord = toTitleCase(wordModifier(endWord))
    } else {
      endWord = wordModifier(endWord);
    } return beginPunctuation + endWord + endingPunctuation;
  }).join(' ')
  return phraseArr
}

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
  } return modWord
}

const beginningPunctuation = (word) => {
  if(/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/.test(word.charAt(0))) {
    return word.charAt(0)
  } else{
    return ''
  }
}

const endPunctuation = (word) => {
  if(/[.,\/#!$\"\|\'%\^&\*;:{}=\-_`~()?]/.test(word.charAt(word.length-1))) {
    return word.charAt(word.length-1)
  } else{
    return ''
  }
}

const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const wordModifier = (word) => {
  let vowelIndex = findVowelIndex(word);
  let modWord = ''
  if ( isVowel(word.charAt(0)) ) {
    modWord = word += 'way'
  } else if (word[0] === 'q') {
    modWord = word.slice(vowelIndex + 1, word.length) + word.slice(0, vowelIndex + 1) + 'ay';
  } else if (!isVowel(word.charAt(0))) {
    modWord = word.slice(vowelIndex, word.length) + word.slice(0,vowelIndex) + 'ay';
  } return propNounMod(word, modWord)
}

module.exports = makePigSentence

},{}]},{},[1]);
