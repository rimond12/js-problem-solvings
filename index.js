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
    str = str.toLowerCase();
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

// console.log(isPalindrome("Madam"));
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





// problem-5: Remove duplicates from an Array
function removeDuplicates(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}
// console.log(removeDuplicates([1,2,2,3,4,4]));





// problem-6: sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4]));





// problem-7: Find even numbers in an array
function findEvenNumbers(arr) {
    let even = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}
// console.log(findEvenNumbers([1,2,3,4,5,6]));





// problem-8: Capitalize first number of each word
function capitalizeWords(str) {
    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
// console.log(capitalizeWords("hello world"));





// problem-9: Find the factorial of a number
function factorialNum(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result;
}
// console.log(factorialNum(5));





// problem-10: Pingpong challange
function pingPong() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("PingPong");
        } else if (i % 3 === 0) {
            result.push("Ping");
        } else if (i % 5 === 0) {
            result.push("Pong");
        } else {
            result.push(i);
        }
    }
    return result;
}
// console.log(pingPong().join(", "));