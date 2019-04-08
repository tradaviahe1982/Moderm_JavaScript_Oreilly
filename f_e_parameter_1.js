function countWords(sentence) {
    var words = sentence.split(" ");
    var numWords = words.length;
    return numWords;
}
var howManyWords = countWords("Anh nhớ em rất nhiều");
console.log(howManyWords + " words in the sentence.");
var howManyWords = countWords("Em có biết không? Đã tháng 4 về rồi đó!");
console.log(howManyWords + " words in the sentence.");