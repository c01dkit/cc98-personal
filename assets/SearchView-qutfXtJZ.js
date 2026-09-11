import{$ as e,$t as t,Dt as n,Ft as r,G as i,It as a,Jt as o,Lt as s,Nt as c,Ot as l,Pt as u,Rt as d,Ut as f,Wt as p,Zt as ee,_ as m,_n as h,an as g,c as _,cn as v,d as y,et as b,fn as x,h as S,i as te,in as C,jt as ne,ln as w,lt as T,nn as E,nt as D,o as re,s as O,sn as k,t as ie,tn as ae,ut as A,vn as j,vt as M,xn as N,zt as P}from"./button-BkTqIT2n.js";import{l as oe}from"./index-Dxj-NWHN.js";import{t as se}from"./tag-CO8OMr3h.js";import{n as F,t as ce}from"./PostInfiniteGrid-B_teROIk.js";import{t as le}from"./topicStore-DQzU9yeM.js";import{t as ue}from"./postStore-DtiPk6sv.js";import{n as I,t as L}from"./chevron-right-CX0RfW4I.js";var R=m.extend({name:`tabs`,style:`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        overflow: hidden;
        display: flex;
        position: relative;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        position: relative;
        display: flex;
        flex-grow: 1;
        min-height: 0;
        overflow-x: auto;
        overflow-y: clip;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-content::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        font-size: dt('tabs.tab.font.size');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        background: dt('tabs.active.bar.background');
        transition: width 250ms cubic-bezier(0.35, 0, 0.25, 1), inset-inline-start 250ms cubic-bezier(0.35, 0, 0.25, 1);
        inset-inline-start: var(--px-active-bar-left);
        inset-block-end: dt('tabs.active.bar.bottom');
        width: var(--px-active-bar-width);
        height: dt('tabs.active.bar.height');
    }
`,classes:{root:`p-tabs p-component`}}),z={name:`Tabs`,extends:{name:`BaseTabs`,extends:S,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},scrollStrategy:{type:[String,Function],default:`nearest`}},style:R,provide:function(){return{$pcTabs:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},scrollToActiveTab:function(e,t){if(e&&t&&this.scrollStrategy!==!1){if(typeof this.scrollStrategy==`function`){this.scrollStrategy(e,t);return}var n=e.clientWidth,r=Math.abs(e.scrollLeft),i=t.offsetLeft,a=t.offsetWidth,o=i+a,s;if(this.scrollStrategy===`center`)s=i-(n-a)/2;else{var c=n*.1;if(i<r+c)s=i-c;else if(o>r+n-c)s=o-n+c;else return}var l=e.scrollWidth-n,u=Math.max(0,Math.min(s,l));e.scrollTo({left:D(e)?-u:u,behavior:`smooth`})}}}};function B(e,n,r,i,a,s){return t(),P(`div`,o({class:e.cx(`root`)},e.ptmi(`root`)),[E(e.$slots,`default`)],16)}z.render=B;var V=m.extend({name:`tablist`,classes:{root:`p-tablist`,content:`p-tablist-content`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`}}),H={name:`TabList`,extends:{name:`BaseTabList`,extends:S,props:{},style:V,provide:function(){return{$pcTabList:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,mountTimer:null,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar(),this.bindInkBarObserver();var e=this.$refs.content,t=e?i(e,`[data-pc-name="tab"][data-p-active="true"]`):null;e&&t&&this.$pcTabs.scrollToActiveTab(e,t)}}},mounted:function(){var e=this;this.mountTimer=setTimeout(function(){e.mountTimer=null,e.updateInkBar(),e.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.mountTimer&&=(clearTimeout(this.mountTimer),null),this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=T(e)-t,r=Math.abs(e.scrollLeft)-n*.8,i=Math.max(r,0);e.scrollLeft=D(e)?-1*i:i},onNextButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=T(e)-t,r=Math.abs(e.scrollLeft)+n*.8,i=e.scrollWidth-n,a=Math.min(r,i);e.scrollLeft=D(e)?-1*a:a},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var e=this;this.unbindInkBarObserver();var t=this.$refs.content,n=i(t,`[data-pc-name="tab"][data-p-active="true"]`);n&&(this.inkBarObserver=new ResizeObserver(function(){return e.updateInkBar()}),this.inkBarObserver.observe(n))},unbindInkBarObserver:function(){var e;(e=this.inkBarObserver)==null||e.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,n=e.inkbar;if(n){var r=i(t,`[data-pc-name="tab"][data-p-active="true"]`);r&&(n.style.setProperty(`--px-active-bar-width`,r.offsetWidth+`px`),n.style.setProperty(`--px-active-bar-height`,r.offsetHeight+`px`),n.style.setProperty(`--px-active-bar-left`,r.offsetLeft+`px`),n.style.setProperty(`--px-active-bar-top`,r.offsetTop+`px`))}},updateButtonState:function(){var e=this.$refs,t=e.list,n=e.content,r=n.scrollWidth,i=n.offsetWidth,a=Math.abs(n.scrollLeft),o=T(n);this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=t.offsetWidth>=i&&parseInt(a)!==r-o},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return A({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeft:I,ChevronRight:L},directives:{ripple:y}},U=[`data-p`],W=[`aria-label`,`tabindex`],G=[`aria-label`,`tabindex`];function K(e,n,r,i,c,l){var u=C(`ripple`);return t(),P(`div`,o({ref:`list`,class:e.cx(`root`),"data-p":l.dataP},e.ptmi(`root`)),[l.showNavigators&&c.isPrevButtonEnabled?w((t(),P(`button`,o({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":l.prevButtonAriaLabel,tabindex:l.$pcTabs.tabindex,onClick:n[0]||=function(){return l.onPrevButtonClick&&l.onPrevButtonClick.apply(l,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(t(),s(g(l.templates.previcon||`ChevronLeft`),o({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,W)),[[u]]):d(``,!0),a(`div`,o({ref:`content`,class:e.cx(`content`),role:`tablist`,"aria-orientation":`horizontal`,onScroll:n[1]||=function(){return l.onScroll&&l.onScroll.apply(l,arguments)}},e.ptm(`content`)),[E(e.$slots,`default`),a(`span`,o({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16),l.showNavigators&&c.isNextButtonEnabled?w((t(),P(`button`,o({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":l.nextButtonAriaLabel,tabindex:l.$pcTabs.tabindex,onClick:n[2]||=function(){return l.onNextButtonClick&&l.onNextButtonClick.apply(l,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(t(),s(g(l.templates.nexticon||`ChevronRight`),o({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,G)),[[u]]):d(``,!0)],16,U)}H.render=K;var q=m.extend({name:`tab`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}}}),J={name:`Tab`,extends:{name:`BaseTab`,extends:S,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:q,provide:function(){return{$pcTab:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e)}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?b(t,`data-p-disabled`)||b(t,`data-pc-section`)===`activebar`?this.findNextTab(t):i(t,`[data-pc-name="tab"]`):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?b(t,`data-p-disabled`)||b(t,`data-pc-section`)===`activebar`?this.findPrevTab(t):i(t,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){e(n),this.scrollInView(n)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){return M(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},ariaControls:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return A({active:this.active})}},directives:{ripple:y}};function Y(e,n,r,i,a,c){var l=C(`ripple`);return e.asChild?E(e.$slots,`default`,{dataP:c.dataP,class:j(e.cx(`root`)),active:c.active,a11yAttrs:c.a11yAttrs,onClick:c.onClick},void 0,void 0,1):w((t(),s(g(e.as),o({key:0,class:e.cx(`root`),"data-p":c.dataP,onClick:c.onClick},c.attrs),{default:v(function(){return[E(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[l]])}J.render=Y;var X=m.extend({name:`tabpanels`,classes:{root:`p-tabpanels`}}),de={name:`TabPanels`,extends:{name:`BaseTabPanels`,extends:S,props:{},style:X,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},inheritAttrs:!1};function Z(e,n,r,i,a,s){return t(),P(`div`,o({class:e.cx(`root`),role:`presentation`},e.ptmi(`root`)),[E(e.$slots,`default`)],16)}de.render=Z;var fe=m.extend({name:`tabpanel`,classes:{root:function(e){return[`p-tabpanel`,{"p-tabpanel-active":e.instance.active}]}}}),pe={name:`TabPanel`,extends:{name:`BaseTabPanel`,extends:S,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:fe,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],computed:{active:function(){return M(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},ariaLabelledby:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},attrs:function(){return o(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcTabs?.tabindex,role:`tabpanel`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`tabpanel`,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function me(e,n,r,i,a,c){var l,f;return c.$pcTabs?(t(),P(u,{key:1},[e.asChild?E(e.$slots,`default`,{class:j(e.cx(`root`)),active:c.active,a11yAttrs:c.a11yAttrs},void 0,void 0,1):(t(),P(u,{key:0},[!((l=c.$pcTabs)!=null&&l.lazy)||c.active?w((t(),s(g(e.as),o({key:0,class:e.cx(`root`)},c.attrs),{default:v(function(){return[E(e.$slots,`default`)]}),_:3},16,[`class`])),[[ne,(f=c.$pcTabs)!=null&&f.lazy?!0:c.active]]):d(``,!0)],64))],64)):E(e.$slots,`default`,{},void 0,void 0,0)}pe.render=me;var Q={text:``,scope:`current`,filters:{}},he=n(`search`,()=>{let e=x({...Q}),t=x([]),n=x(!1);async function r(r){let{accountId:i,scope:a}=r;e.value={...e.value,scope:a};let o=a===`all`?O:i??``;if(!o){t.value=[];return}n.value=!0;try{let n=await _.searchIndex.search(o,e.value);t.value=n.map(e=>{let t=e,n=t.accountId??o;return{...t,accountId:n}})}finally{n.value=!1}}function i(){e.value={...Q},t.value=[]}return{query:e,results:t,loading:n,search:r,reset:i}}),ge={class:`mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-12 xl:px-16`},_e={class:`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between`},ve={class:`flex-1`},ye={class:`flex flex-col gap-2 text-sm text-slate-600`,for:`search-keyword`},be={class:`flex items-center gap-2 text-sm`},xe={class:`rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600`},Se={key:1,class:`rounded-lg border border-dashed border-slate-200/70 bg-slate-50/70 p-6 text-sm text-slate-500`},Ce=`1970-01-01T00:00:00.000Z`,$=p({__name:`SearchView`,setup(e){let n=he(),i=re(),o=te(),d=ue(),p=le(),{accounts:m}=l(o),{activeAccountId:g,unlocked:_}=l(i),{results:y,loading:b,query:S}=l(n),{posts:C}=l(d),{topics:ne}=l(p),w=x(`all`),T=r({get:()=>S.value.text,set:e=>{S.value={...S.value,text:e}}}),E=r(()=>T.value.trim().toLowerCase()),D=r(()=>{let e=new Map;return m.value.forEach(t=>{e.set(t.id,t.name)}),e}),A=r(()=>_.value?g.value?g.value===`__ALL__`?`全部账号`:D.value.get(g.value)??`未知账号`:`请选择账号`:`尚未解锁`),j=r(()=>!(!b.value&&_.value&&g.value)),M=r(()=>{let e=new Set,t=g.value===O;return C.value.forEach(n=>{Number.isFinite(n.topicId)&&(t||n.accountId===g.value)&&e.add(n.topicId)}),e}),I=r(()=>{if(!M.value.size)return[];let e=[];return M.value.forEach(t=>{let n=ne.value[t];n&&e.push(n)}),e});function L(e){let t=E.value;return!t||typeof e==`string`&&e.toLowerCase().includes(t)}function R(e){return e?L(typeof e.content==`string`?e.content:String(e.content??``)):!1}function B(e){let t=e.meta?.title;return typeof t==`string`?t:``}function V(e,t){if(!e)return null;let n=e,r=typeof n.accountId==`string`&&n.accountId.length?n.accountId:`topic:${e.topicId??t}`,i=typeof e.likeCount==`number`?e.likeCount:0,a=typeof e.dislikeCount==`number`?e.dislikeCount:0,o=typeof e.floor==`number`&&!Number.isNaN(e.floor)?e.floor:1,s=typeof e.time==`string`&&e.time.length?e.time:Ce,c=typeof e.content==`string`?e.content:String(e.content??``);return{...e,accountId:r,likeCount:i,dislikeCount:a,floor:o,time:s,content:c}}function U(e){return[...e].sort((e,t)=>{let n=new Date(e.time).getTime(),r=new Date(t.time).getTime();return(Number.isNaN(r)?0:r)-(Number.isNaN(n)?0:n)})}function W(e){let t=new Map;return e.forEach(e=>{let n=Number.isFinite(e.topicId)?`${e.topicId}-${e.id}`:`${e.accountId}-${e.id}`;t.has(n)||t.set(n,e)}),U(Array.from(t.values()))}let G=r(()=>U(y.value.slice())),K=r(()=>U(I.value.flatMap(e=>{if(!L(B(e)))return[];let t=V(e.firstFloor,`titles`);return t?[t]:[]}))),q=r(()=>U(I.value.flatMap(e=>{let t=e.firstFloor;if(!R(t))return[];let n=V(t,`firstFloor`);return n?[n]:[]}))),Y=r(()=>U(I.value.flatMap(e=>(e.hotPosts??[]).filter(e=>R(e)).map(e=>V(e,`hot`)).filter(e=>!!e)))),X=r(()=>W([...G.value,...K.value,...q.value,...Y.value])),Z=r(()=>T.value?[{key:`all`,label:`全部`,posts:X.value,count:X.value.length},{key:`replies`,label:`回帖`,posts:G.value,count:G.value.length},{key:`titles`,label:`主题标题`,posts:K.value,count:K.value.length},{key:`firstFloor`,label:`楼主首帖`,posts:q.value,count:q.value.length},{key:`hot`,label:`热评`,posts:Y.value,count:Y.value.length}]:[{key:`all`,label:`全部`,posts:[],count:0},{key:`replies`,label:`回帖`,posts:[],count:0},{key:`titles`,label:`主题标题`,posts:[],count:0},{key:`firstFloor`,label:`楼主首帖`,posts:[],count:0},{key:`hot`,label:`热评`,posts:[],count:0}]),fe=r(()=>b.value?`正在检索本地索引…`:X.value.length?T.value?`共 ${X.value.length} 条结果`:`请输入标题或内容关键字，并点击搜索按钮`:`未命中结果`);function me(e){let t=new Set(e),n=new Set;return C.value.forEach(e=>{(!t.size||t.has(e.accountId))&&Number.isFinite(e.topicId)&&n.add(e.topicId)}),Array.from(n)}async function Q(e){if(!e.length)return;let t=me(e);t.length&&await p.ensureFromStorage(t)}async function $(e){if(e){if(e===`__ALL__`){if(!m.value.length)return;let e=m.value.map(e=>e.id);await d.loadFromStorage(e),await Q(e);return}await d.loadFromStorage(e),await Q([e])}}async function we(){if(j.value||!T.value)return;let e=g.value===`__ALL__`?`all`:`current`;await $(g.value),await n.search({accountId:g.value,scope:e}),w.value=`all`,await p.ensureFromStorage(Array.from(M.value))}return k(g,async e=>{e&&await $(e)},{immediate:!0}),k(m,async e=>{e.length&&g.value===`__ALL__`&&await $(O)},{immediate:!0}),k(()=>{let e=Array.from(M.value);return e.length?(e.sort((e,t)=>e-t),e.join(`,`)):``},async e=>{if(!e)return;let t=e.split(`,`).map(e=>Number.parseInt(e,10)).filter(e=>Number.isFinite(e));t.length&&await p.ensureFromStorage(t)},{immediate:!0}),ee(async()=>{await o.refresh()}),(e,n)=>(t(),P(`div`,ge,[a(`header`,_e,[n[2]||=a(`div`,{class:`space-y-1`},[a(`h1`,{class:`text-2xl font-semibold text-slate-900`},`搜索帖子`),a(`p`,{class:`text-sm text-slate-500`},`根据导航栏选择的账号范围执行本地加密搜索`)],-1),f(h(se),{value:A.value,severity:`info`,icon:`pi pi-user`},null,8,[`value`])]),f(F,{title:`搜索条件`,description:`输入关键字，即时在缓存中检索。点击搜索按钮或按回车后，在本地数据库中全量检索。`},{default:v(()=>[a(`form`,{class:`flex flex-col gap-4 sm:flex-row sm:items-end`,onSubmit:c(we,[`prevent`])},[a(`div`,ve,[a(`label`,ye,[f(h(oe),{id:`search-keyword`,modelValue:T.value,"onUpdate:modelValue":n[0]||=e=>T.value=e,modelModifiers:{trim:!0},placeholder:`输入标题或内容关键字`},null,8,[`modelValue`])])]),f(h(ie),{type:`submit`,disabled:j.value,label:h(b)?`正在搜索…`:`搜索`,icon:`pi pi-search`},null,8,[`disabled`,`label`])],32)]),_:1}),f(F,{title:`搜索结果`,description:fe.value},{default:v(()=>[f(h(z),{value:w.value,"onUpdate:value":n[1]||=e=>w.value=e,class:`mt-2`},{default:v(()=>[f(h(H),null,{default:v(()=>[(t(!0),P(u,null,ae(Z.value,e=>(t(),s(h(J),{key:e.key,value:e.key},{default:v(()=>[a(`span`,be,[a(`span`,null,N(e.label),1),a(`span`,xe,N(e.count),1)])]),_:2},1032,[`value`]))),128))]),_:1}),f(h(de),null,{default:v(()=>[(t(!0),P(u,null,ae(Z.value,e=>(t(),s(h(pe),{key:`panel-${e.key}`,value:e.key,class:`pt-4`},{default:v(()=>[e.posts.length?(t(),s(ce,{key:0,posts:e.posts,loading:h(b)&&w.value===e.key},null,8,[`posts`,`loading`])):(t(),P(`p`,Se,N(h(b)&&w.value===e.key?`正在搜索，请稍候…`:`暂无结果，尝试调整关键字或执行同步。`),1))]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`value`])]),_:1},8,[`description`])]))}});export{$ as default};