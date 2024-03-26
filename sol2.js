
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

const number = prompt("Enter a number:");

const result = checkEvenOrOdd(parseInt(number));
console.log(`The number ${number} is ${result}.`);
