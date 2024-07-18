"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	} else if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d < 0) {
		arr = [];
	}
	return arr;	
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const creditInterest = parseInt(percent) / 12 / 100;
	const initialPayment = parseInt(contribution);
	const amountCredit = parseInt(amount);
	const months = parseInt(countMonths);
	
	if (isNaN(creditInterest) || creditInterest < 0) {
		return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
	} else if (isNaN(initialPayment) || initialPayment < 0) {
		return (`Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`);
	} else if (isNaN(amountCredit || amountCredit < 0)) {
		return (`Параметр "Сумма кредита" содержит неправильное значение ${amount}`);
	} else if (isNaN(months) || months < 0) {
		return (`Параметр "Срок в месяцах" содержит неправильное значение ${countMonths}`);
	}
	
	const loanBody = amount - contribution;
	const payment = loanBody * (creditInterest + (creditInterest / (((1 + creditInterest) ** months) - 1)));
	const totalAmount = (payment * months).toFixed(2);
	return +totalAmount;  
}