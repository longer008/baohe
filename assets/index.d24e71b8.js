var e=Object.assign;import{p as o,a as t,o as n,c as s,w as a,b as i,d as r,r as c,e as l,f as m,t as d,u,g as p,h,i as f,j as _,k as g,l as v,m as b,n as E,q as w,_ as L,s as k,v as P,x as j,y,z as T,A as R,B as D}from"./vendor.150281c9.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,a)=>{const i=new URL(e,n);if(self[o].moduleMap[i])return t(self[o].moduleMap[i]);const r=new Blob([`import * as m from '${i}';`,`${o}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),s(c)},onload(){t(self[o].moduleMap[i]),s(c)}});document.head.appendChild(c)})),self[o].moduleMap={}}}("/assets/");const O={setup:()=>({back2top:()=>{window.scrollTo(0,0)}})},$=a("data-v-b51290aa");o("data-v-b51290aa");const z=i("i",{class:"io io-arrowup"},null,-1);t();const A=$(((e,o,t,a,i,r)=>(n(),s("div",{class:"back-to-top",role:"","data-tooltop":"回到顶部",onClick:o[1]||(o[1]=(...e)=>a.back2top&&a.back2top(...e))},[z]))));O.render=A,O.__scopeId="data-v-b51290aa";var F=r({components:{BackTop:O},setup(){const o=c({transitionName:"slide-left",theme:"night",scrollHeight:document.documentElement.scrollTop||document.body.scrollTop,isFirst:!0}),t=u(),n=l(!1);m((()=>{i(),window.addEventListener("scroll",s),window.addEventListener("resize",i)}));const s=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop;n.value=e>=700};let a=l(!1);const i=()=>{let e=document.documentElement.clientWidth||document.body.clientWidth;o.isFirst&&(e>375?(a.value=!1,t.commit("updateDevice",!1)):(a.value=!0,t.commit("updateDevice",!0)),o.isFirst=!1,setTimeout((()=>{o.isFirst=!0}),100))};p("isPhone",a);return p("provideTest","来自app.vue的provide"),e(e({},d(o)),{show2top:n})}});const M={class:"zhihu-hot"},U={class:"header"},I=g("知乎"),V=g("微博"),W=g("基金"),x=g("笑话"),B=g("关于");F.render=function(e,o,t,a,r,c){const l=_("router-link"),m=_("router-view"),d=_("back-top");return n(),s("div",{class:["main",e.theme]},[i("div",M,[i("nav",U,[i(l,{to:{path:"/zhihu"}},{default:h((()=>[I])),_:1}),i(l,{to:"weibo"},{default:h((()=>[V])),_:1}),i(l,{to:"fund"},{default:h((()=>[W])),_:1}),i(l,{to:"joke"},{default:h((()=>[x])),_:1}),i(l,{to:"about"},{default:h((()=>[B])),_:1})]),i(m),e.show2top?(n(),s(d,{key:0})):f("",!0)])],2)};function C(){const e=document.documentElement.clientWidth/375;document.documentElement.style.fontSize=37.5*Math.min(e,2)+"px"}let S;C(),window.onresize=function(){console.log("我执行了"),C()};const q={},H=function(e,o){if(!o)return e();if(void 0===S){const e=document.createElement("link").relList;S=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(o.map((e=>{if(e in q)return;q[e]=!0;const o=e.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=o?"stylesheet":S,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o?new Promise(((e,o)=>{n.addEventListener("load",e),n.addEventListener("error",o)})):void 0}))).then((()=>e()))},J=[{path:"/",redirect:"/zhihu"},{path:"/zhihu",name:"zhihu",meta:{title:"知乎"},component:()=>H((()=>__import__("./Zhihu.393ad31e.js")),["/assets/Zhihu.393ad31e.js","/assets/Zhihu.118d14aa.css","/assets/index.19cf0bc8.js","/assets/axios.e22fd0dc.js","/assets/vendor.150281c9.js"])},{path:"/weibo",name:"weibo",meta:{title:"微博"},component:()=>H((()=>__import__("./Weibo.a385741a.js")),["/assets/Weibo.a385741a.js","/assets/Weibo.7227904c.css","/assets/index.19cf0bc8.js","/assets/axios.e22fd0dc.js","/assets/vendor.150281c9.js"])},{path:"/fund",name:"fund",meta:{title:"基金"},component:()=>H((()=>__import__("./Fund.0fa7151e.js")),["/assets/Fund.0fa7151e.js","/assets/Fund.298822de.css","/assets/vendor.150281c9.js"])},{path:"/joke",name:"joke",meta:{title:"笑话"},component:()=>H((()=>__import__("./Joke.2f0e9151.js")),["/assets/Joke.2f0e9151.js","/assets/Joke.33bf4a30.css","/assets/axios.e22fd0dc.js","/assets/vendor.150281c9.js"])},{path:"/about",name:"about",meta:{title:"关于"},component:()=>H((()=>__import__("./About.3ec9ea18.js")),["/assets/About.3ec9ea18.js","/assets/About.b4a6df5c.css","/assets/vendor.150281c9.js"])}],N=v({history:b(),routes:J});var Z=E({state:{theme:"",isLogin:!1,user:{},isPhone:!1},mutations:{login(e,o){e.user=o,e.isLogin=!0},toggleTheme(e,o){console.log("store theme:",o),e.theme=o},updateDevice(e,o){e.isPhone=o}},getters:{getDevice:e=>e.isPhone}});const G=w(F),K=[D,j,P,L];[k,y,T,R].forEach((e=>{G.component(e.name,e)})),K.forEach((e=>{G.use(e)})),G.config.globalProperties.$notify=L,G.config.globalProperties.$alert=k,G.config.globalProperties.$msgbox=P,G.config.globalProperties.$message=j,G.use(N).use(Z).mount("#app"),console.log("/"),console.log(!1);console.log({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),G.config.performance=!0,console.log(G.config.performance),G.config.errorHandler=(e,o,t)=>{console.log("全局错误信息："+t),console.log(e)};
