import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const t=document.querySelector(".ms"),i=document.querySelector(".fulfilled"),r=document.querySelector(".rejected"),d=document.querySelector(".buttonnotification");let e="",o="",l="",c;t.addEventListener("change",()=>{e=t.value,u()});function u(){e=t.value,e===""?s.show({color:"yellow",message:"Будь ласка, введіть значення в поле Delay (ms)",position:"topCenter"}):e<0?s.show({color:"yellow",message:"Delay (ms) має бути 0 або більше",position:"topCenter"}):c=parseInt(e)}i.addEventListener("change",()=>{o=i.value,console.log(o)});r.addEventListener("change",()=>{l=r.value});d.addEventListener("click",()=>{event.preventDefault(),e=t.value,c=parseInt(e),new Promise((n,a)=>{setTimeout(()=>{if(o=="fulfilled")n(`Fulfilled promise in ${e}ms`);else if(l=="rejected")a(`Rejected promise in ${e}ms`);else if(!o&&!l){s.show({color:"yellow",message:"Будь ласка виберіть радіокнопку Fulfilled чи Rejected",position:"topCenter"});return}},c)}).then(n=>{s.show({color:"green",message:n,position:"topCenter"}),t.value="",i.checked=!1,r.checked=!1,o="",l=""}).catch(n=>{s.show({color:"red",message:`Rejected promise in ${e}ms`,position:"topCenter"}),t.value="",i.checked=!1,r.checked=!1,o="",l=""})});
//# sourceMappingURL=commonHelpers2.js.map