function w(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(T)}function q(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(G(e,n))}function ft(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let u=0;u<l;u+=1)a[u]=e.dirty[u]|r[u];return a}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,a){if(r){const l=B(e,n,i,a);t.p(l,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const J=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in J;let $=!1;function K(){$=!0}function L(){$=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:Q(1,r,b=>e[n[b]].claim_order,o))-1;i[c]=n[f]+1;const s=f+1;n[s]=c,r=Math.max(s,r)}const a=[],l=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);u>=c;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);a.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<a.length&&l[c].claim_order>=a[o].claim_order;)o++;const f=o<a.length?a[o]:null;t.insertBefore(l[c],f)}}function U(t,e){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){$&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){tt(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const c=n(u);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const c=n(u);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function P(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];n[u.name]||a.push(u.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function bt(t,e,n){return P(t,e,n,X)}function xt(t,e,n){return P(t,e,n,Y)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function wt(t){return et(t," ")}function $t(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e){return new t(e)}let y;function p(t){y=t}function W(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){W().$$.on_mount.push(t)}function St(t){W().$$.after_update.push(t)}const h=[],M=[];let m=[];const C=[],z=Promise.resolve();let E=!1;function D(){E||(E=!0,z.then(F))}function At(){return D(),z}function N(t){m.push(t)}const v=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();E=!1,v.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const x=new Set;let d;function jt(){d={r:0,c:[],p:d}}function kt(){d.r||g(d.c),d=d.p}function rt(t,e){t&&t.i&&(x.delete(t),t.i(e))}function Mt(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...lt];function Ct(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||N(()=>{const l=t.$$.on_mount.map(T).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),a.forEach(N)}function ot(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qt(t,e,n,i,r,a,l,u=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(s,b,...A)=>{const j=A.length?A[0]:b;return o.ctx&&r(o.ctx[s],o.ctx[s]=j)&&(!o.skip_bound&&o.bound[s]&&o.bound[s](j),f&&ut(t,s)),b}):[],o.update(),f=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){K();const s=Z(e.target);o.fragment&&o.fragment.l(s),s.forEach(V)}else o.fragment&&o.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),L(),F()}p(c)}class Bt{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ot as B,ft as C,_t as D,ht as E,dt as F,U as G,w as H,st as I,Y as J,xt as K,Bt as S,pt as a,mt as b,wt as c,Mt as d,yt as e,kt as f,rt as g,V as h,qt as i,St as j,X as k,bt as l,Z as m,gt as n,Nt as o,vt as p,S as q,et as r,at as s,At as t,$t as u,jt as v,M as w,Et as x,Ct as y,Tt as z};
