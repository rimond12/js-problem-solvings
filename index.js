// problem-1: Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("hello"));


// problem-2: Count vowels in a string
function countVowels(str) {
    let Vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (Vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("programming"));

// problem-3: Check for palindrome
function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));


// problem-4: Find the maximum number 
function findMaxNum(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// console.log(findMaxNum([5, 1, 9, 3]));
