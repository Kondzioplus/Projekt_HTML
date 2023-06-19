//zmienna i dzięki której zaczniemy odliczanie.
var i = 0;
//funkcja odliczajaca od 0.
function odliczaj(){
	i = i + 1;
	//metoda dzieki, której komunikacja miedzy plikami jest bezpieczna.
	postMessage(i);
	//globalna metoda uruchamiana po wygasnieciu licznika.
	setTimeout("odliczaj()",50);
}
//wywołanie funkcji.
odliczaj();