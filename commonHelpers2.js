import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const i=document.querySelector(".ms"),r=document.querySelector(".fulfilled"),c=document.querySelector(".rejected"),m=document.querySelector(".buttonnotification");let e="",t="",n="",l;i.addEventListener("change",()=>{e=i.value,d()});function d(){e=i.value,e===""?o.show({color:"yellow",message:"Будь ласка, введіть значення в поле Delay (ms)",position:"topCenter"}):e<0?o.show({color:"yellow",message:"Delay (ms) має бути 0 або більше",position:"topCenter"}):l=parseInt(e)}r.addEventListener("change",()=>{t=r.value,console.log(t)});c.addEventListener("change",()=>{n=c.value});m.addEventListener("click",()=>{l=parseInt(e),new Promise((s,a)=>{setTimeout(()=>{if(t=="fulfilled")s(`Fulfilled promise in ${e}ms`);else if(n=="rejected")a(`Rejected promise in ${e}ms`);else if(!t&&!n){o.show({color:"yellow",message:"Будь ласка виберіть радіокнопку Fulfilled чи Rejected",position:"topCenter"});return}},l)}).then(s=>{o.show({color:"green",message:`Rejected promise in ${e}ms`,position:"topCenter"})}).catch(s=>{o.show({color:"red",message:`Rejected promise in ${e}ms`,position:"topCenter"})})});
//# sourceMappingURL=commonHelpers2.js.map