function countWords() {
    var sentence = "The answer to life, the universe, and everything is 42";
    var words = sentence.split(" ");
    var numWords = words.length;
    return numWords;
}
var howManyWords = countWords();
console.log(howManyWords + " words in the sentence.");