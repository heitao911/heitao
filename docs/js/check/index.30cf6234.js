import{_ as N,m as b,a as T,n as y,b as r,o as d,c as x,d as l,e as h,q as S,w as m,i as k,s as U,h as V,g as p,p as I,f as $}from"../index.b3725627.js";const X=["shangiew1","sir1685","heitaoch002","heitaoch003","heitaobg01","heitaoch005","heitaoch004","heitaoch","heitaochgf","heitaobg","heitaogx","HQIU99_bot"],C=["jiuye6698","chens1697","cc2687","XIXI66862","wssjqf669","guge1145","yaoyaoyao3"],B=["pz"],z=["TXNxRLA2kv4mx9GUbP61mHgiXMwjKVpQWH"],j=["TJhegqYzh54DFfVB3dXrxufEDXbM26NJyk"],q=["TJhegqYzh54DFfVB3dXrxufEDXbM26NJy1"],s={service_whiteName:X,vip_whiteName:C,black_whiteName:B,service_U_whiteName:z,vip_U_whiteName:j,black_U_whiteName:q};const u=c=>(I("data-v-10cec50d"),c=c(),$(),c),D={class:"content"},J=u(()=>l("div",{class:"cover"},null,-1)),K={class:"form-wrap"},M=u(()=>l("h2",null,"黑桃出海防骗查询",-1)),E=u(()=>l("br",null,null,-1)),F=u(()=>l("a",{href:"https://www.heitao.org"},"https://www.heitao.org",-1)),H=V({name:"Check"}),P=Object.assign(H,{setup(c){const{proxy:_}=b(),e=T({vague:"",loading:!1,isShowTip:!1,alertTitle:"",description:"",alertStatus:""}),a={tip1:"有任何疑问请联系官方客服",tip2:"强烈建议大家交易走担保!"};y(()=>{console.log(s)});const g=()=>{if(e.isShowTip=!1,e.vague=e.vague.trim(),e.vague){if(!e.vague.trim()){_.$message.error("请输入合法用户名或者U地址查询");return}}else{_.$message.error("请输入用户名或者U地址查询");return}e.loading=!0,setTimeout(()=>{if(e.loading=!1,e.description="",e.vague.length===34){const n=s.vip_U_whiteName.filter(t=>t===e.vague),i=s.service_U_whiteName.filter(t=>t===e.vague),o=s.black_U_whiteName.filter(t=>t===e.vague);n.length?(e.alertStatus="success",e.alertTitle=`【 ${e.vague} 】该地址为黑桃商务VIP会员专用。`,e.description=a.tip1):i.length?(e.alertStatus="success",e.alertTitle=`【 ${e.vague} 】该地址为黑桃商务官方专用。`,e.description=a.tip1):o.length?(e.alertStatus="warning",e.alertTitle=`【 ${e.vague} 】该地址被多人标记为骗子，谨防上当受骗！`,e.description=a.tip2):(e.alertStatus="error",e.alertTitle=`【 ${e.vague} 】该地址非黑桃商务会员，建议交易走黑桃担保。`,e.description=a.tip1)}else{const n=s.vip_whiteName.filter(t=>t===e.vague||"@"+t===e.vague||"https://t.me/"+t===e.vague),i=s.service_whiteName.filter(t=>t===e.vague||"@"+t===e.vague||"https://t.me/"+t===e.vague),o=s.black_whiteName.filter(t=>t===e.vague||"@"+t===e.vague||"https://t.me/"+t===e.vague);n.length?(e.alertStatus="success",e.alertTitle=`【 ${e.vague} 】该用户为黑桃商务VIP会员。`,e.description=a.tip1):i.length?(e.alertStatus="success",e.alertTitle=`【 ${e.vague} 】该用户为黑桃商务官方客服。`,e.description=a.tip1):o.length?(e.alertStatus="warning",e.alertTitle=`【 ${e.vague} 】该用户被多人标记为骗子，谨防上当受骗！`,e.description=a.tip2):(e.alertStatus="error",e.alertTitle=`【 ${e.vague} 】该用户非黑桃商务会员，建议交易走黑桃担保`,e.description=a.tip1)}e.isShowTip=!0},1e3)};return(n,i)=>{const o=r("el-input"),t=r("el-button"),v=r("el-alert"),w=r("el-text");return d(),x("main",D,[J,l("div",K,[M,h(o,{class:"input",modelValue:e.vague,"onUpdate:modelValue":i[0]||(i[0]=f=>e.vague=f),placeholder:"请输入用户名或者U地址查询",size:"large",clearable:"","show-word-limit":"",maxlength:"40",onKeydown:S(g,["enter"])},null,8,["modelValue","onKeydown"]),h(t,{class:"search-btn",type:"primary",size:"large",onClick:g,loading:e.loading},{default:m(()=>[p("查询验证")]),_:1},8,["loading"]),e.isShowTip?(d(),k(v,{key:0,class:"check-result",title:e.alertTitle,description:e.description,closable:!1,"show-icon":"",type:e.alertStatus},null,8,["title","description","type"])):U("",!0),h(w,{class:"tips",type:"info"},{default:m(()=>[p("可查询官方客服真伪以及输入U地址查询是否为骗子，有任何问题请联系官网客服人员。"),E,p(" 黑桃商务官网："),F]),_:1})])])}}}),Y=N(P,[["__scopeId","data-v-10cec50d"]]);export{Y as default};
