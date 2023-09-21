//配列に格納されている値の中から50以上の値を抜粋し、
//抜粋した値で合計値と平均値を求め、出力例通りに出力する。

var TargetArray  = [100,83,23,58,37];

var ExcerptAmount = 0;//合計値を格納する奴
var AverageScore  = 0;//平均値を格納する奴

var Over50Count   = 0;//50以上の数値が何個あるかを保管する奴。


for(var i = 0; i < TargetArray.length; i++)
{
	
	let InterPolationArray = TargetArray[i];
	
	//50以上の数値のみを加算した合計値を算出
	if(50 <= InterPolationArray)
	{
		ExcerptAmount += InterPolationArray;
		
	    Over50Count++;
	}
}

//平均値を算出。
AverageScore = ExcerptAmount / Over50Count;

alert("合計 : " + ExcerptAmount + "\n" + 
	  "平均 : " + AverageScore);

