// function firstNonRepeatedChar(str) {
//  // Write your code here
// }
function firstNonRepeatedChar(str) {
    const charCount = new Map();

    // Count the frequency of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
		}
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
