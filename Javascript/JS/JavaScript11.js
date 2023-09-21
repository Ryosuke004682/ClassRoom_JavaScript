//配列に格納されてるあたいの合計値と平均値を、For文を使って算出して、
//出力例通りに出力する。

var TargetArray  = [100,83,23,58,37];
var ResultScore  = 0;
var AverageScore = 0;

//配列の要素の総和を求める
for(var i = 0; i < TargetArray.length; i++)
{
	ResultScore += TargetArray[i];
} 

//平均を求める
AverageScore = ResultScore / TargetArray;

alert("合計 : " + ResultScore + "\n" 
    + "平均 : " + AverageScore);