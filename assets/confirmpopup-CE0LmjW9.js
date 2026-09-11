import{$ as e,$t as t,Ht as n,I as r,It as i,Jt as a,Lt as o,Pt as s,Rt as c,S as l,Ut as u,_ as d,an as f,at as p,b as m,cn as h,ct as g,h as _,hn as v,in as y,kt as b,ln as x,m as S,nn as C,rn as w,rt as T,t as E,vn as D,xn as O,yt as k,zt as A}from"./button-BkTqIT2n.js";import{c as j,m as M,n as N}from"./index-Dxj-NWHN.js";import{t as P}from"./focustrap-B4mQtQOS.js";var F=d.extend({name:`confirmpopup`,style:`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
        will-change: transform;
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-message {
        color: dt('confirmpopup.message.color');
        font-weight: dt('confirmpopup.message.font.weight');
        font-size: dt('confirmpopup.message.font.size');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left', '0px'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,classes:{root:`p-confirmpopup p-component`,content:`p-confirmpopup-content`,icon:`p-confirmpopup-icon`,message:`p-confirmpopup-message`,footer:`p-confirmpopup-footer`,pcRejectButton:`p-confirmpopup-reject-button`,pcAcceptButton:`p-confirmpopup-accept-button`}}),I={name:`ConfirmPopup`,extends:{name:`BaseConfirmPopup`,extends:_,props:{group:String},style:F,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(t){t&&t.group===e.group&&(e.confirmation=t,e.target=t.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.onHide(),e.confirmation=null},N.on(`confirm`,this.confirmListener),N.on(`close`,this.closeListener)},beforeUnmount:function(){N.off(`confirm`,this.confirmListener),N.off(`close`,this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.unbindResizeListener(),this.container&&=(l.clear(this.container),null),this.target=null,this.confirmation=null},methods:{accept:function(){this.visible&&(this.visible=!1,this.confirmation.accept&&this.confirmation.accept())},reject:function(){this.visible&&(this.visible=!1,this.confirmation.reject&&this.confirmation.reject())},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(t){(t.code===`Space`||t.code===`Enter`||t.code===`NumpadEnter`)&&(this.accept(),e(this.target),t.preventDefault())},onRejectKeydown:function(t){(t.code===`Space`||t.code===`Enter`||t.code===`NumpadEnter`)&&(this.reject(),e(this.target),t.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus===`accept`,this.autoFocusReject=this.confirmation.defaultFocus===`reject`,this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),l.set(`overlay`,e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,e(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){l.clear(e)},alignOverlay:function(){g(this.container,this.target,!1);var e=p(this.container),t=p(this.target),n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty(m(`confirmpopup.arrow.left`).name,`${n}px`),e.top<t.top&&(this.container.setAttribute(`data-p-confirmpopup-flipped`,`true`),!this.isUnstyled&&r(this.container,`p-confirmpopup-flipped`))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.visible&&e.container&&!e.container.contains(t.target)&&!e.isTargetClicked(t)?e.onHide():e.alignOverlay()},document.addEventListener(`click`,this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new M(this.target,function(){e.visible&&e.onHide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!T()&&e.onHide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},focus:function(){var e=this.container.querySelector(`[autofocus]`);e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){j.emit(`overlay-click`,{originalEvent:e,target:this.target})},onOverlayKeydown:function(t){t.code===`Escape`&&(N.emit(`close`,this.closeListener),e(this.target))},resolveIcon:function(e){return k(e)?e:v(e)},isComponentIcon:function(e){return!!e&&!k(e)}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e=this.confirmation;return e.acceptLabel||e.acceptProps?.label||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e=this.confirmation;return e.rejectLabel||e.rejectProps?.label||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!=null&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!=null&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:E,Portal:S},directives:{focustrap:P}},L=[`aria-modal`];function R(e,r,l,d,p,m){var g=w(`Button`),_=w(`Portal`),v=y(`focustrap`);return t(),o(_,null,{default:h(function(){return[u(b,a({name:`p-anchored-overlay`,onEnter:m.onEnter,onAfterEnter:m.onAfterEnter,onLeave:m.onLeave,onAfterLeave:m.onAfterLeave},e.ptm(`transition`)),{default:h(function(){return[p.visible?x((t(),A(`div`,a({key:0,ref:m.containerRef,role:`alertdialog`,class:e.cx(`root`),"aria-modal":p.visible,onClick:r[2]||=function(){return m.onOverlayClick&&m.onOverlayClick.apply(m,arguments)},onKeydown:r[3]||=function(){return m.onOverlayKeydown&&m.onOverlayKeydown.apply(m,arguments)}},e.ptmi(`root`)),[e.$slots.container?C(e.$slots,`container`,{message:p.confirmation,acceptCallback:m.accept,rejectCallback:m.reject},void 0,void 0,0):(t(),A(s,{key:1},[e.$slots.message?(t(),o(f(e.$slots.message),{key:1,message:p.confirmation,icon:p.confirmation.icon?m.resolveIcon(p.confirmation.icon):void 0},null,8,[`message`,`icon`])):(t(),A(`div`,a({key:0,class:e.cx(`content`)},e.ptm(`content`)),[C(e.$slots,`icon`,{},function(){return[e.$slots.icon?(t(),o(f(e.$slots.icon),{key:0,class:D(e.cx(`icon`))},null,8,[`class`])):m.isComponentIcon(p.confirmation.icon)?(t(),o(f(m.resolveIcon(p.confirmation.icon)),a({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):p.confirmation.icon?(t(),A(`span`,a({key:2,class:[p.confirmation.icon,e.cx(`icon`)]},e.ptm(`icon`)),null,16)):c(``,!0)]}),i(`span`,a({class:e.cx(`message`)},e.ptm(`message`)),O(p.confirmation.message),17)],16)),i(`div`,a({class:e.cx(`footer`)},e.ptm(`footer`)),[u(g,a({class:[e.cx(`pcRejectButton`),p.confirmation.rejectClass],autofocus:p.autoFocusReject,unstyled:e.unstyled,size:p.confirmation.rejectProps?.size||`small`,text:p.confirmation.rejectProps?.text||!1,onClick:r[0]||=function(e){return m.reject()},onKeydown:m.onRejectKeydown},p.confirmation.rejectProps,{pt:e.ptm(`pcRejectButton`)}),{default:h(function(){return[m.rejectIcon||e.$slots.rejecticon?C(e.$slots,`rejecticon`,{},function(){return[i(`span`,a({class:m.rejectIcon},e.ptm(`pcRejectButton`).icon,{"data-pc-section":`rejectbuttonicon`}),null,16)]},void 0,0):c(``,!0),n(` `+O(m.rejectLabel),1)]}),_:3},16,[`class`,`autofocus`,`unstyled`,`size`,`text`,`onKeydown`,`pt`]),u(g,a({class:[e.cx(`pcAcceptButton`),p.confirmation.acceptClass],autofocus:p.autoFocusAccept,unstyled:e.unstyled,size:p.confirmation.acceptProps?.size||`small`,onClick:r[1]||=function(e){return m.accept()},onKeydown:m.onAcceptKeydown},p.confirmation.acceptProps,{pt:e.ptm(`pcAcceptButton`)}),{default:h(function(){return[m.acceptIcon||e.$slots.accepticon?C(e.$slots,`accepticon`,{},function(){return[i(`span`,a({class:m.acceptIcon},e.ptm(`pcAcceptButton`).icon,{"data-pc-section":`acceptbuttonicon`}),null,16)]},void 0,0):c(``,!0),n(` `+O(m.acceptLabel),1)]}),_:3},16,[`class`,`autofocus`,`unstyled`,`size`,`onKeydown`,`pt`])],16)],64))],16,L)),[[v]]):c(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3})}I.render=R;export{I as t};