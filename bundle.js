(()=>{var f=function(){function o(e){this.element=e,this.onMouseDown=this.onMouseDown.bind(this),this.onScrollEnd=this.onScrollEnd.bind(this),this.onEnd=this.onEnd.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.init()}return o.prototype.init=function(){this.element.addEventListener("mousedown",this.onMouseDown),this.element.addEventListener("mouseup",this.onEnd),this.element.addEventListener("mouseleave",this.onEnd),this.element.addEventListener("mousemove",this.onMouseMove)},o.prototype.onMouseDown=function(e){this.isActive=!0,this.start={y:e.pageY-this.element.offsetTop,x:e.pageX-this.element.offsetLeft},this.scroll={top:this.element.scrollTop,left:this.element.scrollLeft},this.element.addEventListener("scrollend",this.onScrollEnd,{passive:!1,capture:!0})},o.prototype.onScrollEnd=function(e){e.preventDefault(),e.stopPropagation()},o.prototype.onEnd=function(){this.isActive=!1;for(var e=0;e<this.element.childNodes.length;e++)this.element.childNodes[e].style.pointerEvents="",this.element.childNodes[e].style.userSelect="",this.element.childNodes[e].style.removeProperty("pointerEvents"),this.element.childNodes[e].style.removeProperty("userSelect");this.element.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.element.dispatchEvent(new Event("scrollend"))},o.prototype.onMouseMove=function(e){if(this.isActive){if(e.preventDefault(),e.stopPropagation(),this.start.x<e.pageX-this.element.offsetLeft-2||this.start.y<e.pageY-this.element.offsetTop-2)for(var t=0;t<this.element.childNodes.length;t++)this.element.childNodes[t].style.pointerEvents="none",this.element.childNodes[t].style.userSelect="none";var n=e.pageX-this.element.offsetLeft,s=e.pageY-this.element.offsetTop,i=n-this.start.x,l=s-this.start.y;this.element.scrollTo({top:this.scroll.top-l,left:this.scroll.left-i})}},o}(),c=f;var v=function(){function o(e,t){this.element=e,this.config=t,this.onScrollEnd=this.onScrollEnd.bind(this),this.init()}return o.prototype.clear=function(){this.element.removeEventListener("scrollend",this.onScrollEnd)},o.prototype.snap=function(e){var t,n;this.element.scrollTo({left:e,behavior:"smooth"}),(n=(t=this.config).onSnap)===null||n===void 0||n.call(t,e)},o.prototype.init=function(){this.element.addEventListener("scrollend",this.onScrollEnd,{passive:!1})},o.prototype.onScrollEnd=function(){this.snap(this.getSnapPoint(this.element.scrollLeft))},o.prototype.getSnapPoint=function(e){return this.config.snaps.reduce(function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t})},o}(),p=v;var m=function(o){var e;return((e=o.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))!==null&&e!==void 0?e:[]).join("-").toLowerCase()},h=m;var y=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),g=function(o){y(e,o);function e(){var t=o.call(this)||this;return t.name=t.tagName.toLowerCase(),t}return e.register=function(t,n){window.customElements.define(h(t),n)},e.prototype.connectedCallback=function(){var t;if(this.innerHTML=this.html,this.css){var n=document.createElement("style");n.innerHTML=`
                `.concat(this.name,` {
                    `).concat(this.css,`
                }
            `),this.prepend(n)}(t=this.onInit)===null||t===void 0||t.call(this)},e.prototype.on=function(t,n){this.addEventListener(t,n)},e}(HTMLElement),u=g;var S=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),r={size:52},x=function(o){S(e,o);function e(){var t=o.call(this)||this;return t.css=`
        box-sizing: border-box;
        padding-top: 2px;
        padding-bottom: 2px;
        display: block;
        height: `.concat(r.size,`px;
        .container {
            height: inherit;
        }
        .steps {
            display: flex;
            overflow-x: scroll;
            padding-left: calc(50vw - `).concat(r.size/2,`px);
            padding-right: calc(50vw - `).concat(r.size/2,`px);
            .step {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: `).concat(r.size-4,`px;
                height: `).concat(r.size-4,`px;
                flex-shrink: 0;
                cursor: pointer;
                border-radius: 4px;
                margin-left: 2px;
                margin-right: 2px;
                background-color: lightgray;
            }
            .step.selected {
                background-color: transparent;
                font-weight: bold;
                align-items: flex-end;
                line-height: 2;
            }
        }
        svg {
            pointer-events: none;
            position: absolute;
            height: `).concat(r.size-2,`px;
            width: `).concat(r.size,`px;
            top: 0;
            left: calc(50% - `).concat(r.size/2,`px);
            path {
                fill:none;
                stroke:goldenrod;
                stroke-width:4;
            }
        }
    `),t.html=`
        <div class="container">
            <div id="temperature-picker-steps" class="steps"></div>
            <svg viewBox="0 0 52 52">
                <path d="M24,4 A2,2,0,0,1,26,4 L47,19 A2,2,0,0,1,48,21 L48,48 A2,2,0,0,1,46,50 L6,50 A2,2,0,0,1,4,48 L4,21 A2,2,0,0,1,5,19 Z" />
            </svg>
        </div>
    `,t}return e.prototype.onInit=function(){this.createStepElements(),this.snapToValue(),new c(this.querySelector("#temperature-picker-steps"))},e.prototype.attributeChangedCallback=function(t,n,s){t==="steps"&&(this.steps=JSON.parse(s)),t==="value"&&(this.value=JSON.parse(s))},e.prototype.createStepElements=function(){if(this.steps){var t=this.querySelector("#temperature-picker-steps");if(t){for(var n=0,s=this.steps;n<s.length;n++){var i=s[n],l=document.createElement("div");l.classList.add("step"),this.value===i&&l.classList.add("selected"),l.setAttribute("value",i.toString()),l.innerText=i.toLocaleString()+"\xB0",l.onclick=this.setValue.bind(this,i),t.append(l)}this.snaps=this.steps.map(function(E,d){return d*r.size}),this.createScrollSnaps()}}},e.prototype.snapToValue=function(){var t;if(this.scrollSnap&&this.steps&&this.value){var n=(t=this.steps.indexOf(this.value))!==null&&t!==void 0?t:0;this.scrollSnap.snap(n*r.size)}},e.prototype.onSnap=function(t){this.setValue(this.steps[this.snaps.indexOf(t)])},e.prototype.setValue=function(t){this.value!==t&&(this.querySelector('[value="'.concat(this.value.toString(),'"]')).classList.remove("selected"),this.querySelector('[value="'.concat(t.toString(),'"]')).classList.add("selected"),this.setAttribute("value",t.toString()),this.dispatchEvent(new Event("value-change")),this.snapToValue())},e.prototype.createScrollSnaps=function(){this.scrollSnap&&this.scrollSnap.clear(),this.scrollSnap=new p(this.querySelector("#temperature-picker-steps"),{snaps:this.snaps,onSnap:this.onSnap.bind(this)})},e.observedAttributes=["steps","value"],e}(u),a=x;a.register("temperature-picker",a);})();
