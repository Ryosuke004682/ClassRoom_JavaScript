var RandomAge = Math.floor(Math.random() * 100);


if(0 <= RandomAge && RandomAge <= 19)
{
	alert(RandomAge + "歳は、" + 1000 + "円");
}
else if(20 <= RandomAge && RandomAge <= 80)
{
	alert(RandomAge + "歳は、" + 2000 + "円");
}
else
{
	alert(RandomAge + "歳は無料");
}