let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a as e,a2 as i,S as n,U as l,T as a}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import{T as t}from"./index.04e4416d.js";import"./UpOutlined.0ffab499.js";import"./LeftOutlined.3325f905.js";import{D as o}from"./index.7c47310e.js";import{P as r}from"./index.6dad0c9e.js";import{s as p}from"./index.de879313.js";import"./index.5c04e818.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useECharts.70cc0210.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./props.c31746e0.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./animation.85d10296.js";import"./index.1dbdd6e1.js";import d from"./TrendLine.b4991fd9.js";const c="flow-analysis";var f=e({name:"AnalysisFLow",setup(){const s=()=>i(n,null,(()=>i(l,null,i(a,{md:24,lg:8},(()=>i(p,{title:"整体流量评分",canExpan:!1,class:`${c}__left`},(()=>i("div",null,i("div",{class:`${c}__score`},"86.2",i("span",null,"分")),i("div",{class:`${c}__rank`},"排名",i("span",null,"前20%")),i(r,{percent:70,showInfo:!1,status:"active"}),i(o,null),i("ul",{class:`${c}__rs`},i("li",null,i("span",null,"平均分"),i("span",null,"77.5")),i("li",null,i("span",null,"最高分"),i("span",null,"99.5")),i("li",null,i("span",null,"最低分"),i("span",null,"56.5")))))))),i(a,{md:24,lg:16},(()=>i(p,{title:"整体流量趋势",canExpan:!1},(()=>i(d,null))))))));return()=>i(t,{class:c,"default-active-key":"1"},(()=>[i(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),i(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),i(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default f;