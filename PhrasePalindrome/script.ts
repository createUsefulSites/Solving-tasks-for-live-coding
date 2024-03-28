function isPalindrome(string: string): boolean {
  const stringChanged: Array<string> = string
    .split('')
    .filter((item) => item.match(/[a-z]/i))
    .map((item) => item.toLocaleLowerCase());

  return stringChanged.join() === stringChanged.reverse().join();
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('а л?.>;"123  ал а')); // true
console.log(isPalindrome('а л?.>;"123  ал а info')); // false
