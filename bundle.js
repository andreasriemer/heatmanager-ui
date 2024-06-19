(()=>{var v=function(){function o(e){this.element=e,this.onMouseDown=this.onMouseDown.bind(this),this.onScrollEnd=this.onScrollEnd.bind(this),this.onEnd=this.onEnd.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.init()}return o.prototype.init=function(){this.element.addEventListener("mousedown",this.onMouseDown),this.element.addEventListener("mouseup",this.onEnd),this.element.addEventListener("mouseleave",this.onEnd),this.element.addEventListener("mousemove",this.onMouseMove)},o.prototype.onMouseDown=function(e){this.isActive=!0,this.start={y:e.pageY-this.element.offsetTop,x:e.pageX-this.element.offsetLeft},this.scroll={top:this.element.scrollTop,left:this.element.scrollLeft},this.element.addEventListener("scrollend",this.onScrollEnd,{passive:!1,capture:!0})},o.prototype.onScrollEnd=function(e){e.preventDefault(),e.stopPropagation()},o.prototype.onEnd=function(){this.isActive=!1,this.removeStyles(),this.element.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.element.dispatchEvent(new Event("scrollend"))},o.prototype.onMouseMove=function(e){if(this.isActive){e.preventDefault(),e.stopPropagation();var t=e.pageX-this.element.offsetLeft,n=e.pageY-this.element.offsetTop,s=t-this.start.x,i=n-this.start.y,a=Math.round(Math.sqrt(Math.pow(this.start.x-t,2)+Math.pow(this.start.x-t,2))),r=Math.round(Math.sqrt(Math.pow(this.start.y-n,2)+Math.pow(this.start.y-n,2)));(a>2||r>2)&&this.applyStyles(),this.element.scrollTo({top:this.scroll.top-i,left:this.scroll.left-s})}},o.prototype.applyStyles=function(){this.element.style.cursor="grabbing";for(var e=0;e<this.element.childNodes.length;e++)this.element.childNodes[e].style.pointerEvents="none",this.element.childNodes[e].style.userSelect="none"},o.prototype.removeStyles=function(){this.element.style.cursor="",this.element.style.removeProperty("cursor");for(var e=0;e<this.element.childNodes.length;e++)this.element.childNodes[e].style.pointerEvents="",this.element.childNodes[e].style.userSelect="",this.element.childNodes[e].style.removeProperty("pointerEvents"),this.element.childNodes[e].style.removeProperty("userSelect")},o}(),c=v;var m=function(){function o(e,t){this.element=e,this.config=t,this.onScrollEnd=this.onScrollEnd.bind(this),this.init()}return o.prototype.clear=function(){this.element.removeEventListener("scrollend",this.onScrollEnd)},o.prototype.snap=function(e){var t,n;this.element.scrollTo({left:e,behavior:"smooth"}),(n=(t=this.config).onSnap)===null||n===void 0||n.call(t,e)},o.prototype.init=function(){this.element.addEventListener("scrollend",this.onScrollEnd,{passive:!1})},o.prototype.onScrollEnd=function(){this.snap(this.getSnapPoint(this.element.scrollLeft))},o.prototype.getSnapPoint=function(e){return this.config.snaps.reduce(function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t})},o}(),p=m;var y=function(o){var e;return((e=o.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))!==null&&e!==void 0?e:[]).join("-").toLowerCase()},h=y;var g=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),S=function(o){g(e,o);function e(){var t=o.call(this)||this;return t.name=t.tagName.toLowerCase(),t}return e.register=function(t,n){window.customElements.define(h(t),n)},e.prototype.connectedCallback=function(){var t,n;this.load(),(t=this.onLoad)===null||t===void 0||t.call(this),(n=this.onInit)===null||n===void 0||n.call(this)},e.prototype.load=function(){if(this.innerHTML=this.html(),this.css){var t=document.createElement("style");t.innerHTML=`
                `.concat(this.name,` {
                    `).concat(this.css(),`
                }
            `),this.prepend(t)}},e.prototype.reload=function(){var t;this.load(),(t=this.onLoad)===null||t===void 0||t.call(this)},e.prototype.on=function(t,n){this.addEventListener(t,n)},e}(HTMLElement),u=S;var x=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),d={size:52,spacing:4},E=function(o){x(e,o);function e(){var t=o.call(this)||this;return t.size=d.size,t.spacing=d.spacing,t.css=function(){return`
        box-sizing: border-box;
        display: block;
        height: `.concat(t.size+t.size*.3,`px;
        .`).concat(t.name,`-container {
            position: relative;
            height: inherit;
            overflow-y: hidden;
        }
        .`).concat(t.name,`-steps {
            display: flex;
            overflow-x: scroll;
            padding-left: calc(50% - `).concat(t.size/2,`px);
            padding-right: calc(50% - `).concat(t.size/2,`px);
            margin-top: `).concat(t.size*.3,`px;
            .`).concat(t.name,`-step {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: `).concat(t.size,`px;
                height: `).concat(t.size,`px;
                padding-top: `).concat(t.spacing,`px;
                flex-shrink: 0;
                cursor: pointer;
                border-radius: 4px;
                margin-left: `).concat(t.spacing/2,`px;
                margin-right: `).concat(t.spacing/2,`px;
                background-color: rgb(127,127,127,0.1);
                user-select: none;
                border: none;
                font-size: inherit;
            }
            .`).concat(t.name,`-step.selected {
                background-color: transparent;
                font-weight: bold;
            }
        }
        svg {
            pointer-events: none;
            position: absolute;
            height: inherit;
            width: `).concat(t.size+2*t.spacing,`px;
            top: 0;
            left: calc(50% - `).concat((t.size+t.spacing)/2,`px);
            path {
                fill:none;
                stroke:rgb(255 197 43);
                stroke-width:4;
            }
        }
    `)},t.html=function(){return`
        <div class="`.concat(t.name,`-container">
            <div id="temperature-picker-steps" class="`).concat(t.name,`-steps"></div>
            <svg viewBox="0 0 56 72">
              <path
                d="M27,4 A2,2,0,0,1,29,4 L54,21 A2,2,0,0,1,55,23 L55,68 A2,2,0,0,1,53,70 L3,70 A2,2,0,0,1,1,68 L1,23 A2,2,0,0,1,2,21 Z"
              />
            </svg>
        </div>
    `)},t}return e.prototype.onInit=function(){this.createStepElements(),this.snapToValue(),new c(this.querySelector("#temperature-picker-steps"))},e.prototype.attributeChangedCallback=function(t,n,s){t==="steps"&&(this.steps=JSON.parse(s)),t==="value"&&(this.value=JSON.parse(s)),t==="size"&&(this.size=JSON.parse(s),this.reload()),t==="spacing"&&(this.spacing=JSON.parse(s),this.reload())},e.prototype.createStepElements=function(){var t=this;if(this.steps){var n=this.querySelector("#temperature-picker-steps");if(n){for(var s=0,i=this.steps;s<i.length;s++){var a=i[s],r=document.createElement("button");r.classList.add("".concat(this.name,"-step")),this.value===a&&r.classList.add("selected"),r.setAttribute("value",a.toString()),r.innerText=a.toFixed(1).toLocaleString()+"\xB0",r.onclick=this.setValue.bind(this,a),n.append(r)}this.snaps=this.steps.map(function(_,f){return f*(t.size+t.spacing)}),this.createScrollSnaps()}}},e.prototype.snapToValue=function(){var t;if(this.scrollSnap&&this.steps&&this.value){var n=(t=this.steps.indexOf(this.value))!==null&&t!==void 0?t:0;this.scrollSnap.snap(n*(this.size+this.spacing))}},e.prototype.onSnap=function(t){this.setValue(this.steps[this.snaps.indexOf(t)])},e.prototype.setValue=function(t){this.value!==t&&(this.querySelector('[value="'.concat(this.value.toString(),'"]')).classList.remove("selected"),this.querySelector('[value="'.concat(t.toString(),'"]')).classList.add("selected"),this.setAttribute("value",t.toString()),this.dispatchEvent(new Event("value-change")),this.snapToValue())},e.prototype.createScrollSnaps=function(){this.scrollSnap&&this.scrollSnap.clear(),this.scrollSnap=new p(this.querySelector("#temperature-picker-steps"),{snaps:this.snaps,onSnap:this.onSnap.bind(this)})},e.observedAttributes=["steps","value","size","spacing"],e}(u),l=E;l.register("temperature-picker",l);})();
