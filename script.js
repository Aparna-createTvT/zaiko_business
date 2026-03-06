
const switcher=document.getElementById("currencySwitch");
if(switcher){
const prices=document.querySelectorAll(".price");

switcher.addEventListener("change",function(){
let currency=this.value;

prices.forEach(price=>{
if(price.dataset.usd){
if(currency==="usd"){price.innerText="$"+price.dataset.usd}
if(currency==="inr"){price.innerText="₹"+price.dataset.inr}
}
});
});
}

const canvas=document.getElementById("chart");
if(canvas){
const ctx=canvas.getContext("2d");

const data=[200,400,350,500,650,700];

ctx.beginPath();
ctx.moveTo(0,300-data[0]);

for(let i=1;i<data.length;i++){
ctx.lineTo(i*100,300-data[i]);
}

ctx.stroke();
}
