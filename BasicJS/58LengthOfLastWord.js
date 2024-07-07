function lengthOfLastWord(s) {
    s = s.trim().split(" ");
    return s.pop();
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("               last"));
console.log(lengthOfLastWord("first               "));








