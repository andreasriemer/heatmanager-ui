(() => {
  // dist/libs/mouse-scroll.lib.js
  var MouseScroll = (
    /** @class */
    function() {
      function MouseScroll2(element) {
        this.element = element;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.init();
      }
      MouseScroll2.prototype.init = function() {
        this.element.addEventListener("mousedown", this.onMouseDown);
        this.element.addEventListener("mouseup", this.onEnd);
        this.element.addEventListener("mouseleave", this.onEnd);
        this.element.addEventListener("mousemove", this.onMouseMove);
      };
      MouseScroll2.prototype.onMouseDown = function(event) {
        this.isActive = true;
        this.start = {
          y: event.pageY - this.element.offsetTop,
          x: event.pageX - this.element.offsetLeft
        };
        this.scroll = {
          top: this.element.scrollTop,
          left: this.element.scrollLeft
        };
        this.element.addEventListener("scrollend", this.onScrollEnd, { passive: false, capture: true });
      };
      MouseScroll2.prototype.onScrollEnd = function(event) {
        event.preventDefault();
        event.stopPropagation();
      };
      MouseScroll2.prototype.onEnd = function() {
        this.isActive = false;
        for (var i = 0; i < this.element.childNodes.length; i++) {
          this.element.childNodes[i].style.pointerEvents = "";
          this.element.childNodes[i].style.userSelect = "";
          this.element.childNodes[i].style.removeProperty("pointerEvents");
          this.element.childNodes[i].style.removeProperty("userSelect");
        }
        this.element.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
        this.element.dispatchEvent(new Event("scrollend"));
      };
      MouseScroll2.prototype.onMouseMove = function(event) {
        if (this.isActive) {
          event.preventDefault();
          event.stopPropagation();
          if (this.start.x < event.pageX - this.element.offsetLeft - 2 || this.start.y < event.pageY - this.element.offsetTop - 2) {
            for (var i = 0; i < this.element.childNodes.length; i++) {
              this.element.childNodes[i].style.pointerEvents = "none";
              this.element.childNodes[i].style.userSelect = "none";
            }
          }
          var x = event.pageX - this.element.offsetLeft;
          var y = event.pageY - this.element.offsetTop;
          var walkX = x - this.start.x;
          var walkY = y - this.start.y;
          this.element.scrollTo({ top: this.scroll.top - walkY, left: this.scroll.left - walkX });
        }
      };
      return MouseScroll2;
    }()
  );
  var mouse_scroll_lib_default = MouseScroll;

  // dist/libs/scroll-snap.lib.js
  var ScrollSnap = (
    /** @class */
    function() {
      function ScrollSnap2(element, config) {
        this.element = element;
        this.config = config;
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.init();
      }
      ScrollSnap2.prototype.clear = function() {
        this.element.removeEventListener("scrollend", this.onScrollEnd);
      };
      ScrollSnap2.prototype.snap = function(position) {
        var _a, _b;
        this.element.scrollTo({ left: position, behavior: "smooth" });
        (_b = (_a = this.config).onSnap) === null || _b === void 0 ? void 0 : _b.call(_a, position);
      };
      ScrollSnap2.prototype.init = function() {
        this.element.addEventListener("scrollend", this.onScrollEnd, { passive: false });
      };
      ScrollSnap2.prototype.onScrollEnd = function() {
        this.snap(this.getSnapPoint(this.element.scrollLeft));
      };
      ScrollSnap2.prototype.getSnapPoint = function(currentPosition) {
        return this.config.snaps.reduce(function(prev, curr) {
          return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
        });
      };
      return ScrollSnap2;
    }()
  );
  var scroll_snap_lib_default = ScrollSnap;

  // dist/utils/string-to-kebap-case.util.js
  var stringToKebapCaseUtil = function(value) {
    var _a;
    return ((_a = value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) !== null && _a !== void 0 ? _a : []).join("-").toLowerCase();
  };
  var string_to_kebap_case_util_default = stringToKebapCaseUtil;

  // dist/components/component.js
  var __extends = /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var Component = (
    /** @class */
    function(_super) {
      __extends(Component2, _super);
      function Component2() {
        var _this = _super.call(this) || this;
        _this.name = _this.tagName.toLowerCase();
        return _this;
      }
      Component2.register = function(name, customElement) {
        window.customElements.define(string_to_kebap_case_util_default(name), customElement);
      };
      Component2.prototype.connectedCallback = function() {
        var _a;
        this.innerHTML = this.html;
        if (this.css) {
          var style = document.createElement("style");
          style.innerHTML = "\n                ".concat(this.name, " {\n                    ").concat(this.css, "\n                }\n            ");
          this.prepend(style);
        }
        (_a = this.onInit) === null || _a === void 0 ? void 0 : _a.call(this);
      };
      Component2.prototype.on = function(type, listener) {
        this.addEventListener(type, listener);
      };
      ;
      return Component2;
    }(HTMLElement)
  );
  var component_default = Component;

  // dist/components/temperature-picker/temperature-picker.js
  var __extends2 = /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var TemperaturePickerOptions = {
    size: 52
  };
  var TemperaturePicker = (
    /** @class */
    function(_super) {
      __extends2(TemperaturePicker2, _super);
      function TemperaturePicker2() {
        var _this = _super.call(this) || this;
        _this.css = "\n        box-sizing: border-box;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        display: block;\n        height: ".concat(TemperaturePickerOptions.size, "px;\n        .container {\n            height: inherit;\n        }\n        .steps {\n            display: flex;\n            overflow-x: scroll;\n            padding-left: calc(50vw - ").concat(TemperaturePickerOptions.size / 2, "px);\n            padding-right: calc(50vw - ").concat(TemperaturePickerOptions.size / 2, "px);\n            .step {\n                display: inline-flex;\n                justify-content: center;\n                align-items: center;\n                width: ").concat(TemperaturePickerOptions.size - 4, "px;\n                height: ").concat(TemperaturePickerOptions.size - 4, "px;\n                flex-shrink: 0;\n                cursor: pointer;\n                border-radius: 4px;\n                margin-left: 2px;\n                margin-right: 2px;\n                background-color: lightgray;\n            }\n            .step.selected {\n                background-color: transparent;\n                font-weight: bold;\n                align-items: flex-end;\n                line-height: 2;\n            }\n        }\n        svg {\n            pointer-events: none;\n            position: absolute;\n            height: ").concat(TemperaturePickerOptions.size - 2, "px;\n            width: ").concat(TemperaturePickerOptions.size, "px;\n            top: 0;\n            left: calc(50% - ").concat(TemperaturePickerOptions.size / 2, "px);\n            path {\n                fill:none;\n                stroke:goldenrod;\n                stroke-width:4;\n            }\n        }\n    ");
        _this.html = '\n        <div class="container">\n            <div id="temperature-picker-steps" class="steps"></div>\n            <svg viewBox="0 0 52 52">\n                <path d="M24,4 A2,2,0,0,1,26,4 L47,19 A2,2,0,0,1,48,21 L48,48 A2,2,0,0,1,46,50 L6,50 A2,2,0,0,1,4,48 L4,21 A2,2,0,0,1,5,19 Z" />\n            </svg>\n        </div>\n    ';
        return _this;
      }
      TemperaturePicker2.prototype.onInit = function() {
        this.createStepElements();
        this.snapToValue();
        new mouse_scroll_lib_default(this.querySelector("#temperature-picker-steps"));
      };
      TemperaturePicker2.prototype.attributeChangedCallback = function(name, _, newValue) {
        if (name === "steps") {
          this.steps = JSON.parse(newValue);
        }
        if (name === "value") {
          this.value = JSON.parse(newValue);
        }
      };
      TemperaturePicker2.prototype.createStepElements = function() {
        if (!this.steps) {
          return;
        }
        var stepsElement = this.querySelector("#temperature-picker-steps");
        if (!stepsElement) {
          return;
        }
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
          var step = _a[_i];
          var stepElement = document.createElement("div");
          stepElement.classList.add("step");
          if (this.value === step) {
            stepElement.classList.add("selected");
          }
          stepElement.setAttribute("value", step.toString());
          stepElement.innerText = step.toLocaleString() + "\xB0";
          stepElement.onclick = this.setValue.bind(this, step);
          stepsElement.append(stepElement);
        }
        this.snaps = this.steps.map(function(_, index) {
          return index * TemperaturePickerOptions.size;
        });
        this.createScrollSnaps();
      };
      TemperaturePicker2.prototype.snapToValue = function() {
        var _a;
        if (this.scrollSnap && this.steps && this.value) {
          var index = (_a = this.steps.indexOf(this.value)) !== null && _a !== void 0 ? _a : 0;
          this.scrollSnap.snap(index * TemperaturePickerOptions.size);
        }
      };
      TemperaturePicker2.prototype.onSnap = function(position) {
        this.setValue(this.steps[this.snaps.indexOf(position)]);
      };
      TemperaturePicker2.prototype.setValue = function(value) {
        if (this.value !== value) {
          this.querySelector('[value="'.concat(this.value.toString(), '"]')).classList.remove("selected");
          this.querySelector('[value="'.concat(value.toString(), '"]')).classList.add("selected");
          this.setAttribute("value", value.toString());
          this.dispatchEvent(new Event("value-change"));
          this.snapToValue();
        }
      };
      TemperaturePicker2.prototype.createScrollSnaps = function() {
        if (this.scrollSnap) {
          this.scrollSnap.clear();
        }
        this.scrollSnap = new scroll_snap_lib_default(this.querySelector("#temperature-picker-steps"), { snaps: this.snaps, onSnap: this.onSnap.bind(this) });
      };
      TemperaturePicker2.observedAttributes = ["steps", "value"];
      return TemperaturePicker2;
    }(component_default)
  );
  var temperature_picker_default = TemperaturePicker;

  // dist/index.js
  temperature_picker_default.register("temperature-picker", temperature_picker_default);
})();
