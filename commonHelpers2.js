import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const t=document.querySelector(".ms"),i=document.querySelector(".fulfilled"),n=document.querySelector(".rejected"),d=document.querySelector(".buttonnotification");let e="",s="",r="",c;t.addEventListener("change",()=>{e=t.value,m()});function m(){e=t.value,e===""?o.show({color:"yellow",message:"Будь ласка, введіть значення в поле Delay (ms)",position:"topCenter"}):e<0?o.show({color:"yellow",message:"Delay (ms) має бути 0 або більше",position:"topCenter"}):c=parseInt(e)}i.addEventListener("change",()=>{s=i.value,console.log(s)});n.addEventListener("change",()=>{r=n.value});d.addEventListener("click",()=>{c=parseInt(e),new Promise((l,a)=>{event.preventDefault(),setTimeout(()=>{if(s=="fulfilled")l(`Fulfilled promise in ${e}ms`);else if(r=="rejected")a(`Rejected promise in ${e}ms`);else if(!s&&!r){o.show({color:"yellow",message:"Будь ласка виберіть радіокнопку Fulfilled чи Rejected",position:"topCenter"});return}},c)}).then(l=>{o.show({color:"green",message:`Fulfilled promise in ${e}ms`,position:"topCenter"}),t.value="",i.checked=!1,n.checked=!1}).catch(l=>{o.show({color:"red",message:`Rejected promise in ${e}ms`,position:"topCenter"})})});
//# sourceMappingURL=commonHelpers2.js.map
