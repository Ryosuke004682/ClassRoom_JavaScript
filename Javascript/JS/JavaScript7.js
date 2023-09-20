//配列の要素数をランダムで一つ要素を選び、出力例通りに出力する。

var array = [10,20,30,40,50];

var RandomElements = Math.floor(Math.random() * array.length);//ランダムで要素数を取得
var RandomValue    = array[RandomElements];

alert(RandomElements + "番目の値" + RandomValue +  "がランダムで選ばれた");