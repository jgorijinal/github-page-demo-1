import{y as H,L as S,Q as be,A as M,R as J,ab as he,d as U,ac as ve,f as o,v as h,ad as w,Z as Y,ae as ye,af as Ce,ag as Se,ah as xe,x as ke,ai as Ie,S as B,G as we,r as O,I as Ve,j as I,aj as Pe,J as Ee,ak as Te,s as Le,a0 as L,$ as Me,K as Be,O as Re,al as Ae,am as W,an as _e,M as j,ao as $e,a1 as Oe,g as De,ap as Ne}from"./index.1104e249.js";const[ze,C]=H("cell"),G={icon:String,size:String,title:S,value:S,label:S,center:Boolean,isLink:Boolean,border:be,required:Boolean,iconPrefix:String,valueClass:M,labelClass:M,titleClass:M,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},Fe=J({},G,he);var We=U({name:ze,props:Fe,setup(e,{slots:n}){const r=ve(),u=()=>{if(n.label||h(e.label))return o("div",{class:[C("label"),e.labelClass]},[n.label?n.label():e.label])},l=()=>{if(n.title||h(e.title))return o("div",{class:[C("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():o("span",null,[e.title]),u()])},f=()=>{const c=n.value||n.default;if(c||h(e.value)){const s=n.title||h(e.title);return o("div",{class:[C("value",{alone:!s}),e.valueClass]},[c?c():o("span",null,[e.value])])}},V=()=>{if(n.icon)return n.icon();if(e.icon)return o(w,{name:e.icon,class:C("left-icon"),classPrefix:e.iconPrefix},null)},x=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const c=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return o(w,{name:c,class:C("right-icon")},null)}};return()=>{var c,m;const{size:s,center:R,border:P,isLink:A,required:v}=e,y=(c=e.clickable)!=null?c:A,k={center:R,required:v,clickable:y,borderless:!P};return s&&(k[s]=!!s),o("div",{class:C(k),role:y?"button":void 0,tabindex:y?0:void 0,onClick:r},[V(),l(),f(),x(),(m=n.extra)==null?void 0:m.call(n)])}}});const je=Y(We);function Q(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function qe(e,n){if(Q(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Ke(e,n){return new Promise(r=>{const u=n.validator(e,n);if(Se(u)){u.then(r);return}r(u)})}function q(e,n){const{message:r}=n;return xe(r)?r(e,n):r||""}function He({target:e}){e.composing=!0}function K({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Je(e,n){const r=ye();e.style.height="auto";let u=e.scrollHeight;if(ke(n)){const{maxHeight:l,minHeight:f}=n;l!==void 0&&(u=Math.min(u,l)),f!==void 0&&(u=Math.max(u,f))}u&&(e.style.height=`${u}px`,Ce(r))}function Ue(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function D(e){return[...e].length}function Ye(e,n){return[...e].slice(0,n).join("")}let Ge=0;function Qe(){const e=Ie(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++Ge}`}const[Ze,g]=H("field"),Xe={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:S,formatter:Function,clearIcon:B("clear"),modelValue:Re(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:B("focus"),formatTrigger:B("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},pe=J({},G,Xe,{rows:S,type:B("text"),rules:Array,autosize:[Boolean,Object],labelWidth:S,labelClass:M,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var et=U({name:Ze,props:pe,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:r}){const u=Qe(),l=we({status:"unvalidated",focused:!1,validateMessage:""}),f=O(),V=O(),x=O(),{parent:c}=Ve(Ae),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},s=t=>{if(h(e[t]))return e[t];if(c&&h(c.props[t]))return c.props[t]},R=I(()=>{const t=s("readonly");if(e.clearable&&!t){const a=m()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&l.focused;return a&&i}return!1}),P=I(()=>x.value&&r.input?x.value():e.modelValue),A=t=>t.reduce((a,i)=>a.then(()=>{if(l.status==="failed")return;let{value:d}=P;if(i.formatter&&(d=i.formatter(d,i)),!qe(d,i)){l.status="failed",l.validateMessage=q(d,i);return}if(i.validator)return Q(d)&&i.validateEmpty===!1?void 0:Ke(d,i).then(b=>{b&&typeof b=="string"?(l.status="failed",l.validateMessage=b):b===!1&&(l.status="failed",l.validateMessage=q(d,i))})}),Promise.resolve()),v=()=>{l.status="unvalidated",l.validateMessage=""},y=()=>n("end-validate",{status:l.status}),k=(t=e.rules)=>new Promise(a=>{v(),t?(n("start-validate"),A(t).then(()=>{l.status==="failed"?(a({name:e.name,message:l.validateMessage}),y()):(l.status="passed",a(),y())})):a()}),_=t=>{if(c&&e.rules){const{validateTrigger:a}=c.props,i=W(a).includes(t),d=e.rules.filter(b=>b.trigger?W(b.trigger).includes(t):i);d.length&&k(d)}},Z=t=>{const{maxlength:a}=e;if(h(a)&&D(t)>a){const i=m();return i&&D(i)===+a?i:Ye(t,+a)}return t},E=(t,a="onChange")=>{if(t=Z(t),e.type==="number"||e.type==="digit"){const i=e.type==="number";t=_e(t,i,i)}e.formatter&&a===e.formatTrigger&&(t=e.formatter(t)),f.value&&f.value.value!==t&&(f.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},X=t=>{t.target.composing||E(t.target.value)},$=()=>{var t;return(t=f.value)==null?void 0:t.blur()},p=()=>{var t;return(t=f.value)==null?void 0:t.focus()},T=()=>{const t=f.value;e.type==="textarea"&&e.autosize&&t&&Je(t,e.autosize)},ee=t=>{l.focused=!0,n("focus",t),L(T),s("readonly")&&$()},te=t=>{s("readonly")||(l.focused=!1,E(m(),"onBlur"),n("blur",t),_("onBlur"),L(T),Ne())},N=t=>n("click-input",t),ne=t=>n("click-left-icon",t),ae=t=>n("click-right-icon",t),ie=t=>{j(t),n("update:modelValue",""),n("clear",t)},z=I(()=>{if(typeof e.error=="boolean")return e.error;if(c&&c.props.showError&&l.status==="failed")return!0}),le=I(()=>{const t=s("labelWidth");if(t)return{width:Pe(t)}}),re=t=>{t.keyCode===13&&(!(c&&c.props.submitOnEnter)&&e.type!=="textarea"&&j(t),e.type==="search"&&$()),n("keypress",t)},F=()=>e.id||`${u}-input`,oe=()=>l.status,ce=()=>{const t=g("control",[s("inputAlign"),{error:z.value,custom:!!r.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(r.input)return o("div",{class:t,onClick:N},[r.input()]);const a={id:F(),ref:f,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:s("disabled"),readonly:s("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${u}-label`:void 0,onBlur:te,onFocus:ee,onInput:X,onClick:N,onChange:K,onKeypress:re,onCompositionend:K,onCompositionstart:He};return e.type==="textarea"?o("textarea",a,null):o("input",Oe(Ue(e.type),a),null)},se=()=>{const t=r["left-icon"];if(e.leftIcon||t)return o("div",{class:g("left-icon"),onClick:ne},[t?t():o(w,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ue=()=>{const t=r["right-icon"];if(e.rightIcon||t)return o("div",{class:g("right-icon"),onClick:ae},[t?t():o(w,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},de=()=>{if(e.showWordLimit&&e.maxlength){const t=D(m());return o("div",{class:g("word-limit")},[o("span",{class:g("word-num")},[t]),De("/"),e.maxlength])}},fe=()=>{if(c&&c.props.showErrorMessage===!1)return;const t=e.errorMessage||l.validateMessage;if(t){const a=r["error-message"],i=s("errorMessageAlign");return o("div",{class:g("error-message",i)},[a?a({message:t}):t])}},ge=()=>{const t=s("colon")?":":"";if(r.label)return[r.label(),t];if(e.label)return o("label",{id:`${u}-label`,for:F()},[e.label+t])},me=()=>[o("div",{class:g("body")},[ce(),R.value&&o(w,{ref:V,name:e.clearIcon,class:g("clear")},null),ue(),r.button&&o("div",{class:g("button")},[r.button()])]),de(),fe()];return Ee({blur:$,focus:p,validate:k,formValue:P,resetValidation:v,getValidationStatus:oe}),Te($e,{customValue:x,resetValidation:v,validateWithTrigger:_}),Le(()=>e.modelValue,()=>{E(m()),v(),_("onChange"),L(T)}),Me(()=>{E(m(),e.formatTrigger),L(T)}),Be("touchstart",ie,{target:I(()=>{var t;return(t=V.value)==null?void 0:t.$el})}),()=>{const t=s("disabled"),a=s("labelAlign"),i=ge(),d=se();return o(je,{size:e.size,icon:e.leftIcon,class:g({error:z.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:le.value,valueClass:g("value"),titleClass:[g("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:d?()=>d:null,title:i?()=>i:null,value:me,extra:r.extra})}}});const nt=Y(et);export{nt as F};
