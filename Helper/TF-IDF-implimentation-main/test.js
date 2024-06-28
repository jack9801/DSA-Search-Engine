const fs = require('fs');

function searchTermsInFile(terms, filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  const matchingLines = [];

  lines.forEach((line, index) => {
    const lowerLine = line.toLowerCase(); // Convert line to lowercase

    for (const term of terms) {
      const lowerTerm = term.toLowerCase(); // Convert term to lowercase

      if (lowerLine.includes(lowerTerm)) {
        matchingLines.push(index);
        break;
      }
    }
  });

  return matchingLines;
}
const filePath = "C:/Users/SHISHUPAL/Desktop/AlgoSearch-main/Helper/TF-IDF-implimentation-main/Leetcode-Scraping/qData/index.txt"
const matchingLineIndices = searchTermsInFile(["subarray","rainwater"], filePath);

console.log('Matching line indices:', matchingLineIndices);
