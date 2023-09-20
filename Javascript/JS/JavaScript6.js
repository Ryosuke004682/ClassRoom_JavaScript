/*1万円で商品を買った場合の、お釣りのお札の数と硬貨の数を各変数に代入し、
出力例通りに出力する。*/

var CurrentMoney = 10000;//現在の所持金
var Price        = 2017 ;//商品価格
var ReturnMoney  = CurrentMoney - Price;//お釣り

var DistributionMoney = ReturnMoney;//お金の配分を計算する変数


/*お金の分配*/
var Return5000Yen  = Math.floor(DistributionMoney / 5000);
DistributionMoney -= (5000 * Return5000Yen);//2983

var Return1000Yen  = Math.floor(DistributionMoney / 1000);
DistributionMoney -= (1000 * Return1000Yen);//983

var Return500Yen   = Math.floor(DistributionMoney / 500);
DistributionMoney -= (500 * Return500Yen);  //483

var Return100Yen   = Math.floor(DistributionMoney / 100);
DistributionMoney -= (100 * Return100Yen);  //83

var Return50Yen    = Math.floor(DistributionMoney / 50);
DistributionMoney -= (50 * Return50Yen);    //33

var Return10Yen    = Math.floor(DistributionMoney / 10);
DistributionMoney -= (10 * Return10Yen);    //3 

var Return5Yen     = Math.floor(DistributionMoney / 5);
DistributionMoney -= (5  * Return5Yen);     //3

var Return1Yen     = Math.floor(DistributionMoney / 1);
DistributionMoney -= (1  * Return1Yen);     //0


document.write(Return1Yen);


alert("商品価格:" + Price + "円," + "支払金額:" + CurrentMoney + "円," + "お釣り : " + ReturnMoney + "円" + "\n"
+ "5000円 : " + Return5000Yen + "枚\n"
+ "1000円 : " + Return1000Yen + "枚\n"
+ "500円  : " + Return500Yen  + "枚\n"
+ "100円  : " + Return100Yen  + "枚\n"
+ "50円   : " + Return50Yen   + "枚\n"
+ "10円   : " + Return10Yen   + "枚\n"
+ "5円    : " + Return5Yen    + "枚\n"
+ "1円    : " + Return1Yen    + "枚");
  



