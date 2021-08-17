let i = 1;
let j = 1;
let k = 1;
let temp=1;
let strip = 2;
let strip2 = 3;
let strip3 = 1;
let now=0; //[12]
let score=0;

const sekarang = document.getElementById('sekarang');
function multiply(){
	const multiplied_by =document.getElementsByClassName('span-belt')

	try{
	let numb=multiplied_by[12].innerHTML
	} catch (e)
	{ alert("Sabar tunggu angka sampai tombol ^_^") }
	let numb=multiplied_by[12].innerHTML
	if (numb!='-'){
		now=now*parseFloat(numb);
		console.log(now);
	}
	sekarang.innerHTML=now;
}
function plus(){
	const plus_by =document.getElementsByClassName('span-belt2')
	
	try{
	let numb=plus_by[12].innerHTML
	} catch (e)
	{ alert("Sabar tunggu angka sampai tombol ^_^") }
	let numb=plus_by[12].innerHTML
	if (numb!='-'){
		now=now+parseFloat(numb);
		console.log(now);
	}
	sekarang.innerHTML=now;
}
function minus(){
	const minus_by =document.getElementsByClassName('span-belt3')
	
	try{
	let numb=minus_by[12].innerHTML
	} catch(e) { 
		alert("Mulai dulu kakak. Kalo sudah sabar, tunggu angka sampai tombol") 
	}
	let numb=minus_by[12].innerHTML
	if (numb!='-'){
		now=now-parseFloat(numb);
		console.log(now);
	}
	sekarang.innerHTML=now;
}


function start(){

	const target = document.getElementById('target');
	let angkaTarget = (Math.floor(Math.random()*9)+1)*(Math.floor(Math.random()*9)+1);
	target.innerHTML = angkaTarget ;
	setInterval(()=>{
		if(now==angkaTarget){
			score++;
			const total=document.getElementById('total');
			total.innerHTML = score ;
			angkaTarget = (Math.floor(Math.random()*9)+1)*(Math.floor(Math.random()*9)+1);
			target.innerHTML = angkaTarget;
		}
	},1000)



	const belt = document.getElementById('belt');
	console.log(belt);
	setInterval(()=>{
		const elemen=document.getElementsByTagName('span')
		temp++;
	},1000)

	setInterval(()=>{
	    const span = document.createElement('span');
	    if (i==strip){
	        span.innerText = Math.floor(Math.random()*9)+0;
	        i=1;
	        banyak();
	    }else{
	        span.innerText = '-';
	        i++;
	    }
	    belt.appendChild(span);
	    span.classList.add('span-belt')
		belt.insertBefore(span,belt.childNodes[0]);
		
	},1000);

	const belt2 = document.getElementById('belt2');
	console.log(belt2);
	setInterval(()=>{
	    const span = document.createElement('span');
	    if (j==strip2){
	        span.innerText = Math.floor(Math.random()*9)+0;
	        j=1;
	        banyak2();
	    }else{
	        span.innerText = '-';
	        j++;
	    }
	    belt2.appendChild(span);
		span.classList.add('span-belt2')
	    belt2.insertBefore(span,belt2.childNodes[0]);
	},1000);

	const belt3 = document.getElementById('belt3');
	console.log(belt3);

	setInterval(()=>{
	    const span = document.createElement('span');
	    if (k==strip3){
	        span.innerText = Math.floor(Math.random()*9)+0;
	        k=1;
	        banyak3();
	    }else{
	        span.innerText = '-';
	        k++;
	    }
	    belt3.appendChild(span);
		span.classList.add('span-belt3')
		belt3.insertBefore(span,belt3.childNodes[0]);
	},1000);

}


function banyak(){
    strip = Math.floor(Math.random()*6)+2;
    return strip;
}

function banyak2(){
    strip2 = Math.floor(Math.random()*6)+2;
    return strip2;
}

function banyak3(){
    strip3 = Math.floor(Math.random()*6)+2;
    return strip3;
}