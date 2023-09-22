/*引数に渡された配列の中の最大値を戻す関数を作成し、
引数の中から最大値を見つけ出し、呼び出し元へ返した値を出力する。*/

const array = [30,23,13,49,42];
const maxValue = 0;

function getMaxValue(nums)
{	
	//配列内の最大値を求める
	for(let i = 0; i < array.length; i++)
	{
		if(nums  < array[i])
		{
			nums = array[i];
		}		
	}
	
	return nums;
} 


alert("配列30,23,19,49,42の最大値 : " + getMaxValue(maxValue));
