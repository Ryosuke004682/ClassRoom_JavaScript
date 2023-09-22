
//ランダムな整数を作成する関数
function getRandomNumber()
{
	return Math.floor(Math.random() * 3);
}

//判定結果を表示する関数
function checkRandomValue()
{
	 const HTML_RadioButtons = document.getElementsByName("option");
	 let       SelectedValue = null;
	
	 //選択されたラジオボタンの値を取得
	 for(const RadioButton of HTML_RadioButtons)
	 {
		if(RadioButton.checked)
		{
			SelectedValue = RadioButton.value;
			break;
		}
	 }
	
	 if(SelectedValue === null)
	 {
		alert("ラジオボタン未選択エラー");
		return;
	 }
	
	 const RandomValue = getRandomNumber();
	 
	 //入力値と、ランダムで出力された値が一致しているかどうかのチェック
	 if(parseInt(SelectedValue) === RandomValue)
	 {
	    alert("当たり\n正解 : " + RandomValue);		 
	 }
	 else
	 {
		alert("外れ\n正解 : " + RandomValue);
	 }
	 
}
