import{S as it,i as ut,s as ct,e as _,a as P,o as ft,t as N,p as ht,c as v,f as c,g as V,q as dt,b as C,d as U,h as r,k as s,j as M,r as pt,x as W,u as _t,v as vt,w as mt,N as Ye,y as kt,X as Ce,Y as bt,D as Et,Z as Ge,_ as rt,z as gt,$ as Tt,n as R,O as $e,l as ye}from"../chunks/index.e2ae98d0.js";import{c as Ct}from"../chunks/Card.svelte_svelte_type_style_lang.8af72263.js";import{C as yt}from"../chunks/Card.ed7953d5.js";const wt=jt(Math.random);function jt(e){return function(t,a=0,n=t.length){let f=n-(a=+a);for(;f;){const d=e()*f--|0,o=t[f+a];t[f+a]=t[d+a],t[d+a]=o}return t}}var xe={},Se={},Oe=34,he=10,Re=13;function ot(e){return new Function("d","return {"+e.map(function(l,t){return JSON.stringify(l)+": d["+t+'] || ""'}).join(",")+"}")}function Lt(e,l){var t=ot(e);return function(a,n){return l(t(a),n,e)}}function et(e){var l=Object.create(null),t=[];return e.forEach(function(a){for(var n in a)n in l||t.push(l[n]=n)}),t}function K(e,l){var t=e+"",a=t.length;return a<l?new Array(l-a+1).join(0)+t:t}function At(e){return e<0?"-"+K(-e,6):e>9999?"+"+K(e,6):K(e,4)}function It(e){var l=e.getUTCHours(),t=e.getUTCMinutes(),a=e.getUTCSeconds(),n=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":At(e.getUTCFullYear())+"-"+K(e.getUTCMonth()+1,2)+"-"+K(e.getUTCDate(),2)+(n?"T"+K(l,2)+":"+K(t,2)+":"+K(a,2)+"."+K(n,3)+"Z":a?"T"+K(l,2)+":"+K(t,2)+":"+K(a,2)+"Z":t||l?"T"+K(l,2)+":"+K(t,2)+"Z":"")}function Dt(e){var l=new RegExp('["'+e+`
\r]`),t=e.charCodeAt(0);function a(u,b){var T,L,h=n(u,function(p,i){if(T)return T(p,i-1);L=p,T=b?Lt(p,b):ot(p)});return h.columns=L||[],h}function n(u,b){var T=[],L=u.length,h=0,p=0,i,E=L<=0,A=!1;u.charCodeAt(L-1)===he&&--L,u.charCodeAt(L-1)===Re&&--L;function J(){if(E)return Se;if(A)return A=!1,xe;var m,I=h,j;if(u.charCodeAt(I)===Oe){for(;h++<L&&u.charCodeAt(h)!==Oe||u.charCodeAt(++h)===Oe;);return(m=h)>=L?E=!0:(j=u.charCodeAt(h++))===he?A=!0:j===Re&&(A=!0,u.charCodeAt(h)===he&&++h),u.slice(I+1,m-1).replace(/""/g,'"')}for(;h<L;){if((j=u.charCodeAt(m=h++))===he)A=!0;else if(j===Re)A=!0,u.charCodeAt(h)===he&&++h;else if(j!==t)continue;return u.slice(I,m)}return E=!0,u.slice(I,L)}for(;(i=J())!==Se;){for(var Z=[];i!==xe&&i!==Se;)Z.push(i),i=J();b&&(Z=b(Z,p++))==null||T.push(Z)}return T}function f(u,b){return u.map(function(T){return b.map(function(L){return g(T[L])}).join(e)})}function d(u,b){return b==null&&(b=et(u)),[b.map(g).join(e)].concat(f(u,b)).join(`
`)}function o(u,b){return b==null&&(b=et(u)),f(u,b).join(`
`)}function k(u){return u.map(D).join(`
`)}function D(u){return u.map(g).join(e)}function g(u){return u==null?"":u instanceof Date?It(u):l.test(u+="")?'"'+u.replace(/"/g,'""')+'"':u}return{parse:a,parseRows:n,format:d,formatBody:o,formatRows:k,formatRow:D,formatValue:g}}var Nt=Dt(","),Ut=Nt.parse;function Pt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Vt(e,l){return fetch(e,l).then(Pt)}function Bt(e){return function(l,t,a){return arguments.length===2&&typeof t=="function"&&(a=t,t=void 0),Vt(l,t).then(function(n){return e(n,a)})}}var Mt=Bt(Ut);function St(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);if(!(e.status===204||e.status===205))return e.json()}function Ot(e,l){return fetch(e,l).then(St)}function de(e,l,t){this.k=e,this.x=l,this.y=t}de.prototype={constructor:de,scale:function(e){return e===1?this:new de(this.k*e,this.x,this.y)},translate:function(e,l){return e===0&l===0?this:new de(this.k,this.x+this.k*e,this.y+this.k*l)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};de.prototype;function tt(e){e[31]=e[33][0],e[32]=e[33][1]}function lt(e,l,t){const a=e.slice();return a[35]=l[t],a}function nt(e){let l,t=e[35]+1+"",a;return{c(){l=_("option"),a=N(t),this.h()},l(n){l=v(n,"OPTION",{});var f=C(l);a=U(f,t),f.forEach(c),this.h()},h(){l.__value=e[35]+1,l.value=l.__value},m(n,f){M(n,l,f),s(l,a)},p:R,d(n){n&&c(l)}}}function Rt(e){return{c:R,l:R,m:R,p:R,d:R}}function Yt(e){tt(e);let l=e[15](e[31])+"",t,a,n,f,d={ctx:e,current:null,token:null,hasCatch:!1,pending:Jt,then:Xt,catch:Ft,value:34};return Ce(f=Promise.resolve(e[12](e[32],e[6])),d),{c(){t=N(l),a=P(),n=$e(),d.block.c()},l(o){t=U(o,l),a=V(o),n=$e(),d.block.l(o)},m(o,k){M(o,t,k),M(o,a,k),M(o,n,k),d.block.m(o,d.anchor=k),d.mount=()=>n.parentNode,d.anchor=n},p(o,k){e=o,tt(e),k[0]&1536&&l!==(l=e[15](e[31])+"")&&ye(t,l),d.ctx=e,k[0]&1600&&f!==(f=Promise.resolve(e[12](e[32],e[6])))&&Ce(f,d)||rt(d,e,k)},d(o){o&&c(t),o&&c(a),o&&c(n),d.block.d(o),d.token=null,d=null}}}function Ft(e){return{c:R,l:R,m:R,p:R,d:R}}function Xt(e){let l,t=e[11](e[34][e[1]])+"",a,n,f,d,o,k,D,g,u,b,T,L,h=e[5]&&at(e),p=e[4]&&st(e);return{c(){l=_("h1"),a=N(t),n=P(),h&&h.c(),f=P(),p&&p.c(),d=P(),o=_("button"),k=N("ᐸ"),g=P(),u=_("button"),b=N("ᐳ"),this.h()},l(i){l=v(i,"H1",{class:!0});var E=C(l);a=U(E,t),E.forEach(c),n=V(i),h&&h.l(i),f=V(i),p&&p.l(i),d=V(i),o=v(i,"BUTTON",{class:!0});var A=C(o);k=U(A,"ᐸ"),A.forEach(c),g=V(i),u=v(i,"BUTTON",{class:!0});var J=C(u);b=U(J,"ᐳ"),J.forEach(c),this.h()},h(){r(l,"class","svelte-1aka502"),r(o,"class","prev svelte-1aka502"),o.disabled=D=e[1]===0,r(u,"class","next svelte-1aka502")},m(i,E){M(i,l,E),s(l,a),M(i,n,E),h&&h.m(i,E),M(i,f,E),p&&p.m(i,E),M(i,d,E),M(i,o,E),s(o,k),M(i,g,E),M(i,u,E),s(u,b),T||(L=[W(o,"click",e[28]),W(u,"click",e[29])],T=!0)},p(i,E){E[0]&1602&&t!==(t=i[11](i[34][i[1]])+"")&&ye(a,t),i[5]?h?h.p(i,E):(h=at(i),h.c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null),i[4]?p?p.p(i,E):(p=st(i),p.c(),p.m(d.parentNode,d)):p&&(p.d(1),p=null),E[0]&2&&D!==(D=i[1]===0)&&(o.disabled=D)},d(i){i&&c(l),i&&c(n),h&&h.d(i),i&&c(f),p&&p.d(i),i&&c(d),i&&c(o),i&&c(g),i&&c(u),T=!1,Ye(L)}}}function at(e){let l,t=e[14](e[13](e[34][e[1]].Traditional))+"",a;return{c(){l=_("p"),a=N(t),this.h()},l(n){l=v(n,"P",{class:!0});var f=C(l);a=U(f,t),f.forEach(c),this.h()},h(){r(l,"class","cj-zh svelte-1aka502")},m(n,f){M(n,l,f),s(l,a)},p(n,f){f[0]&1602&&t!==(t=n[14](n[13](n[34][n[1]].Traditional))+"")&&ye(a,t)},d(n){n&&c(l)}}}function st(e){let l,t=e[13](e[34][e[1]].Traditional)+"",a;return{c(){l=_("p"),a=N(t),this.h()},l(n){l=v(n,"P",{class:!0});var f=C(l);a=U(f,t),f.forEach(c),this.h()},h(){r(l,"class","cj-en svelte-1aka502")},m(n,f){M(n,l,f),s(l,a)},p(n,f){f[0]&1602&&t!==(t=n[13](n[34][n[1]].Traditional)+"")&&ye(a,t)},d(n){n&&c(l)}}}function Jt(e){return{c:R,l:R,m:R,p:R,d:R}}function Kt(e){let l,t;return{c(){l=_("h1"),t=N("..."),this.h()},l(a){l=v(a,"H1",{class:!0});var n=C(l);t=U(n,"..."),n.forEach(c),this.h()},h(){r(l,"class","svelte-1aka502")},m(a,n){M(a,l,n),s(l,t)},p:R,d(a){a&&c(l)}}}function Zt(e){let l,t,a,n,f,d,o,k,D,g,u,b,T,L,h,p,i,E,A,J,Z,m,I,j,z,$,x,Q,ie,G,ee,ue,ce,y,H,Y,we,ne,je,Le,te,F,Ae,ae,Ie,De,le,X,Ne,se,Ue,Pe,pe,Ve,Be,Fe,re=[...Array(10).keys()],S=[];for(let O=0;O<re.length;O+=1)S[O]=nt(lt(e,re,O));let q={ctx:e,current:null,token:null,hasCatch:!1,pending:Kt,then:Yt,catch:Rt,value:33};return Ce(pe=Promise.all([e[10],e[9]]),q),Ve=bt(e[25][0]),{c(){l=_("div"),t=_("div"),a=_("div"),n=N("設置"),f=P(),d=_("div"),o=_("label"),k=N("程度"),D=P(),g=_("select");for(let O=0;O<S.length;O+=1)S[O].c();u=P(),b=_("div"),T=_("label"),L=N("英文字幕"),h=P(),p=_("input"),i=P(),E=_("div"),A=_("label"),J=N("中文字幕"),Z=P(),m=_("input"),I=P(),j=_("div"),z=_("label"),$=N("隨機順序"),x=P(),Q=_("input"),ie=P(),G=_("div"),ee=_("label"),ue=N("顯示模式"),ce=P(),y=_("div"),H=_("div"),Y=_("input"),we=P(),ne=_("label"),je=N("繁體"),Le=P(),te=_("div"),F=_("input"),Ae=P(),ae=_("label"),Ie=N("簡體"),De=P(),le=_("div"),X=_("input"),Ne=P(),se=_("label"),Ue=N("混合"),Pe=P(),q.block.c(),this.h()},l(O){l=v(O,"DIV",{class:!0});var B=C(l);t=v(B,"DIV",{class:!0});var w=C(t);a=v(w,"DIV",{class:!0});var fe=C(a);n=U(fe,"設置"),fe.forEach(c),f=V(w),d=v(w,"DIV",{class:!0});var _e=C(d);o=v(_e,"LABEL",{for:!0,class:!0});var Xe=C(o);k=U(Xe,"程度"),Xe.forEach(c),D=V(_e),g=v(_e,"SELECT",{name:!0,id:!0,class:!0});var Je=C(g);for(let Me=0;Me<S.length;Me+=1)S[Me].l(Je);Je.forEach(c),_e.forEach(c),u=V(w),b=v(w,"DIV",{class:!0});var ve=C(b);T=v(ve,"LABEL",{for:!0,class:!0});var Ke=C(T);L=U(Ke,"英文字幕"),Ke.forEach(c),h=V(ve),p=v(ve,"INPUT",{id:!0,type:!0,class:!0}),ve.forEach(c),i=V(w),E=v(w,"DIV",{class:!0});var me=C(E);A=v(me,"LABEL",{for:!0,class:!0});var Ze=C(A);J=U(Ze,"中文字幕"),Ze.forEach(c),Z=V(me),m=v(me,"INPUT",{id:!0,type:!0,class:!0}),me.forEach(c),I=V(w),j=v(w,"DIV",{class:!0});var ke=C(j);z=v(ke,"LABEL",{for:!0,class:!0});var He=C(z);$=U(He,"隨機順序"),He.forEach(c),x=V(ke),Q=v(ke,"INPUT",{id:!0,type:!0,class:!0}),ke.forEach(c),ie=V(w),G=v(w,"DIV",{class:!0});var be=C(G);ee=v(be,"LABEL",{class:!0});var qe=C(ee);ue=U(qe,"顯示模式"),qe.forEach(c),ce=V(be),y=v(be,"DIV",{class:!0});var oe=C(y);H=v(oe,"DIV",{class:!0});var Ee=C(H);Y=v(Ee,"INPUT",{type:!0,id:!0,name:!0,class:!0}),we=V(Ee),ne=v(Ee,"LABEL",{for:!0,class:!0});var ze=C(ne);je=U(ze,"繁體"),ze.forEach(c),Ee.forEach(c),Le=V(oe),te=v(oe,"DIV",{class:!0});var ge=C(te);F=v(ge,"INPUT",{type:!0,id:!0,name:!0,class:!0}),Ae=V(ge),ae=v(ge,"LABEL",{for:!0,class:!0});var Qe=C(ae);Ie=U(Qe,"簡體"),Qe.forEach(c),ge.forEach(c),De=V(oe),le=v(oe,"DIV",{class:!0});var Te=C(le);X=v(Te,"INPUT",{type:!0,id:!0,name:!0,class:!0}),Ne=V(Te),se=v(Te,"LABEL",{for:!0,class:!0});var We=C(se);Ue=U(We,"混合"),We.forEach(c),Te.forEach(c),oe.forEach(c),be.forEach(c),w.forEach(c),Pe=V(B),q.block.l(B),B.forEach(c),this.h()},h(){r(a,"class","settings-title svelte-1aka502"),r(o,"for","level"),r(o,"class","svelte-1aka502"),r(g,"name","level"),r(g,"id","level"),r(g,"class","svelte-1aka502"),e[0]===void 0&&Et(()=>e[20].call(g)),r(d,"class","option svelte-1aka502"),r(T,"for","en"),r(T,"class","svelte-1aka502"),r(p,"id","en"),r(p,"type","checkbox"),r(p,"class","svelte-1aka502"),r(b,"class","option svelte-1aka502"),r(A,"for","cj"),r(A,"class","svelte-1aka502"),r(m,"id","cj"),r(m,"type","checkbox"),r(m,"class","svelte-1aka502"),r(E,"class","option svelte-1aka502"),r(z,"for","order"),r(z,"class","svelte-1aka502"),r(Q,"id","order"),r(Q,"type","checkbox"),r(Q,"class","svelte-1aka502"),r(j,"class","option svelte-1aka502"),r(ee,"class","svelte-1aka502"),r(Y,"type","radio"),r(Y,"id","traditional"),r(Y,"name","displayMode"),Y.__value="traditional",Y.value=Y.__value,r(Y,"class","svelte-1aka502"),r(ne,"for","traditional"),r(ne,"class","svelte-1aka502"),r(H,"class","radio-option svelte-1aka502"),r(F,"type","radio"),r(F,"id","simplified"),r(F,"name","displayMode"),F.__value="simplified",F.value=F.__value,r(F,"class","svelte-1aka502"),r(ae,"for","simplified"),r(ae,"class","svelte-1aka502"),r(te,"class","radio-option svelte-1aka502"),r(X,"type","radio"),r(X,"id","mixed"),r(X,"name","displayMode"),X.__value="mixed",X.value=X.__value,r(X,"class","svelte-1aka502"),r(se,"for","mixed"),r(se,"class","svelte-1aka502"),r(le,"class","radio-option svelte-1aka502"),r(y,"class","radio-group svelte-1aka502"),r(G,"class","option svelte-1aka502"),r(t,"class","settings svelte-1aka502"),r(l,"class","wrap"),Ve.p(Y,F,X)},m(O,B){M(O,l,B),s(l,t),s(t,a),s(a,n),s(t,f),s(t,d),s(d,o),s(o,k),s(d,D),s(d,g);for(let w=0;w<S.length;w+=1)S[w]&&S[w].m(g,null);Ge(g,e[0],!0),s(t,u),s(t,b),s(b,T),s(T,L),s(b,h),s(b,p),p.checked=e[4],s(t,i),s(t,E),s(E,A),s(A,J),s(E,Z),s(E,m),m.checked=e[5],s(t,I),s(t,j),s(j,z),s(z,$),s(j,x),s(j,Q),Q.checked=e[6],s(t,ie),s(t,G),s(G,ee),s(ee,ue),s(G,ce),s(G,y),s(y,H),s(H,Y),Y.checked=Y.__value===e[8],s(H,we),s(H,ne),s(ne,je),s(y,Le),s(y,te),s(te,F),F.checked=F.__value===e[8],s(te,Ae),s(te,ae),s(ae,Ie),s(y,De),s(y,le),s(le,X),X.checked=X.__value===e[8],s(le,Ne),s(le,se),s(se,Ue),s(l,Pe),q.block.m(l,q.anchor=null),q.mount=()=>l,q.anchor=null,Be||(Fe=[W(g,"change",e[20]),W(p,"change",e[21]),W(m,"change",e[22]),W(Q,"change",e[23]),W(Y,"change",e[24]),W(F,"change",e[26]),W(X,"change",e[27])],Be=!0)},p(O,B){if(e=O,B&0){re=[...Array(10).keys()];let w;for(w=0;w<re.length;w+=1){const fe=lt(e,re,w);S[w]?S[w].p(fe,B):(S[w]=nt(fe),S[w].c(),S[w].m(g,null))}for(;w<S.length;w+=1)S[w].d(1);S.length=re.length}B[0]&1&&Ge(g,e[0]),B[0]&16&&(p.checked=e[4]),B[0]&32&&(m.checked=e[5]),B[0]&64&&(Q.checked=e[6]),B[0]&256&&(Y.checked=Y.__value===e[8]),B[0]&256&&(F.checked=F.__value===e[8]),B[0]&256&&(X.checked=X.__value===e[8]),q.ctx=e,B[0]&1536&&pe!==(pe=Promise.all([e[10],e[9]]))&&Ce(pe,q)||rt(q,e,B)},d(O){O&&c(l),gt(S,O),q.block.d(),q.token=null,q=null,Ve.r(),Be=!1,Ye(Fe)}}}function Ht(e){let l,t,a,n,f,d,o,k,D,g,u,b,T,L,h,p,i,E,A,J,Z;return d=new yt({props:{inputTextCallback:e[16],inputText:e[2],color:"#9c88ff",$$slots:{default:[Zt]},$$scope:{ctx:e}}}),{c(){l=_("meta"),t=_("meta"),a=_("meta"),n=_("meta"),f=P(),ft(d.$$.fragment),o=P(),k=_("div"),D=N("按 "),g=_("kbd"),u=N("Shift"),b=N(" + "),T=_("kbd"),L=N("←"),h=N(" / "),p=_("kbd"),i=N("→"),E=N(" 切換詞語"),this.h()},l(m){const I=ht("svelte-n4cpvd",document.head);l=v(I,"META",{name:!0,content:!0}),t=v(I,"META",{property:!0,content:!0}),a=v(I,"META",{name:!0,content:!0}),n=v(I,"META",{property:!0,content:!0}),I.forEach(c),f=V(m),dt(d.$$.fragment,m),o=V(m),k=v(m,"DIV",{class:!0});var j=C(k);D=U(j,"按 "),g=v(j,"KBD",{class:!0});var z=C(g);u=U(z,"Shift"),z.forEach(c),b=U(j," + "),T=v(j,"KBD",{class:!0});var $=C(T);L=U($,"←"),$.forEach(c),h=U(j," / "),p=v(j,"KBD",{class:!0});var x=C(p);i=U(x,"→"),x.forEach(c),E=U(j," 切換詞語"),j.forEach(c),this.h()},h(){document.title="倉頡練習",r(l,"name","title"),r(l,"content","倉頡練習"),r(t,"property","og:title"),r(t,"content","倉頡練習"),r(a,"name","twitter:title"),r(a,"content","倉頡練習"),r(n,"property","og:url"),r(n,"content","https://www.oiargrmbc.com/"),r(g,"class","svelte-1aka502"),r(T,"class","svelte-1aka502"),r(p,"class","svelte-1aka502"),r(k,"class","keyboard-hint svelte-1aka502")},m(m,I){s(document.head,l),s(document.head,t),s(document.head,a),s(document.head,n),M(m,f,I),pt(d,m,I),M(m,o,I),M(m,k,I),s(k,D),s(k,g),s(g,u),s(k,b),s(k,T),s(T,L),s(k,h),s(k,p),s(p,i),s(k,E),A=!0,J||(Z=[W(window,"click",e[18]),W(window,"keydown",e[19])],J=!0)},p(m,I){const j={};I[0]&4&&(j.inputText=m[2]),I[0]&1915|I[1]&128&&(j.$$scope={dirty:I,ctx:m}),d.$set(j)},i(m){A||(_t(d.$$.fragment,m),A=!0)},o(m){vt(d.$$.fragment,m),A=!1},d(m){c(l),c(t),c(a),c(n),m&&c(f),mt(d,m),m&&c(o),m&&c(k),J=!1,Ye(Z)}}}function qt(e,l,t){let a,n,f=!1,d="1",o=0,k="",D,g,u=!1,b=!0,T=!0,L=!1,h="traditional";const p=y=>h==="traditional"?y.Traditional:h==="simplified"?y.Simplified:Math.random()>.5?y.Traditional:y.Simplified,i=y=>(t(1,o=0),t(3,D=T?wt(JSON.parse(JSON.stringify(y))):y),D),E=y=>y.split("").map(H=>g[H].toUpperCase()).join(" "),A=y=>y.toUpperCase().split("").map(H=>Ct[H]||H).join(""),J=y=>(g=y,"");kt(()=>{t(17,f=!0)});const Z=y=>{t(2,k=A(y))},m=[[]],I=()=>{t(7,L=!1)},j=y=>{y.shiftKey&&(y.key==="ArrowRight"&&(t(1,o+=1),t(1,o%=D.length)),y.key==="ArrowLeft"&&o>0&&t(1,o-=1))};function z(){d=Tt(this),t(0,d)}function $(){u=this.checked,t(4,u)}function x(){b=this.checked,t(5,b)}function Q(){T=this.checked,t(6,T)}function ie(){h=this.__value,t(8,h)}function G(){h=this.__value,t(8,h)}function ee(){h=this.__value,t(8,h)}const ue=()=>{o>0&&t(1,o-=1)},ce=()=>{t(1,o+=1),t(1,o%=D.length)};return e.$$.update=()=>{e.$$.dirty[0]&131072&&t(10,a=f&&Ot("data/all_chars.json")),e.$$.dirty[0]&131073&&t(9,n=f&&Mt(`data/mandarin-${d}000.csv`)),e.$$.dirty[0]&1&&d&&t(1,o=0),e.$$.dirty[0]&14&&D&&k===A(E(D[o].Traditional))&&(t(1,o+=1),t(1,o%=D.length),t(2,k=""))},[d,o,k,D,u,b,T,L,h,n,a,p,i,E,A,J,Z,f,I,j,z,$,x,Q,ie,m,G,ee,ue,ce]}class Gt extends it{constructor(l){super(),ut(this,l,qt,Ht,ct,{},null,[-1,-1])}}export{Gt as default};
