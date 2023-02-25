function orderedCount(inputStr) {
    const charCounts = new Map();

    for (const char of inputStr) {
      if (charCounts.has(char)) {
        charCounts.set(char, charCounts.get(char) + 1);
      } else {
        charCounts.set(char, 1);
      }
    }

    const sortedCounts = [...charCounts].sort((a, b) => inputStr.indexOf(a[0]) - inputStr.indexOf(b[0]));

    const result = sortedCounts.map(([char, count]) => [char, count]);

    return result;
  }


  console.log(orderedCount("abracadabra"));
  console.log(orderedCount("Code Wars"));
  console.log(orderedCount("233312"));
