var Name = prompt("이름을 입력해주세요 : ");

var Score = prompt("0부터 100까지의 점수를 입력해주세요 : ");

if (Score >= 95 && Score <=100) {
  document.write(`${Name}의 등급은 A+ 입니다`);
}
else if (Score >= 90 && Score <95) {
  document.write(`${Name}의 등급은 A 입니다`);
}
else if (Score >= 85 && Score <90) {
  document.write(`${Name}의 등급은 B+ 입니다`);
}
else if (Score >= 80 && Score <85) {
  document.write(`${Name}의 등급은 B 입니다`);
}
else if (Score >= 75 && Score <80) {
  document.write(`${Name}의 등급은 C+ 입니다`);
}
else if (Score >= 70 && Score <75) {
  document.write(`${Name}의 등급은 C 입니다`);
}
else if (Score >= 65 && Score <70) {
  document.write(`${Name}의 등급은 D+ 입니다`);
}
else if (Score >= 60 && Score <65) {
  document.write(`${Name}의 등급은 D 입니다`);
}
else {
  document.write(`${Name}의 등급은 F 입니다`);
}
