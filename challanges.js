function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

reverseWords('alchemy rocks gold');

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase + word.slice(1).toLowerCase())
    .join(' ');
}

titleCase('alchemy ROCKS goLD');
