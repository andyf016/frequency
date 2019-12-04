document.getElementById("countButton").onclick = function () {
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
const words = typedText.split(" ");
for (let i = 0; i < words.length; i+=1){
    currentWord = words[i];
    if(words[currentWord] === undefined){
        words[currentWord] = 1;
    } else{
        words[currentWord]++
    }
}
for (let word in words){
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + word + "\": " + words[word] + ", ");
    span.appendChild(textContent);
    document.getElementById("wordsDiv").appendChild(span);
}
for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);
}
}