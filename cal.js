let num1 = parseInt(prompt("Enter First Number"))
let num2 = parseInt(prompt("Enter second Number"))
operator = prompt("Select operation: +, -, /, *, **, %")

if (operator === "+") {
    alert("Your answer is" + (num1+num2))
} else if (operator === "-") {
    alert("Your answer is" + (num1-num2)) 
} else if (operator === "/") {
    alert("Your answer is" + (num1/num2)) 
} else if (operator === "*") {
    alert("Your answer is" + (num1*num2)) 
} else if (operator === "**") {
    alert("Your answer is" + (num1**num2)) 
} else if (operator === "%") {
    alert("Your answer is" + (num1%num2)) 
} else {
    alert("Invalid Operation. Try Again.")
}