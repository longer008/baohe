var e=Object.assign;import{g as t}from"./index.19cf0bc8.js";import{d as s,s as n,v as a,x as o,y as i,f as l,c as r,b as c,g as d,z as w,A as p,B as f,C as m,D as u,r as h,o as b,t as g,e as x,F as I,E as v}from"./vendor.7f8e8a8b.js";import"./axios.e22fd0dc.js";var y=s({props:{index:{type:Number,default:0},hasNewsImg:{type:Boolean,default:!1},newsInfo:{type:Object,default:null}},setup(){let e=a("isPhone");return n(e,(e=>{console.log(e)})),{isPhone:e}}});const k=u("data-v-45bca499");o("data-v-45bca499");const j={key:0,class:"is-new"},_={class:"hot-box"},L=c("i",{class:"io io-huo"},null,-1),P=c("span",{class:"share-box common-pointer"},[c("i",{class:"io io-sharearrow"}),d(" 分享")],-1);i();const C=k(((e,t,s,n,a,o)=>(l(),r("div",{class:"news",style:0===e.index?{borderTop:"1px solid var(--border-color)"}:""},[c("div",{class:["news-number",e.index<3?"top-three-num":"other-num"]},[d(w(e.index+1)+" ",1),e.newsInfo.debut?(l(),r("div",j,"新")):p("",!0)],2),c("a",{href:e.newsInfo.target.url.replace("api","www").replace("questions","question"),rel:"noopener noreferrer","data-za-not-track-link":"true",class:"news-info",style:""===e.newsInfo.children[0].thumbnail?e.isPhone?{maxWidth:"342px"}:{width:"621px"}:""},[c("h2",{class:"news-title common-pointer",title:e.newsInfo.target.title},w(e.newsInfo.target.title),9,["title"]),c("p",{title:e.newsInfo.target.title,class:["news-desc common-pointer",e.newsInfo.target.title.length>22&&""!==e.newsInfo.children[0].thumbnail||e.newsInfo.target.title.length>33&&""===e.newsInfo.children[0].thumbnail?"text-overflow":"multiLine multline"]},w(e.newsInfo.target.excerpt),11,["title"]),f(c("div",_,[c("span",null,[L,d(w(e.newsInfo.detail_text),1)]),P],512),[[m,!e.isPhone]])],12,["href"]),e.newsInfo.children[0].thumbnail?(l(),r("a",{key:0,href:"",class:"news-img common-pointer",title:e.newsInfo.target.title},[c("img",{src:e.newsInfo.children[0].thumbnail,alt:"",srcset:""},null,8,["src"])],8,["title"])):p("",!0)],4))));y.render=C,y.__scopeId="data-v-45bca499";var q=s({components:{Card:y},setup(){const s=h({params:{limit:50,desktop:!0},loading:!1,newList:[]});b((()=>{n()}));const n=async(e=s.params)=>{s.loading=!0;const n=await t(e);s.params=e;let a=n.data;s.newList=a,s.loading=!1};return e({},g(s))}});const z=u("data-v-11860458");o("data-v-11860458");const B={class:"hot-list"};i();const N=z(((e,t,s,n,a,o)=>{const i=x("Card");return l(),r("div",B,[(l(!0),r(I,null,v(e.newList,((e,t)=>(l(),r(i,{key:e.id,"news-info":e,index:t},null,8,["news-info","index"])))),128))])}));q.render=N,q.__scopeId="data-v-11860458";export default q;
