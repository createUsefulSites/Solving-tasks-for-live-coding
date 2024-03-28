function isPalindrome(string) {
    var stringChanged = string
        .split('')
        .filter(function (item) { return item.match(/[a-z]/i); })
        .map(function (item) { return item.toLocaleLowerCase(); });
    return stringChanged.join() === stringChanged.reverse().join();
}
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('а л?.>;"123  ал а')); // true
console.log(isPalindrome('а л?.>;"123  ал а info')); // false
