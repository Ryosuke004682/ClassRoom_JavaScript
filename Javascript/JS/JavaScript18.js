//テキストボックスに入力された値を合計する関数
function calculateSum()
{
	const InputElements = document.getElementsByClassName("input-number");
	let sum = 0;
	
	//テキストボックスから値を取得して総和を算出
	for(let i = 0; i < InputElements.length; i++)
	{
		const InputValue = parseFloat(InputElements[i].value);
		
		//数値かどうかのチェックをし、数値ならば値の総和を算出
		if(!isNaN(InputValue))
		{
			sum += InputValue;
		} 
	}
	
	alert("合計 : " + sum);
	
}
