(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))r(p);new MutationObserver(p=>{for(const i of p)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function x(p){const i={};return p.integrity&&(i.integrity=p.integrity),p.referrerPolicy&&(i.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?i.credentials="include":p.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(p){if(p.ep)return;p.ep=!0;const i=x(p);fetch(p.href,i)}})();const u=document.querySelector("#app"),B=[{id:1,img:"1",text:"Hey dear loml!!!!",textPos:{width:"278px",height:"96px",top:"139px",fontSize:"40px"},imgPos:{width:"297px",height:"318px",left:"166px",top:"34px"},yesBtn:{text:"Continue",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:2,img:"2",text:"I need to ask u smthng...",textPos:{width:"278px",height:"96px",top:"139px",fontSize:"40px"},imgPos:{width:"317px",height:"317px",left:"154px",top:"35px"},yesBtn:{text:"Continue",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:3,img:"3",text:"ts is really important so please take it serious!!",textPos:{width:"544px",height:"96px",top:"140px",fontSize:"40px"},imgPos:{width:"323px",height:"270px",left:"150px",top:"35px"},yesBtn:{text:"Continue",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:4,img:"4",text:"so... the question is...",textPos:{width:"544px",height:"48px",top:"142px",fontSize:"40px"},imgPos:{width:"302px",height:"302px",left:"165px",top:"55px"},yesBtn:{text:"Continue",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:5,img:"5",text:"will you be my valentine??",textPos:{width:"544px",height:"96px",top:"142px",fontSize:"40px"},imgPos:{width:"237px",height:"307px",left:"197px",top:"53px"},yesBtn:{text:"Yes",left:"159px",top:"604px",width:"143px",height:"60px"},noBtn:{text:"No",left:"322px",top:"604px",width:"143px",height:"60px",locked:!0},type:"choice"},{id:61,img:"61",text:"u didnt even checked the options",textPos:{width:"482px",height:"96px",top:"145px",fontSize:"40px"},imgPos:{width:"253px",height:"323px",left:"192px",top:"38px"},yesBtn:{text:"Yes",left:"159px",top:"593px",width:"143px",height:"60px",locked:!0},noBtn:{text:"NO!",left:"322px",top:"583px",width:"160px",height:"80px",fontSize:"24px"},type:"persuasion"},{id:6,img:"62",text:"i knew that u r cruel, but never knew it was coming...",textPos:{width:"544px",height:"96px",top:"142px",fontSize:"40px"},imgPos:{width:"351px",height:"351px",left:"140px",top:"19px"},yesBtn:{text:"I changed my mind",left:"159px",top:"580px",width:"160px",height:"70px",fontSize:"20px",locked:!0},noBtn:{text:"I SAID NO!",left:"350px",top:"600px",width:"100px",height:"40px",fontSize:"14px"},type:"persuasion"},{id:7,img:"7",text:"ur breaking my heart 💔",textPos:{width:"411px",height:"93px",top:"137px",fontSize:"40px"},imgPos:{width:"428px",height:"241px",left:"98px",top:"95px"},yesBtn:{text:"pls say yes...",left:"130px",top:"570px",width:"200px",height:"90px",fontSize:"26px",locked:!0},noBtn:{text:"NO.",left:"370px",top:"610px",width:"60px",height:"30px",fontSize:"12px"},type:"persuasion"},{id:8,img:"8",text:"this cant be true.... 🥺 i just dont get it",textPos:{width:"411px",height:"93px",top:"137px",fontSize:"40px"},imgPos:{width:"230px",height:"323px",left:"211px",top:"22px"},yesBtn:{text:"maybe now...",left:"100px",top:"550px",width:"260px",height:"110px",fontSize:"32px",locked:!0},noBtn:{text:"i had my word",left:"400px",top:"620px",width:"56px",height:"27px",fontSize:"10px"},type:"persuasion"},{id:9,img:"9",text:"im giving u one last shot choose wisely...",textPos:{width:"522px",height:"93px",top:"120px",fontSize:"40px"},imgPos:{width:"226px",height:"304px",left:"192px",top:"32px"},yesBtn:{text:"just press the damn button!!",left:"60px",top:"520px",width:"350px",height:"150px",fontSize:"48px",locked:!0},noBtn:{text:"keep dreaming",left:"440px",top:"630px",width:"53px",height:"27px",fontSize:"10px"},type:"persuasion"},{id:10,img:"10",text:"ur leaving me no choice.",textPos:{width:"300px",height:"150px",top:"-100px",left:"40px",fontSize:"40px"},imgPos:{width:"250px",height:"250px",left:"340px",top:"50px"},yesBtn:{text:"YES HONEY, ofc im in!!!!",left:"-25px",top:"305px",width:"680px",height:"360px",fontSize:"48px"},type:"final-choice"},{id:11,img:"11",text:"girl.. u know u cooked right?",textPos:{width:"522px",height:"93px",top:"120px",fontSize:"40px"},imgPos:{width:"350px",height:"320px",left:"137px",top:"17px"},yesBtn:{text:"yeah/ whatever...",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:12,img:"12",text:"yeii!!! im the happiest man alive",textPos:{width:"522px",height:"93px",top:"133px",fontSize:"40px"},imgPos:{width:"335px",height:"335px",left:"161px",top:"9px"},yesBtn:{text:"Continue",left:"152px",top:"604px",width:"320px",height:"60px"},type:"continue"},{id:13,img:"13",text:"buckle up!!! and get ready to shine with ur gorgeousness 14 feb 16:00",textPos:{width:"482px",height:"96px",top:"145px",fontSize:"35px"},imgPos:{width:"253px",height:"323px",left:"192px",top:"38px"},yesBtn:{text:"Finish",left:"152px",top:"604px",width:"320px",height:"60px"},final:!0}];let n=0;function d(l){const t=B[l];if(!t)return;const x=document.createElement("div");x.className="slide-container";const r=Math.min(window.innerWidth/800,window.innerHeight/800,1);x.style.transform=`scale(${r})`,window.addEventListener("resize",()=>{const e=Math.min(window.innerWidth/800,window.innerHeight/800,1);x.style.transform=`scale(${e})`});const p=`
    <div class="ellipse-bg"></div>
    <div class="card">
        <div class="illu-container">
            <!-- LUV ICON REMOVED -->
            <div class="kiss-icon" id="kiss-${l}"></div>
        </div>
        
        <!-- Photo -->
        <div class="photo" style="
            width: ${t.imgPos.width};
            height: ${t.imgPos.height};
            left: ${t.imgPos.left};
            top: ${t.imgPos.top};
            background-image: url('/assets/${t.img}.jpg');
        "></div>

        <!-- Text -->
        <div class="text-content" style="
            width: ${t.textPos.width};
            height: ${t.textPos.height};
            top: calc(50% - ${t.textPos.height}/2 + ${t.textPos.top});
            left: ${t.textPos.left?t.textPos.left:`calc(50% - ${t.textPos.width}/2)`};
            font-size: ${t.textPos.fontSize||"40px"};
        ">
            ${t.text}
        </div>

         <button class="btn btn-yes" id="btn-yes" style="
            left: ${t.yesBtn.left};
            top: ${t.yesBtn.top};
            width: ${t.yesBtn.width};
            height: ${t.yesBtn.height};
            font-size: ${t.yesBtn.fontSize||"18px"};
            position: absolute;
        ">
            ${t.yesBtn.text}
        </button>

        ${t.noBtn?`
        <button class="btn btn-no" id="btn-no" style="
            left: ${t.noBtn.left};
            top: ${t.noBtn.top};
            width: ${t.noBtn.width};
            height: ${t.noBtn.height};
            font-size: ${t.noBtn.fontSize||"18px"};
            position: absolute;
        ">
            ${t.noBtn.text}
        </button>
        `:""}
    </div>
  `;x.innerHTML=p,u.innerHTML="",u.appendChild(x);const i=e=>{const a=e.getBoundingClientRect(),m=a.width,w=a.height,f=624-m-20,g=552-w-20,y=e.offsetLeft,P=e.offsetTop;let s=Math.random()*f,h=Math.random()*g;Math.abs(s-y)<150&&(s=(s+f/2)%f),Math.abs(h-P)<150&&(h=(h+g/2)%g),s=Math.max(20,Math.min(s,f)),h=Math.max(20,Math.min(h,g)),e.style.left=`${s}px`,e.style.top=`${h}px`},o=document.getElementById("btn-yes");if(o&&(t.yesBtn&&t.yesBtn.locked?(o.addEventListener("mouseover",()=>i(o)),o.addEventListener("touchstart",e=>{e.preventDefault(),i(o)}),o.addEventListener("click",e=>{e.preventDefault(),i(o)})):o.addEventListener("click",()=>{const e=document.getElementById(`kiss-${l}`);e&&(e.style.opacity=1),t.type==="continue"||t.type==="final-choice"?(n++,d(n)):t.final?alert("luv u💕"):(n++,d(n))})),t.noBtn){const e=document.getElementById("btn-no");t.noBtn&&t.noBtn.locked?(e.addEventListener("mouseover",()=>i(e)),e.addEventListener("touchstart",c=>{c.preventDefault(),i(e)}),e.addEventListener("click",c=>{c.preventDefault(),i(e)})):e.addEventListener("click",()=>{t.id===5?(n=5,d(n)):t.type==="persuasion"&&(n++,d(n))})}}d(0);
