import{$ as e,$t as t,Ct as n,D as r,Ft as i,G as a,Gt as o,Ht as s,It as c,Jt as l,Lt as u,Nt as ee,Ot as d,Pt as f,Qt as te,Rt as p,S as m,St as h,Tt as g,Ut as _,Wt as v,X as ne,Y as y,Yt as re,Zt as ie,_ as b,_n as x,a as ae,an as S,c as oe,cn as C,d as w,fn as T,ft as E,h as D,hn as O,ht as k,i as se,in as ce,it as A,kt as j,ln as le,m as M,n as N,nn as P,o as ue,q as de,r as fe,rn as F,rt as I,sn as L,tn as R,ut as z,vn as B,wt as V,xn as H,yn as U,yt as W,zt as G}from"./button-BkTqIT2n.js";import{r as pe,x as K}from"./index-Dxj-NWHN.js";import{t as me}from"./tag-CO8OMr3h.js";import{t as he}from"./topicStore-DQzU9yeM.js";import{t as ge}from"./boardMap-Dh4JhSvg.js";var _e={key:0,class:`mb-6 flex flex-wrap items-start justify-between gap-4`},q={class:`space-y-1`},J={key:0,class:`text-lg font-semibold text-slate-900`},Y={key:1,class:`text-sm text-slate-500`},ve={key:0,class:`flex items-center gap-2`},ye={class:`space-y-4`},be=v({__name:`BaseCard`,props:{title:{type:String,default:``},description:{type:String,default:``},padding:{type:String,default:`p-6`}},setup(e){return(n,r)=>(t(),G(`section`,{class:B([`rounded-2xl border border-slate-200/60 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-sm `,e.padding])},[e.title||e.description||n.$slots.actions?(t(),G(`header`,_e,[c(`div`,q,[e.title?(t(),G(`h2`,J,H(e.title),1)):p(``,!0),e.description?(t(),G(`p`,Y,H(e.description),1)):p(``,!0)]),n.$slots.actions?(t(),G(`div`,ve,[P(n.$slots,`actions`)])):p(``,!0)])):p(``,!0),c(`div`,ye,[P(n.$slots,`default`)])],2))}}),xe=b.extend({name:`skeleton`,style:`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-skeleton p-component`,{"p-skeleton-circle":t.shape===`circle`,"p-skeleton-animation-none":t.animation===`none`}]}},inlineStyles:{root:{position:`relative`}}}),Se={name:`BaseSkeleton`,extends:D,props:{shape:{type:String,default:`rectangle`},size:{type:String,default:null},width:{type:String,default:`100%`},height:{type:String,default:`1rem`},borderRadius:{type:String,default:null},animation:{type:String,default:`wave`}},style:xe,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e){var t=Q(e,`string`);return X(t)==`symbol`?t:t+``}function Q(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var we={name:`Skeleton`,extends:Se,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return z(Z({},this.shape,this.shape))}}},$=[`data-p`];function Te(e,n,r,i,a,o){return t(),G(`div`,l({class:e.cx(`root`),style:[e.sx(`root`),o.containerStyle],"aria-hidden":`true`},e.ptmi(`root`),{"data-p":o.dataP}),null,16,$)}we.render=Te;var Ee=b.extend({name:`contextmenu`,style:`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
        will-change: transform;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        will-change: transform;
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        font-weight: dt('contextmenu.item.label.font.weight');
        font-size: dt('contextmenu.item.label.font.size');
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
        font-size: dt('contextmenu.item.icon.size');
        width: dt('contextmenu.item.icon.size');
        height: dt('contextmenu.item.icon.size');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,classes:{root:function(e){return[`p-contextmenu p-component`,{"p-contextmenu-mobile":e.instance.queryMatches}]},rootList:`p-contextmenu-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-contextmenu-item`,{"p-contextmenu-item-active":t.isItemActive(n),"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-contextmenu-item-content`,itemLink:`p-contextmenu-item-link`,itemIcon:`p-contextmenu-item-icon`,itemLabel:`p-contextmenu-item-label`,submenuIcon:`p-contextmenu-submenu-icon`,submenu:`p-contextmenu-submenu`,separator:`p-contextmenu-separator`}}),De={name:`angle-right`,meta:{tags:[`angle-right`,`next`,`proceed`,`right`,`forward`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M7.71972 5.96973C8.01262 5.67684 8.48738 5.67684 8.78027 5.96973L12.2803 9.46973C12.5732 9.76262 12.5732 10.2374 12.2803 10.5303L8.78027 14.0303C8.48738 14.3232 8.01262 14.3232 7.71972 14.0303C7.42683 13.7374 7.42683 13.2626 7.71972 12.9697L10.6894 10L7.71972 7.03028C7.42683 6.73738 7.42683 6.26262 7.71972 5.96973Z`,fill:`currentColor`,key:`gqatxy`}]]},Oe=v({name:`AngleRight`,inheritAttrs:!1,__name:`angle-right`,setup(e){let{Icon:n}=E(De);return(e,r)=>(t(),u(x(n),U(o(e.$attrs)),null,16))}}),ke={name:`BaseContextMenu`,extends:D,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:`960px`},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ee,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},Ae={name:`ContextMenuSub`,hostName:`ContextMenu`,extends:D,emits:[`item-click`,`item-mouseenter`,`item-mousemove`],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return`${this.menuId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?V(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getItemLabelId:function(e){return`${this.menuId}_${e.key}_label`},getPTOptions:function(e,t,n){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:n}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return h(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-click`,{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit(`item-mouseenter`,{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},onEnter:function(){y(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:l({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(`itemLink`,e,t)),icon:l({class:[this.cx(`itemIcon`),W(this.getItemProp(e,`icon`))?this.getItemProp(e,`icon`):void 0]},this.getPTOptions(`itemIcon`,e,t)),label:l({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`,e,t)),submenuicon:l({class:this.cx(`submenuIcon`)},this.getPTOptions(`submenuicon`,e,t))}},resolveIcon:function(e){return W(e)?e:O(e)},isComponentIcon:function(e){return!!e&&!W(e)}},components:{AngleRight:Oe},directives:{ripple:w}},je=[`tabindex`],Me=[`id`,`aria-label`,`aria-disabled`,`aria-expanded`,`aria-haspopup`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-active`,`data-p-focused`,`data-p-disabled`],Ne=[`onClick`,`onMouseenter`,`onMousemove`],Pe=[`href`,`target`],Fe=[`id`],Ie=[`id`];function Le(e,n,r,i,a,o){var s=F(`AngleRight`),ee=F(`ContextMenuSub`,!0),d=ce(`ripple`);return t(),u(j,l({name:`p-anchored-overlay`,onEnter:o.onEnter},e.ptm(`menu.transition`)),{default:C(function(){return[r.root||r.visible?(t(),G(`ul`,l({key:0,ref:`container`,tabindex:r.tabindex},e.ptm(`rootList`)),[(t(!0),G(f,null,R(r.items,function(i,a){return t(),G(f,{key:o.getItemKey(i)},[o.isItemVisible(i)&&!o.getItemProp(i,`separator`)?(t(),G(`li`,l({key:0,id:o.getItemId(i),style:o.getItemProp(i,`style`),class:[e.cx(`item`,{processedItem:i}),o.getItemProp(i,`class`)],role:`menuitem`,"aria-label":o.getItemLabel(i),"aria-disabled":o.isItemDisabled(i)||void 0,"aria-expanded":o.isItemGroup(i)?o.isItemActive(i):void 0,"aria-haspopup":o.isItemGroup(i)&&!o.getItemProp(i,`to`)?`menu`:void 0,"aria-level":r.level+1,"aria-setsize":o.getAriaSetSize(),"aria-posinset":o.getAriaPosInset(a)},{ref_for:!0},o.getPTOptions(`item`,i,a),{"data-p-active":o.isItemActive(i),"data-p-focused":o.isItemFocused(i),"data-p-disabled":o.isItemDisabled(i)}),[c(`div`,l({class:e.cx(`itemContent`),onClick:function(e){return o.onItemClick(e,i)},onMouseenter:function(e){return o.onItemMouseEnter(e,i)},onMousemove:function(e){return o.onItemMouseMove(e,i)}},{ref_for:!0},o.getPTOptions(`itemContent`,i,a)),[r.templates.item?(t(),u(S(r.templates.item),{key:1,item:i.item,hasSubmenu:!!o.getItemProp(i,`items`),label:o.getItemLabel(i),icon:o.getItemProp(i,`icon`)?o.resolveIcon(o.getItemProp(i,`icon`)):void 0,props:o.getMenuItemProps(i,a)},null,8,[`item`,`hasSubmenu`,`label`,`icon`,`props`])):le((t(),G(`a`,l({key:0,href:o.getItemProp(i,`url`),class:e.cx(`itemLink`),target:o.getItemProp(i,`target`),tabindex:`-1`},{ref_for:!0},o.getPTOptions(`itemLink`,i,a)),[r.templates.itemicon?(t(),u(S(r.templates.itemicon),{key:0,item:i.item,class:B(e.cx(`itemIcon`))},null,8,[`item`,`class`])):o.isComponentIcon(o.getItemProp(i,`icon`))?(t(),u(S(o.resolveIcon(o.getItemProp(i,`icon`))),l({key:1,class:e.cx(`itemIcon`)},{ref_for:!0},o.getPTOptions(`itemIcon`,i,a)),null,16,[`class`])):o.getItemProp(i,`icon`)?(t(),G(`span`,l({key:2,class:[e.cx(`itemIcon`),o.getItemProp(i,`icon`)]},{ref_for:!0},o.getPTOptions(`itemIcon`,i,a)),null,16)):p(``,!0),c(`span`,l({id:o.getItemLabelId(i),class:e.cx(`itemLabel`)},{ref_for:!0},o.getPTOptions(`itemLabel`,i,a)),H(o.getItemLabel(i)),17,Fe),o.getItemProp(i,`items`)?(t(),G(f,{key:3},[r.templates.submenuicon?(t(),u(S(r.templates.submenuicon),{key:0,active:o.isItemActive(i),class:B(e.cx(`submenuIcon`))},null,8,[`active`,`class`])):(t(),u(s,l({key:1,class:e.cx(`submenuIcon`)},{ref_for:!0},o.getPTOptions(`submenuicon`,i,a)),null,16,[`class`]))],64)):p(``,!0)],16,Pe)),[[d]])],16,Ne),o.isItemVisible(i)&&o.isItemGroup(i)?(t(),u(ee,l({key:0,id:o.getItemId(i)+`_list`,role:`menu`,class:e.cx(`submenu`),menuId:r.menuId,focusedItemId:r.focusedItemId,items:i.items,templates:r.templates,activeItemPath:r.activeItemPath,level:r.level+1,visible:o.isItemActive(i)&&o.isItemGroup(i),pt:e.pt,unstyled:e.unstyled,onItemClick:n[0]||=function(t){return e.$emit(`item-click`,t)},onItemMouseenter:n[1]||=function(t){return e.$emit(`item-mouseenter`,t)},onItemMousemove:n[2]||=function(t){return e.$emit(`item-mousemove`,t)},"aria-labelledby":o.getItemLabelId(i)},{ref_for:!0},e.ptm(`submenu`)),null,16,[`id`,`class`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`level`,`visible`,`pt`,`unstyled`,`aria-labelledby`])):p(``,!0)],16,Me)):p(``,!0),o.isItemVisible(i)&&o.getItemProp(i,`separator`)?(t(),G(`li`,l({key:1,id:o.getItemId(i),style:o.getItemProp(i,`style`),class:[e.cx(`separator`),o.getItemProp(i,`class`)],role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16,Ie)):p(``,!0)],64)}),128))],16,je)):p(``,!0)]}),_:1},16,[`onEnter`])}Ae.render=Le;var Re={name:`ContextMenu`,extends:ke,inheritAttrs:!1,emits:[`focus`,`blur`,`show`,`hide`,`before-show`,`before-hide`],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:``},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){h(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&m.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?V(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemGroup:function(e){return h(this.getItemProp(e,`items`))},isItemSeparator:function(e){return this.getItemProp(e,`separator`)},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&h(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(t){this.$emit(`before-show`),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``},e(this.list),this.pageX=t.pageX,this.pageY=t.pageY,this.visible?this.position():this.visible=!0,t.stopPropagation(),t.preventDefault()},hide:function(){this.$emit(`before-hide`),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index===-1?{index:-1,level:0,parentKey:``}:this.focusedItemInfo,this.$emit(`focus`,e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:``},this.searchValue=``,this.$emit(`blur`,e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&k(e.key)&&this.searchItems(e,e.key)}},onItemChange:function(t,r){var i=t.processedItem,a=t.isFocus;if(!n(i)){var o=i.index,s=i.key,c=i.level,l=i.parentKey,u=i.items,ee=h(u),d=this.activeItemPath.filter(function(e){return e.parentKey!==l&&e.parentKey!==s});ee&&(d.push(i),this.submenuVisible=!0),this.focusedItemInfo={index:o,level:c,parentKey:l},a&&e(this.list),!(r===`hover`&&this.queryMatches)&&(this.activeItemPath=d)}},onItemClick:function(t){var n=t.processedItem,r=this.isProccessedItemGroup(n);if(this.isSelected(n)){var i=n.index,a=n.key,o=n.level,s=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(e){return a!==e.key&&a.startsWith(e.key)}),this.focusedItemInfo={index:i,level:o,parentKey:s},e(this.list)}else r?this.onItemChange(t):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,`hover`)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var n=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],i=this.activeItemPath.find(function(e){return e.key===r.parentKey});n(r.parent)||(this.focusedItemInfo={index:-1,parentKey:i?i.parentKey:``},this.searchValue=``,this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue=``,this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=a(this.list,`li[id="${`${this.focusedItemIdx}`}"]`),n=t&&a(t,`[data-pc-section="itemlink"]`);n?n.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){r(e,{position:`absolute`}),this.position(),this.autoZIndex&&m.set(`menu`,e,this.baseZIndex||this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit(`show`),e(this.list)},onLeave:function(){this.$emit(`hide`),this.container=null},onAfterLeave:function(e){this.autoZIndex&&m.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,n=this.container.offsetParent?this.container.offsetWidth:ne(this.container),r=this.container.offsetParent?this.container.offsetHeight:A(this.container),i=de(),a=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,o=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+n-o>i.width&&(e-=n),t+r-a>i.height&&(t-=r),e<o&&(e=o),t<a&&(t=a),this.container.style.left=e+`px`,this.container.style.top=t+`px`},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.visible||!e.target||e.target!==t.target&&!e.target.contains(t.target);n&&r&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!I()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener(`contextmenu`,this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&=(document.removeEventListener(`contextmenu`,this.documentContextMenuListener),null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return g(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(e){return t.isValidItem(e)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var t=this,n=e>0?g(this.visibleItems.slice(0,e),function(e){return t.isValidItem(e)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=-1,i=!1;return this.focusedItemInfo.index===-1?r=this.visibleItems.findIndex(function(e){return n.isItemMatched(e)}):(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}):r+this.focusedItemInfo.index),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e===-1?this.focusedItemIdx:`${this.$id}_${e}`,n=a(this.list,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:`nearest`,inline:`start`})},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(t){return t.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index===-1?null:`${this.$id}${h(this.focusedItemInfo.parentKey)?`_`+this.focusedItemInfo.parentKey:``}_${this.focusedItemInfo.index}`}},components:{ContextMenuSub:Ae,Portal:M}};function ze(e,n,r,i,a,o){var s=F(`ContextMenuSub`),c=F(`Portal`);return t(),u(c,{appendTo:e.appendTo},{default:C(function(){return[_(j,l({name:`p-anchored-overlay`,onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},e.ptm(`transition`)),{default:C(function(){return[a.visible?(t(),G(`div`,l({key:0,ref:o.containerRef,class:e.cx(`root`)},e.ptmi(`root`)),[_(s,{ref:o.listRef,id:e.$id+`_list`,class:B(e.cx(`rootList`)),role:`menubar`,root:!0,tabindex:e.tabindex,"aria-orientation":`vertical`,"aria-activedescendant":a.focused?o.focusedItemIdx:void 0,menuId:e.$id,focusedItemId:a.focused?o.focusedItemIdx:void 0,items:o.processedItems,templates:e.$slots,activeItemPath:a.activeItemPath,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,level:0,visible:a.submenuVisible,pt:e.pt,unstyled:e.unstyled,onFocus:o.onFocus,onBlur:o.onBlur,onKeydown:o.onKeyDown,onItemClick:o.onItemClick,onItemMouseenter:o.onItemMouseEnter,onItemMousemove:o.onItemMouseMove},null,8,[`id`,`class`,`tabindex`,`aria-activedescendant`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`aria-labelledby`,`aria-label`,`visible`,`pt`,`unstyled`,`onFocus`,`onBlur`,`onKeydown`,`onItemClick`,`onItemMouseenter`,`onItemMousemove`])],16)):p(``,!0)]}),_:1},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:1},8,[`appendTo`])}Re.render=ze;var Be=b.extend({name:`overlaybadge`,style:`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,classes:{root:`p-overlaybadge`}}),Ve={name:`OverlayBadge`,extends:{name:`OverlayBadge`,extends:N,style:Be,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},inheritAttrs:!1,components:{Badge:N}};function He(e,n,r,i,a,o){var s=F(`Badge`);return t(),G(`div`,l({class:e.cx(`root`)},e.ptmi(`root`)),[P(e.$slots,`default`),_(s,l(e.$props,{pt:e.ptm(`pcBadge`)}),null,16,[`pt`])],16)}Ve.render=He;var Ue={class:`relative`},We={key:0,class:`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`},Ge={key:0,class:`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`},Ke=[`onContextmenu`],qe={key:0,class:`absolute right-3 top-3 flex items-center gap-2`},Je=[`href`,`onClick`],Ye={class:`flex flex-wrap items-center gap-2 text-xs text-slate-500`},Xe={class:`ml-auto flex items-center gap-2 text-slate-600`},Ze={key:0,class:`pi pi-bookmark-fill text-amber-500`,"aria-label":`已关注`},Qe={class:`font-medium text-slate-700`},$e={key:0,class:`text-base font-semibold text-slate-900 group-hover:text-blue-600`},et={class:`line-clamp-3 text-sm text-slate-600`},tt={class:`mt-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400`},nt={class:`flex items-center gap-3 text-slate-500`},rt={class:`flex items-center gap-3 text-slate-400`},it={key:2,class:`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`},at=K(v({__name:`PostInfiniteGrid`,props:{posts:{},loading:{type:Boolean,default:!1},chunkSize:{default:24},skeletonHeight:{default:`180px`}},setup(e){let n=pe(),r=[`replyCount`,`hotPosts`,`firstFloor`],a={replyCount:{severity:`danger`,label:`回复数量发生变化`},hotPosts:{severity:`warning`,label:`热评内容有更新`},firstFloor:{severity:`info`,label:`楼主主楼已修改`}},o=e,l=se(),m=fe(),h=he(),g=ae(),v=ue(),{accounts:ne}=d(l),{state:y}=d(m),{topics:b}=d(h),{activeAccountId:S}=d(v),w=T(0),E=T(!1),D=T(null),O=null,k=T(),A=T(null),j=T([]),M=i(()=>y.value.shareMode),N=i(()=>y.value.useTopicTitle),P=i(()=>y.value.followSyncOnToggle),de=i(()=>{let e=new Map;return ne.value.forEach(t=>{e.set(t.id,t.name)}),e}),F=i(()=>o.posts??[]),I=i(()=>F.value.slice(0,w.value)),z=i(()=>w.value<F.value.length),B=i(()=>o.loading&&!I.value.length),V=i(()=>E.value&&I.value.length),U=i(()=>{if(B.value)return o.chunkSize;if(V.value){let e=F.value.length-w.value;return Math.min(o.chunkSize,e>0?e:o.chunkSize)}return 0});function W(e){return M.value?`***`:(e.accountId?de.value.get(e.accountId):void 0)||(typeof e.userName==`string`&&e.userName.trim().length?e.userName.trim():`未知账号`)}function K(e){return ge[e]??`版面 #${e}`}function _e(e){let t=Number(e.topicId);return Number.isFinite(t)?g.isFollowed(e.accountId,t):!1}function q(e){let t=Number(e.topicId);return Number.isFinite(t)?g.getEntry(e.accountId,t):null}function J(e){let t=q(e);return t?t.unread&&Object.values(t.alerts??{}).some(Boolean):!1}function Y(e){let t=q(e);return!t||!t.unread?[]:r.filter(e=>t.alerts?.[e]).map(e=>({type:e,...a[e]}))}async function ve(e,t={}){let r=Number(e.topicId);if(!Number.isFinite(r))return;let i=e.accountId;if(i&&g.hasUnread(i,r))try{await g.markAsRead(i,r),t.silent||n.add({severity:`info`,summary:`已设为已读`,detail:`主题更新标记已清除`,life:1800})}catch(e){console.error(`[PostInfiniteGrid] 标记已读失败`,e),t.silent||n.add({severity:`error`,summary:`操作失败`,detail:`更新阅读状态失败，请稍后重试`,life:2200})}finally{A.value&&A.value.accountId===e.accountId&&A.value.id===e.id&&(j.value=$(A.value))}}function ye(e){if(!N.value)return K(e.boardId);let t=b.value[e.topicId]?.meta?.title;return typeof t==`string`&&t.trim().length?t.trim():K(e.boardId)}function be(e){let t=b.value[e.topicId]?.meta?.title;return typeof t==`string`&&t.trim().length?t.trim():K(e.boardId)}function xe(e,t=96){if(M.value)return`***`;let n=e.replace(/\s+/g,` `).trim();return n.length>t?`${n.slice(0,t)}…`:n}function Se(e){if(M.value)return`***`;let t=new Date(e);return Number.isNaN(t.getTime())?`时间未知`:new Intl.DateTimeFormat(`zh-CN`,{dateStyle:`medium`,timeStyle:`short`}).format(t)}function X(e){let t=e.topicId??e.id,n=Math.max(1,Math.ceil(e.floor/10));return`https://cc98.org/topic/${t}/${n}#${e.floor-(n-1)*10||10}`}async function Z(e){if(!N.value||!e.length)return;let t=Array.from(new Set(e.map(e=>e.topicId).filter(e=>typeof e==`number`&&Number.isFinite(e))));t.length&&await h.ensureFromStorage(t)}async function Ce(){if(E.value||o.loading||!z.value)return;E.value=!0,await new Promise(e=>setTimeout(e,120));let e=Math.min(w.value+o.chunkSize,F.value.length);N.value&&await Z(F.value.slice(w.value,e)),w.value=e,E.value=!1}async function Q(){O&&=(O.disconnect(),null),z.value&&(await re(),D.value&&(O=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&Ce()},{rootMargin:`320px 0px`,threshold:.1}),O.observe(D.value)))}L(F,async e=>{E.value=!1,w.value=Math.min(o.chunkSize,e.length),await Z(e.slice(0,w.value)),await Q()},{immediate:!0}),L(N,async e=>{e&&await Z(I.value)});function $(e){let t=Number(e.topicId),n=S.value,r=g.isFollowed(n,Number.isFinite(t)?t:null),i=!!(n&&n!==`__ALL__`&&Number.isFinite(t)),a=Number.isFinite(t),o=J(e);return[{label:`同步主题帖`,icon:`pi pi-refresh`,disabled:!a,command:()=>{Ae(e)}},{separator:!0},{label:`复制标题`,icon:`pi pi-copy`,command:()=>{De(e)}},{label:`复制回复`,icon:`pi pi-file-edit`,command:()=>{Oe(e)}},{separator:!0},{label:`设为已读`,icon:`pi pi-check-circle`,disabled:!o,command:()=>{ve(e)}},{separator:!0},{label:r?`取消关注`:`关注主题帖`,icon:r?`pi pi-bookmark-fill`:`pi pi-bookmark`,disabled:!i,command:()=>{Me(e)}}]}function Te(e,t){A.value=t,j.value=$(t),k.value?.show(e)}async function Ee(e){if(typeof e!=`string`||!e.length)throw Error(`没有可复制的内容`);if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,t.style.pointerEvents=`none`,document.body.appendChild(t),t.focus({preventScroll:!0}),t.select();let n=document.execCommand(`copy`);if(document.body.removeChild(t),!n)throw Error(`复制失败`)}async function De(e){try{await Ee(be(e)),n.add({severity:`success`,summary:`已复制`,detail:`标题已复制到剪贴板`,life:1800})}catch(e){console.warn(`[PostInfiniteGrid] 复制标题失败`,e),n.add({severity:`error`,summary:`复制失败`,detail:`无法复制标题，请稍后再试`,life:2e3})}}async function Oe(e){try{await Ee(e.content??``),n.add({severity:`success`,summary:`已复制`,detail:`回复内容已复制`,life:1800})}catch(e){console.warn(`[PostInfiniteGrid] 复制内容失败`,e),n.add({severity:`error`,summary:`复制失败`,detail:`无法复制回复内容`,life:2e3})}}async function ke(e,t,r={}){let{showStart:i=!1,successSummary:a=`同步完成`,successDetail:o=`主题帖详情已更新`}=r;if(!Number.isFinite(e))return n.add({severity:`warn`,summary:`刷新失败`,detail:`主题帖编号无效`,life:2e3}),!1;if(!t)return n.add({severity:`warn`,summary:`刷新失败`,detail:`未找到可用账号凭据`,life:2e3}),!1;i&&n.add({severity:`info`,summary:`刷新中`,detail:`正在抓取主题帖 #${e}`,life:1800});try{let r=await v.resolveToken(t),i=await oe.forum.fetchTopicBundle(e,r);if(!i.meta)throw Error(`主题元数据为空`);let s={topicId:e,meta:i.meta,firstFloor:i.firstFloor??null,hotPosts:i.hotPosts??[],fetchedAt:new Date().toISOString()};return await oe.topicRepository.save(s),h.upsertMany([s]),n.add({severity:`success`,summary:a,detail:o,life:2e3}),!0}catch(e){return console.error(`[PostInfiniteGrid] 刷新主题详情失败`,e),n.add({severity:`error`,summary:`刷新失败`,detail:`刷新主题帖详情失败，请稍后再试`,life:2400}),!1}}async function Ae(e){let t=Number(e.topicId);if(!Number.isFinite(t)){n.add({severity:`warn`,summary:`操作受限`,detail:`无法识别主题帖编号`,life:2e3});return}let r=e.accountId;await ke(t,r,{showStart:!0,successSummary:`刷新完成`,successDetail:`主题帖 #${t} 已更新`})}function je(e){J(e)&&ve(e,{silent:!0})}async function Me(e){let t=S.value,r=Number(e.topicId);if(!t||t===`__ALL__`){n.add({severity:`warn`,summary:`操作受限`,detail:`请先在导航栏选择具体账号`,life:2200});return}if(!Number.isFinite(r)){n.add({severity:`warn`,summary:`操作受限`,detail:`无法识别主题帖编号`,life:2200});return}let i=g.isFollowed(t,r);try{await g.toggle(t,r),g.isFollowed(t,r)&&!i?(n.add({severity:`success`,summary:`已关注`,detail:`主题已加入关注列表`,life:2e3}),P.value&&await ke(r,t,{successSummary:`同步完成`,successDetail:`主题帖详情已更新`})):n.add({severity:`success`,summary:`已取消关注`,detail:`已从关注列表移除`,life:2e3})}catch(e){console.error(`[PostInfiniteGrid] 切换关注状态失败`,e),n.add({severity:`error`,summary:`操作失败`,detail:`更新关注状态失败，请稍后重试`,life:2200})}finally{j.value=A.value?$(A.value):[]}}return L(D,async()=>{await Q()}),L(z,async()=>{await Q()}),te(()=>{O&&=(O.disconnect(),null)}),ie(()=>{g.loaded||g.load()}),(n,r)=>{let i=ce(`tooltip`);return t(),G(`div`,Ue,[_(x(Re),{ref_key:`contextMenu`,ref:k,model:j.value,onHide:r[0]||=e=>A.value=null},null,8,[`model`]),B.value?(t(),G(`div`,We,[(t(!0),G(f,null,R(U.value,n=>(t(),u(x(we),{key:`initial-skeleton-${n}`,height:e.skeletonHeight,class:`rounded-xl`},null,8,[`height`]))),128))])):(t(),G(f,{key:1},[I.value.length?(t(),G(`ul`,Ge,[(t(!0),G(f,null,R(I.value,e=>(t(),G(`li`,{key:`${e.accountId}-${e.id}`,class:`group relative rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg`,onContextmenu:ee(t=>Te(t,e),[`prevent`])},[Y(e).length?(t(),G(`div`,qe,[(t(!0),G(f,null,R(Y(e),e=>le((t(),u(x(Ve),{key:e.type,value:``,severity:e.severity,class:`overlay-dot`},{default:C(()=>[...r[1]||=[c(`span`,{class:`overlay-anchor`},null,-1)]]),_:1},8,[`severity`])),[[i,e.label]])),128))])):p(``,!0),c(`a`,{href:X(e),target:`_blank`,rel:`noopener`,class:`flex h-full flex-col gap-3`,onClick:t=>je(e)},[c(`div`,Ye,[_(x(me),{rounded:``,severity:`info`},{default:C(()=>[s(H(K(e.boardId)),1)]),_:2},1024),e.isAnonymous?(t(),u(x(me),{key:0,rounded:``,severity:`warn`,value:`匿名`})):p(``,!0),c(`div`,Xe,[_e(e)?(t(),G(`i`,Ze)):p(``,!0),c(`span`,Qe,H(W(e)),1)])]),N.value?(t(),G(`h3`,$e,H(ye(e)),1)):p(``,!0),c(`p`,et,H(xe(e.content)),1),c(`footer`,tt,[c(`div`,nt,[c(`span`,null,`赞 `+H(M.value?`*`:e.likeCount),1),c(`span`,null,`踩 `+H(M.value?`*`:e.dislikeCount),1)]),c(`div`,rt,[c(`span`,null,H(Se(e.time)),1),c(`span`,null,`楼层 `+H(M.value?`*`:e.floor),1)])])],8,Je)],40,Ke))),128))])):p(``,!0),I.value.length&&z.value?(t(),G(`div`,{key:1,ref_key:`loadMoreTrigger`,ref:D,class:`h-6 w-full`},null,512)):p(``,!0),V.value?(t(),G(`div`,it,[(t(!0),G(f,null,R(U.value,n=>(t(),u(x(we),{key:`chunk-skeleton-${n}`,height:e.skeletonHeight,class:`rounded-xl`},null,8,[`height`]))),128))])):p(``,!0)],64))])}}}),[[`__scopeId`,`data-v-f9c98aaa`]]);export{be as n,at as t};