const prices={
rice:60,
milk:30,
bread:40,
tea:120,
drink:50
};

function changeQty(item,value){

let qty=document.getElementById(item);

let current=Number(qty.value);

current=current+value;

if(current<0)
current=0;

qty.value=current;

document.getElementById(item+"Total").innerHTML="₹"+(current*prices[item]);

calculate();

}

function calculate(){

let total=0;

for(let item in prices){

total+=Number(document.getElementById(item).value)*prices[item];

}

document.getElementById("grandTotal").innerHTML="Grand Total : ₹"+total;

}

function summary(){

let total=0;

for(let item in prices){

total+=Number(document.getElementById(item).value)*prices[item];

}

document.getElementById("result").innerHTML=

"<hr><h2>Order Summary</h2>"+
"<p><b>Customer:</b> "+document.getElementById("name").value+"</p>"+
"<p>Total Amount: <b>₹"+total+"</b></p>"+
"<h3 style='color:green'>Thank You for Shopping!</h3>";

}