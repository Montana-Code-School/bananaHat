import chai from 'chai';
import banana1 from '../bunch/banana1';
const expect = chai.expect;
const wordModifier = banana1.wordModifier;
const makePigSentence = banana1.makePigSentence;

//  - Pig latin rules -
// for words that begin with consonant sounds, all letters before the intital
// vowel are placed at the end of the word sequence, then "ay" is added.
//
// for words that start with a vowel all you need to do is add "way"
// "ultimate" becomes ultimateway
//
// a word that begins with "y" is treated as a consonant word
// "yellow" becomes "ellowyay"
//
// if it's a compound word you have to seperate them and treat them
// as individaul words


describe('Pig latin test block', () => {
  it ('returns a string', () => {
    expect(wordModifier('apple')).to.be.a('string')
  })
  it ('if word begins with vowel then it should end in way', () => {
    expect(wordModifier('apple')).to.eql('appleway')
  })
  it ('if word begins with a consonant then it should slice everything before the first vowel, add it to the end, then concat "ay" to the end', () => {
    expect(wordModifier('brick')).to.eql('ickbray')
  })
  it ('it should work with proper nouns', () => {
    expect(wordModifier('Tyler')).to.eql('Ylertay')
  })
  it ('it should return a statement converted to pig latin with punctuation intact', () => {
    expect(makePigSentence('I had banana hat song stuck in my head all weekend.'))
       .to
       .eql('Iway adhay ananabay athay ongsay uckstay inway ymay eadhay allway eekendway.')
  })
  it ('it should handle all end sentence punctuation', () => {
    expect(makePigSentence('Is your dog brown?')).to.eql('Isway ouryay ogday ownbray?')
    expect(makePigSentence('My dog is brown!')).to.eql('Ymay ogday isway ownbray!')
  })
  it ('it should maintain titleCase in middle of sentence.', () => {
    expect(makePigSentence('Claire had the Banana Hat Song stuck in her head all weekend.'))
       .to
       .eql('Aireclay adhay ethay Ananabay Athay Ongsay uckstay inway erhay eadhay allway eekendway.')
  })
  it ('q\'s should be treated as a block with "qu" incorporated', () => {
    expect(makePigSentence('It is quite a long way to the quiet river.'))
       .to.eql('Itway isway itequay away onglay ayway otay ethay ietquay iverray.')
  })
  it ('it should maintain punctuation in middle of sentence.', () => {
    expect(makePigSentence('Claire had the "Banana Hat Song" stuck in her head all weekend.'))
       .to
       .eql('Aireclay adhay ethay "Ananabay Athay Ongsay" uckstay inway erhay eadhay allway eekendway.')
  })
});
