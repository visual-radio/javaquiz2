var num1 = "12,000";
var num2 = "24,000";

var parsedNum1 = parseInt(num1.replace(",", ""));
var parsedNum2 = parseInt(num2.replace(",", ""));
sum = parsedNum1 + parsedNum2;


document.write(`현재 총 구입 금액은 ${sum}원 입니다.`);