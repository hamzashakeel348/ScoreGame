
var p1button=document.querySelector("#p1");
var h1=document.querySelector("#p1display");
var p2button=document.querySelector("#p2");
var h2=document.querySelector("#p2display");
var re=document.querySelector("#res");
var num=document.querySelector("input");
var winning=document.querySelector("p span");
var winningscore=5;
var game=false;
var p2=0;
var p1=0;
p1button.addEventListener("click",function(){
if(!game)
{
	p1++;
	h1.textContent=p1;

if(p1===winningscore)
{
	h1.classList.add("winner1");
	game=true;
}
}
});

p2button.addEventListener("click",function(){
	if(!game)
	{
	p2++;
	h2.textContent=p2;
if(p2===winningscore)
{
	game=true;
	h2.classList.add("winner2");
}
}
});
function reset()
{
	p1=0;
	h1.textContent=0;
	h1.classList.remove("winner1");
	p2=0;
	h2.textContent=0;
	h2.classList.remove("winner2");
	game=false;
}
re.addEventListener("click",function(){
reset();
})
num.addEventListener("change",function(){
	winning.textContent=num.value;
	winningscore=Number(num.value);
	reset();
})
if(game)
{
	alert("game ends");
}
