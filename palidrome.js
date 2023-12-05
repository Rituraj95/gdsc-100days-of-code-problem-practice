function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

const num = parseInt(prompt("Enter a number:"));

if (isPalindrome(num)) {
    console.log(`${num} is a palindrome.`);
} else {
    console.log(`${num} is not a palindrome.`);
}
