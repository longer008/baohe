var e=Object.assign;import{_ as a}from"./axios.e22fd0dc.js";import{r as t,f as s,e as o,t as n,K as c,p as l,a as d,o as p,c as r,F as i,L as x,b as m,w as u}from"./vendor.150281c9.js";var j={setup(){const{proxy:l}=c(),d=t({loading:!1,text:""}),p=async()=>{d.loading=!0;let e=await a({url:"/jokeApi/xh?type=json",method:"get"});d.text=e.joke};s((()=>{p()}));const r=o(null);return e(e({},n(d)),{jokeText:r,handleCopy:()=>{r.value.select(),document.execCommand("copy"),l.$notify({type:"success",title:"成功",message:"复制成功"})}})}};const v=u("data-v-4c4649d4");l("data-v-4c4649d4");const y={class:"joke-container"},h=m("h3",null,"开心一刻(点击下面文本复制)",-1),f=m("img",{src:"https://api.vvhan.com/api/ip",alt:"天气"},null,-1);d();const k=v(((e,a,t,s,o,n)=>(p(),r("div",y,[h,i(m("textarea",{ref:"jokeText","onUpdate:modelValue":a[1]||(a[1]=a=>e.text=a),class:"joke-text",onClick:a[2]||(a[2]=(...e)=>s.handleCopy&&s.handleCopy(...e))},null,512),[[x,e.text]]),f]))));j.render=k,j.__scopeId="data-v-4c4649d4";export default j;
