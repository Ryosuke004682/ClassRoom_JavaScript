//配列からランダムに選択したキーと、選択したキーに対する連想配列を出力

var AssosiativeArray = 
{
	key1:10,
	key2:20,
	key3:30
}

var array = ["key1" , "key2" , "key3"];

var RandomElement = Math.floor(Math.random() * array.length);
var RandomKey     = array[RandomElement];
var RandomValue   = AssosiativeArray[RandomKey];

alert("ランダムで選ばれた" + RandomElement +"番目のキー : " + RandomKey + ", 値 : " + RandomValue);