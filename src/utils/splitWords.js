function splitWords(sentence) {
  sentence = sentence.trim();

  const wordsAndSpaces = sentence.split(/(\s+)/);
  const words = wordsAndSpaces
  return words;
}

export default splitWords;
