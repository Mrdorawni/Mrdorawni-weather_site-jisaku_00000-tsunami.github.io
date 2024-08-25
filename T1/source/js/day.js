document.getElementById("view_today").innerHTML = getToday();

function getToday() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var you = now.getDay(); //曜日(0～6=日～土)
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//曜日の選択肢
	var youbi = new Array("日","月","火","水","木","金","土");
	//出力用
	var s = mon + "月" + day + "日(" + youbi[you] + ") ";
	return s;
}