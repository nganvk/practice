function findWords(words) {
    let firstLine = new Set ("qwertyuiop");
    let secondLine = new Set ("asdfghjkl");
    let thirdLine = new Set ("zxcvbnm");
    let res = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let line = "";
        if (firstLine.has(word[0])) line = firstLine;
        if (secondLine.has(word[0])) line = secondLine;
        if (thirdLine.has(word[0])) line = thirdLine;
        let found = 1;
        
        for (let j = 1; j < word.length; j++) {
            if (!line.has(word[j])) {
                found = 0;
                break;
            }
        }

        if (found === 1) res.push(words[i]);
    }

    return res;
}

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf","sfd"]));


// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 