var sPlayerFio = prompt ("Введите Ваши данные: Фамилия Имя Отчество");
console.log (sPlayerFio);
var iCredit = 4500;
console.log (iCredit);
var iBet = 0;
var iBalance = 0;
var aBlack = [2,4,6,8,10,11,13,15,17,22,24,26,28,29,31,33,35],
    aRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],
    aResult = [];
function Roll (min,max) {
	var rand = min + Math.floor(Math.random() * (max + 1 - min));
	for (var i = 0; i<aBlack.length; i++){
		if (rand == aBlack[i])
			return rand + " чёрное";
	}
	for (var a = 0; a<aRed.length; a++){
		if (rand == aRed[a])
			return rand + " красное";
	}
	return "зеро";
 };

function countNum () {
   var num = Roll(0,36);
   aResult.unshift(num);
   console.log (aResult[0] + " " + aResult[1] + " " + aResult[2]);
   console.log (aResult.length);
  }
  

 






