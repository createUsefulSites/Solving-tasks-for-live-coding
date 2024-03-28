function anagram(strA, strB) {
  return helper(strB) === helper(strA);
}

function helper(string) {
  const arr = string.split('').map((item) => item.toLowerCase());
  arr.sort((a, b) => {
    if (a.codePointAt(0) > b.codePointAt(0)) return 1;
    if (a.codePointAt(0) < b.codePointAt(0)) return -1;
    return 0;
  });
  return arr.toString();
}

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));
