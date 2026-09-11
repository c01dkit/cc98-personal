const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sdk-C4juWEnQ.js","assets/index-Dxj-NWHN.js","assets/button-BkTqIT2n.js","assets/index-CuZQD8Sg.css","assets/error-CJ3RHG07.js"])))=>i.map(i=>d[i]);
import{$t as e,Dt as t,Ft as n,Jt as r,Lt as i,Rt as a,_ as o,an as s,c,fn as l,h as u,nn as d,ut as f,xn as p,zt as m}from"./button-BkTqIT2n.js";import{a as h,o as g}from"./index-Dxj-NWHN.js";var _=o.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }
    
    .p-chip.p-focus {
        background: dt('chip.focus.background');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
        flex-shrink: 0;
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
        flex-shrink: 0;
    }

    .p-chip-label {
        font-weight: dt('chip.label.font.weight');
        font-size: dt('chip.label.font.size');
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),v={name:`Chip`,extends:{name:`BaseChip`,extends:u,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:_,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return f({removable:this.removable})}},components:{TimesCircle:g}},y=[`data-p`],b=[`src`];function x(t,n,o,c,l,u){return l.visible?(e(),m(`div`,r({key:0,class:t.cx(`root`)},t.ptmi(`root`),{"data-p":u.dataP}),[d(t.$slots,`default`,{},function(){return[t.image?(e(),m(`img`,r({key:0,src:t.image},t.ptm(`image`),{class:t.cx(`image`)}),null,16,b)):t.$slots.icon?(e(),i(s(t.$slots.icon),r({key:1,class:t.cx(`icon`)},t.ptm(`icon`)),null,16,[`class`])):t.icon?(e(),m(`span`,r({key:2,class:[t.cx(`icon`),t.icon]},t.ptm(`icon`)),null,16)):a(``,!0),t.label===null?a(``,!0):(e(),m(`div`,r({key:3,class:t.cx(`label`)},t.ptm(`label`)),p(t.label),17))]}),t.removable?d(t.$slots,`removeicon`,{removeCallback:u.close,keydownCallback:u.onKeydown},function(){return[(e(),i(s(t.removeIcon?`span`:`TimesCircle`),r({class:[t.cx(`removeIcon`),t.removeIcon],tabindex:`0`,onClick:u.close,onKeydown:u.onKeydown},t.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]},void 0,0):a(``,!0)],16,y)):a(``,!0)}v.render=x;var S=class extends Error{kind;constructor(e,t){super(t),this.name=`ModelError`,this.kind=e}};function C(e){return e===401||e===403?`auth`:e===404?`not_found`:e===429?`rate_limit`:e>=500?`server`:`unknown`}function w(e){return e===401||e===403?`API Key 无效或没有访问该模型的权限，请到设置页检查。`:e===404?`接口地址或模型名不对，请检查 base url 是否带上了 /v1，以及模型名是否拼写正确。`:e===429?`请求过于频繁，已被服务方限流，稍后再试或换用额度更充足的账号。`:e>=500?`模型服务返回了 ${e}，是对方服务端故障，稍后再试。`:`模型服务返回了 ${e}，请求未被接受。`}function T(){return`请求未能送达。该服务可能不允许浏览器直连（CORS），建议改用支持跨域的服务或本地模型。`}function E(e){return e===`rate_limit`||e===`server`||e===`network`}function D(e){return e instanceof Error&&(e.name===`AbortError`||e.name===`TimeoutError`)}var O=`claude-opus-5`,k=`https://api.anthropic.com`,A=128;function j(e,t){let n={model:e.modelName||`claude-opus-5`,max_tokens:t.maxTokens,system:t.system,messages:[{role:`user`,content:t.user}],output_config:{effort:t.effort}};return t.jsonSchema&&n.output_config&&(n.output_config.format={type:`json_schema`,schema:t.jsonSchema}),n}function M(e){if(e.stop_reason===`refusal`)throw new S(`unknown`,`模型拒绝了这次分析请求。可以换一个模型再试。`);let t=(e.content??[]).filter(e=>e.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(``);if(!t.length)throw new S(`parse`,`模型没有返回任何内容。`);return t}function N(e){if(e instanceof S)return e;if(D(e))return new S(`aborted`,`分析已取消。`);let t=e?.status;return typeof t==`number`?new S(C(t),w(t)):new S(`network`,T())}var P=class{protocol=`anthropic`;config;clientPromise=null;constructor(e){this.config=e}async getClient(){return this.clientPromise||=h(async()=>{let{default:e}=await import(`./sdk-C4juWEnQ.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4])).then(({default:e})=>new e({apiKey:this.config.apiKey,baseURL:this.config.baseUrl||`https://api.anthropic.com`,dangerouslyAllowBrowser:!0})),this.clientPromise}async complete(e){try{let t=await(await this.getClient()).messages.create(j(this.config,e),{signal:e.signal});return{text:M(t),usage:{inputTokens:t.usage?.input_tokens,outputTokens:t.usage?.output_tokens}}}catch(e){throw N(e)}}async probe(){await this.complete({system:`你是一个用于连通性测试的助手。`,user:`请回复“ok”。`,effort:`low`,maxTokens:A})}},F=128,I=class{protocol=`openai`;config;fetchImpl;constructor(e,t){this.config=e,this.fetchImpl=t??((...e)=>fetch(...e))}endpoint(){return`${this.config.baseUrl.replace(/\/+$/,``)}/chat/completions`}buildBody(e,t){let n={model:this.config.modelName,messages:[{role:`system`,content:e.system},{role:`user`,content:e.user}],max_tokens:e.maxTokens,temperature:.2};return t&&(n.response_format={type:`json_object`}),n}async send(e,t){try{return await this.fetchImpl(this.endpoint(),{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${this.config.apiKey}`},body:JSON.stringify(this.buildBody(e,t)),signal:e.signal})}catch(e){throw D(e)?new S(`aborted`,`分析已取消。`):new S(`network`,T())}}async complete(e){let t=!!e.jsonSchema,n=await this.send(e,t);if(!n.ok&&n.status===400&&t&&(n=await this.send(e,!1)),!n.ok)throw new S(C(n.status),w(n.status));let r=await n.json().catch(()=>void 0),i=r?.choices?.[0]?.message?.content;if(typeof i!=`string`||!i.length)throw new S(`parse`,`模型没有返回任何内容。`);return{text:i,usage:{inputTokens:r?.usage?.prompt_tokens,outputTokens:r?.usage?.completion_tokens}}}async probe(){await this.complete({system:`你是一个用于连通性测试的助手。`,user:`请回复“ok”。`,effort:`low`,maxTokens:F})}};function L(e){if(e.protocol===`openai`)return new I(e);if(e.protocol===`anthropic`)return new P(e);throw new S(`unknown`,`不支持的模型协议。`)}function R(){return{protocol:`openai`,baseUrl:``,modelName:``,apiKey:``}}function z(){return null}var B=t(`modelConfig`,()=>{let e=l(R()),t=l(!1),r=l(!1),i=n(()=>!!(e.value.baseUrl.trim()&&e.value.modelName.trim()&&e.value.apiKey.trim()));async function a(){try{let t=await c.profileRepository.loadModelConfig();if(t){e.value={...R(),...t};return}let n=z();n&&(e.value=n,await c.profileRepository.saveModelConfig(n))}finally{t.value=!0}}async function o(t){e.value={...e.value,...t},await c.profileRepository.saveModelConfig(e.value)}function s(t){let n={protocol:t};t===`anthropic`&&(e.value.baseUrl.trim()||(n.baseUrl=k),e.value.modelName.trim()||(n.modelName=O)),e.value={...e.value,...n}}async function u(){r.value=!0;try{await L(e.value).probe()}finally{r.value=!1}}return{config:e,loaded:t,testing:r,isConfigured:i,load:a,update:o,applyProtocolDefaults:s,test:u}});export{v as a,E as i,L as n,S as r,B as t};