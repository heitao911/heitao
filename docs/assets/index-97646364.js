import{_ as w,g as x,r as y,o as k,a as s,b as r,c as N,d as n,e as o,w as S,f as c,h as T,i as b,j as _,p as V,k as C}from"./index-ad719af7.js";const I=[{name:"@sir1685",simpleName:"sir1685",linkName:"https://t.me/sir1685"},{name:"@shangiew1",simpleName:"shangiew1",linkName:"https://t.me/shangiew1"}],U=[],u={whiteName:I,bannerAd:U};const d=a=>(V("data-v-d4ed3ce6"),a=a(),C(),a),B={class:"content"},$=d(()=>n("div",{class:"cover"},null,-1)),A={class:"form-wrap"},K=d(()=>n("h2",null,"黑桃出海防骗查询",-1)),j={name:"Check"},z=Object.assign(j,{setup(a){const{proxy:l}=x(),e=y({vague:"",loading:!1,isShowTip:!1,alertTitle:"",alertStatus:""});k(()=>{console.log(u)});const i=()=>{if(e.isShowTip=!1,e.vague=e.vague.trim(),e.vague){if(!e.vague.trim()){l.$message.error("请输入合法用户名或者U地址查询");return}}else{l.$message.error("请输入用户名或者U地址查询");return}e.loading=!0,setTimeout(()=>{e.loading=!1,u.whiteName.filter(t=>t.name===e.vague||t.simpleName===e.vague||t.linkName===e.vague).length?(e.alertStatus="success",e.alertTitle=`账号：【 ${e.vague} 】是黑桃集团客服人员，谢谢您的查询！请放心使用`):(e.alertStatus="error",e.alertTitle=`账号：【 ${e.vague} 】不是黑桃集团客服人员，请核对后重新查询！`),e.isShowTip=!0},1e3)};return(p,t)=>{const m=s("el-input"),g=s("el-button"),h=s("el-alert"),v=s("el-text");return r(),N("main",B,[$,n("div",A,[K,o(m,{class:"input",modelValue:e.vague,"onUpdate:modelValue":t[0]||(t[0]=f=>e.vague=f),placeholder:"请输入用户名或者U地址查询",size:"large",clearable:"","show-word-limit":"",maxlength:"40",onKeydown:S(i,["enter"])},null,8,["modelValue","onKeydown"]),o(g,{class:"search-btn",type:"primary",size:"large",onClick:i,loading:e.loading},{default:c(()=>[_("查询验证")]),_:1},8,["loading"]),e.isShowTip?(r(),T(h,{key:0,class:"check-result",title:e.alertTitle,"show-icon":"",type:e.alertStatus},null,8,["title","type"])):b("",!0),o(v,{class:"tips",type:"info"},{default:c(()=>[_("可查询官方客服真伪以及输入U地址查询是否为骗子，有任何问题请联系官网客服人员。")]),_:1})])])}}}),F=w(z,[["__scopeId","data-v-d4ed3ce6"]]);export{F as default};