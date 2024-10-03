var myCharacter = {
  shape: "cat_01.gif",
  name: "모모냥",
  hp: 1,
  food: "생선",
};
document.write(
  `<img src="./img/${myCharacter.shape}" alt="캐릭터 이미지", style="width:300px;"/>`
);
document.write(`<h3>캐릭터 이름 : ${myCharacter.name}</h3>`);
document.write(`<h3>캐릭터 HP : ${myCharacter.hp}</h3>`);
document.write(
  `<h3>좋아하는 음식은 ${myCharacter.food} 입니다</h3>`
);