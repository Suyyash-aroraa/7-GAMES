class t{constructor(t,e){this.bottomLeft=[t,e],this.bottomRight=[t+100,e],this.topLeft=[t,e+20],this.topRight=[t+100,e+20]}}const e=[];var o=window.matchMedia("(max-width: 700px)");if(window.matchMedia("(max-width: 500px)").matches){for(let o=270;o>150;o-=30)for(let s=10;s<300;s+=60)e.push(new t(s,o));var s=[130,20]}else if(o.matches){for(let o=270;o>150;o-=30)for(let s=10;s<360;s+=75)e.push(new t(s,o));s=[170,20]}else for(let o=270;o>150;o-=30)for(let c=10;c<500;c+=110){e.push(new t(c,o));s=[230,20];var l=[270,40]}var c=l,n=s;!function(){for(let t=0;t<20;t++){const o=document.createElement("div");o.classList.add("block"),document.querySelector(".game").appendChild(o),o.style.left=e[t].bottomLeft[0]+"px",o.style.bottom=e[t].bottomLeft[1]+"px"}}();const a=document.createElement("div");function d(){i.style.left=c[0]+"px",i.style.bottom=c[1]+"px"}a.classList.add("user"),a.style.left=n[0]+"px",a.style.bottom=n[1]+"px",document.querySelector(".game").appendChild(a),document.addEventListener("keydown",(function(t){switch(t.key){case"ArrowLeft":0!==n[0]&&(n[0]-=10,a.style.left=n[0]+"px");break;case"ArrowRight":460!==n[0]&&(n[0]+=10,a.style.left=n[0]+"px")}}));const i=document.createElement("div");i.classList.add("ball"),d(),document.querySelector(".game").appendChild(i),setInterval((function(){c[0]+=2,c[1]+=2,d()}),30);