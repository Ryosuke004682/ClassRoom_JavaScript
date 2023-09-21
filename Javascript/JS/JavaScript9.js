//ランダムで抽出された値が、奇数なら「半」偶数なら「丁」の丁半博打を作る。

var RandomAmount = Math.floor(Math.random() * 100);


//偶数なら「丁」、奇数なら「半」
if(RandomAmount % 2 == 0)
{
	alert("ランダムで選ばれた値 : " + RandomAmount + "\n"
	+ "結果 : 丁");
}
else
{
	alert("ランダムで選ばれた値 : " + RandomAmount + "\n"
	+ "結果 : 半");
}