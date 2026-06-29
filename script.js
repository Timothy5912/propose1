
for(let i=0;i<40;i++){let h=document.createElement('div');h.className='heart';h.innerHTML='❤';h.style.left=Math.random()*100+'vw';h.style.animationDuration=(4+Math.random()*6)+'s';h.style.fontSize=(16+Math.random()*30)+'px';document.body.appendChild(h);}
const no=document.getElementById('no');
const yes=document.getElementById('yes');
if(no){
no.onmouseover=()=>{no.style.left=Math.random()*(window.innerWidth-120)+'px';no.style.top=Math.random()*(window.innerHeight-60)+'px';let s=parseFloat(getComputedStyle(yes).fontSize);yes.style.fontSize=(s+2)+'px';}
}
