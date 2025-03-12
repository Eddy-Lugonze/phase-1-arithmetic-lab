
// Write your code here
// Define num1 and num2 for multiplication
const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // 2 * 31 = 62

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Ensures it's greater than 0

// Define num3 and num4 for modulus operation
const num3 = 24;
const num4 = 5;
const mod = num3 % num4; // 24 % 5 = 4

// Find the maximum number in a set
const max = Math.max(1, 5, 10, 15, 20); // Highest number is 20

// Export variables if required for testing
module.exports = { multiply, random, mod, max };
