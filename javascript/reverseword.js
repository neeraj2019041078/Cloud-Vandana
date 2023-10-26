function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedSentence = '';
    words.forEach(word => {
        let charQueue = [];
        for (let i = 0; i < word.length; i++) {
            charQueue.push(word[i]);
        }

        let reversedWord = '';
        while (charQueue.length > 0) {
            reversedWord += charQueue.pop();
        }

        reversedSentence += reversedWord + ' ';
    });
    reversedSentence = reversedSentence.trim();
    return reversedSentence;
}

let inputSentence = 'This is a sunny day';
let result = reverseWords(inputSentence);
console.log(result);
