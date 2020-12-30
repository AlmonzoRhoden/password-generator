// Almonzo's JavaScript

// Declaring variables for password
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// Storing values in an object acessing key values
const randomFunc = 
{
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// Adding an event listener on + generic function to specfied id tags for password generation
// Re-wrote code from arrow functions to regular
addEventListener('click', function ()
{
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	// Showing generated password to screen
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	// Storing choices 
	const typesCount = lower + upper + number + symbol;
	// Putting values into an arry to be accessed
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// Creating a for loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

// Getting a random value using Math.floor + Math. Random,
// Storing it in functions below to be re-used in program.

function getRandomLower() 
{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() 
{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber()
{
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() 
{
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}