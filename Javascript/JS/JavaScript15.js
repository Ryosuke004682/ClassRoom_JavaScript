const FirstNumber  = 10; 
const SecondNumber = 20;
//const SecondNumber = 5;

 
//num1と、num2の間の数値の総和を算出。
function sum(num1 , num2)
{
	let InterpolationAmount = 0; //総和を保管しておく変数
	
   for(let i = num1; i <= num2; i++)
   {
	   InterpolationAmount += i;
   }	
   
   return InterpolationAmount;
}


/* SecondNumberの方が小さかった場合エラー。
それ以外は、FirstNumberとSecondNumberの間の総和を表示 */

if(SecondNumber < FirstNumber)
{
	alert("引数num1 : "+ FirstNumber + ",引数num2 : " + SecondNumber + "\n" + "引数エラー");
}
else
{
	alert("引数num1 : "+ FirstNumber + ",引数num2 : " + SecondNumber + "\n" 
+ FirstNumber + "から" + SecondNumber + "の" + "合計 : " + sum(FirstNumber , SecondNumber));
}