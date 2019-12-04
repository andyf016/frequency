document.getElementById("countButton").onclick = function () {
    document.getElementById("wordsDiv").innerHTML = ''
    document.getElementById("lettersDiv").innerHTML = ''

    let typedText = document.getElementById("textInput").value;
    
    typedText = typedText.toLowerCase();

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
   

    

const letterCounts = {};
for (let i = 0; i < typedText.length; i += 1) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1;
    } else {
        letterCounts[currentLetter]++;
    }
}
const wordCounts = {}
const words = typedText.split(" ");
for (let i = 0; i < words.length; i+=1){
    currentWord = words[i];
    if(wordCounts[currentWord] === undefined){
        wordCounts[currentWord] = 1;
    } else{
        wordCounts[currentWord]++
    }
}
for (let word in wordCounts){
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
    span.appendChild(textContent);
    document.getElementById("wordsDiv").appendChild(span);
}
for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);
}
console.log(wordCounts)
}