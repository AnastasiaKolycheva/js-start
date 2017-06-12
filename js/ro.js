var ACTIVE_CHIP_CLASS = "active_chip";
var sPlayerFio = prompt ("Введите Ваши данные: Фамилия Имя Отчество");
console.log (sPlayerFio);
var iCredit = 4500;
console.log (iCredit);
var iBet = 0;
var iBalance = 0;
var aBlack = [2,4,6,8,10,11,13,15,17,22,24,26,28,29,31,33,35],
    aRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],
    aResult = [];
var divChips = document.querySelector(".chips");
console.dir(divChips);
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
   for (var i = 0; i<aResult.length; i++){
		if (i == 10) 
		aResult.pop(num);
	}
  var strLine = aResult.join(" "),
      strLine = strLine.replace (/зеро/g, 0),
      strLine2 = /\D+/g,
      strLine = strLine.replace(strLine2, ',');
  console.log (strLine);
  var aLine = strLine.split(',');
     undef (aLine[0],1);
     undef (aLine[1],2);
     undef (aLine[2],3);
     undef (aLine[3],4);
     undef (aLine[4],5);
     undef (aLine[5],6);
     undef (aLine[6],7);
     undef (aLine[7],8);
     undef (aLine[8],9);
     undef (aLine[9],10);
   };
 
 function undef (a,b) {
 	if (a != undefined) {
  	  var doc=document.getElementById(b);
      doc.innerHTML=a;
    }
   for (var i = 0; i<aBlack.length; i++){
		if (a == aBlack[i]) {
		 doc.style.color = "white";
		 doc.style.background = "black";
		}
	  if (a == 0) {
	  	doc.style.color = "yellow";
	  	doc.style.background = "darkgreen";
	  }
	}
	for (var i = 0; i<aRed.length; i++){
		if (a == aRed[i]){
		doc.style.color = "black";
		doc.style.background = "red";
	}
  }
};

 /*var arChips = divChips.children,
    iChips = arChips.length;
 if (iChips > 0){
 	for (var i = 0; i< iChips; i++){
 		arChips[i].addEventListener("click",makeActive);
 	}
 }*/

/*function makeActive(event){
	var ifActive = checkActive(event.target);
	if(!ifActive){
		var className = event.target.className;
		event.target.className = ACTIVE_CHIP_CLASS;
	}
}
function checkActive(node){
	if(!node) return false;
	var arClass = node.className.split(" ");
	return (arClass.indexOf(ACTIVE_CHIP_CLASS) !== -1);
}*/







  


 






