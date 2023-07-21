import{r as f,o as s,c as u,a as d,w as c,T as y,b as e,d as h,e as v,f as n,v as i,t as m,g,h as _,i as b,u as k,F as w}from"./index-a820f23e.js";const V={class:"actions"},x=e("button",{class:"action",type:"submit",form:"product_form"},"Add",-1),D={__name:"add",setup(p){return(t,r)=>{const a=f("router-link");return s(),u("header",null,[d(y,null,{default:c(()=>[h(" Add Product ")]),_:1}),e("div",V,[x,d(a,{class:"action",to:"/"},{default:c(()=>[h("Cancel")]),_:1})])])}}};const B=e("p",null,"Basic product info",-1),U=e("label",{for:"sku"},"sku",-1),$=e("label",{for:"name"},"name",-1),q=e("label",{for:"price"},"price",-1),z=e("strong",null,"Selected product type:",-1),S=e("label",{for:"type"},"type switcher",-1),F=["id"],N=e("option",{value:"DVD",selected:""},"DVD",-1),P=e("option",{value:"Book"},"Book",-1),T=e("option",{value:"Furniture"},"Furniture",-1),C=[N,P,T],M={key:0},A=e("label",{for:"size"},"size (mb)",-1),O={key:1},E=e("label",{for:"height"},"height (cm)",-1),H=e("label",{for:"width"},"width (cm)",-1),J=e("label",{for:"length"},"length (cm)",-1),j={key:2},G=e("label",{for:"weight"},"weight (kg)",-1),K={__name:"form",props:["handler"],setup(p){const t=v({sku:"",name:"",price:"",type:"DVD",size:"",weight:"",width:"",height:"",length:""}),r={DVD:"Please provide size in MB",Book:"Please provide weight in KG",Furniture:"Please provide dimentions in HxWxL"};return(a,l)=>(s(),u("form",{action:"",method:"post",id:"product_form",onSubmit:l[9]||(l[9]=b(o=>p.handler(t.value),["prevent"]))},[B,e("fieldset",null,[U,n(e("input",{required:"",type:"text",id:"sku","onUpdate:modelValue":l[0]||(l[0]=o=>t.value.sku=o)},null,512),[[i,t.value.sku]])]),e("fieldset",null,[$,n(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":l[1]||(l[1]=o=>t.value.name=o)},null,512),[[i,t.value.name]])]),e("fieldset",null,[q,n(e("input",{required:"",type:"number",id:"price","onUpdate:modelValue":l[2]||(l[2]=o=>t.value.price=o)},null,512),[[i,t.value.price]])]),e("p",null,[z,h(" "+m(t.value.type),1)]),e("fieldset",null,[S,n(e("select",{name:"type",id:"type","onUpdate:modelValue":l[3]||(l[3]=o=>t.value.type=o)},C,8,F),[[g,t.value.type]])]),e("div",null,m(r[t.value.type]),1),t.value.type==="DVD"?(s(),u("fieldset",M,[A,n(e("input",{required:"",type:"number",id:"size","onUpdate:modelValue":l[4]||(l[4]=o=>t.value.size=o)},null,512),[[i,t.value.size]])])):_("",!0),t.value.type==="Furniture"?(s(),u("div",O,[e("fieldset",null,[E,n(e("input",{required:"",type:"number",id:"height","onUpdate:modelValue":l[5]||(l[5]=o=>t.value.height=o)},null,512),[[i,t.value.height]])]),e("fieldset",null,[H,n(e("input",{required:"",type:"number",id:"width","onUpdate:modelValue":l[6]||(l[6]=o=>t.value.width=o)},null,512),[[i,t.value.width]])]),e("fieldset",null,[J,n(e("input",{required:"",type:"number",id:"length","onUpdate:modelValue":l[7]||(l[7]=o=>t.value.length=o)},null,512),[[i,t.value.length]])])])):_("",!0),t.value.type==="Book"?(s(),u("fieldset",j,[G,n(e("input",{required:"",type:"number",id:"weight","onUpdate:modelValue":l[8]||(l[8]=o=>t.value.weight=o)},null,512),[[i,t.value.weight]])])):_("",!0)],32))}};const L={class:"layout"},R=e("hr",null,null,-1),W=e("hr",null,null,-1),Q={__name:"add",setup(p){const t=k();document.title="Add a Product";const r=v(null),a=l=>{fetch("http://46.101.199.152/product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(()=>{t.push({path:"/"})}).catch(o=>{console.error(o),r.value=o}),console.log(JSON.stringify(l))};return(l,o)=>(s(),u("div",L,[d(D),R,e("main",null,[d(K,{handler:a})]),W,d(w)]))}};export{Q as default};