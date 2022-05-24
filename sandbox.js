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

function oddishOrEvenish(number) {
  const sum = number
    .toString()
    .split('')
    .reduce((total, n) => {
      total += Number(n);
      return total;
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

at(['a', 'b', 'c', 'd'], 1);
at(['a', 'b', 'c', 'd'], -1);

function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}

function anagrams(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  return (
    string1.toLowerCase().split('').sort().join('') ===
    string2.toLowerCase().split('').sort().join('')
  );
}

const string1 = 'superintended';
const string2 = 'unpredestined';

const testA = anagrams(string1, string2);
console.log(testA);
