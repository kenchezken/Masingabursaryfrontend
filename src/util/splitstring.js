function extractWhitespaceCharacters(inputString) {
    // Initialize an empty array to store whitespace characters
    const whitespaceCharacters = [];
    
    // Define a regex pattern to match whitespace characters
    const regex = /\s/g; // Matches any whitespace character (space, tab, newline, etc.)
    
    let match;
    
    // Use regex to find all matches in the string
    while ((match = regex.exec(inputString)) !== null) {
        whitespaceCharacters.push(match[0]);
    }
    
    return whitespaceCharacters;
}

export default extractWhitespaceCharacters ;

