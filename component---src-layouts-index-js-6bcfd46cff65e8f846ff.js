webpackJsonp([0x67ef26645b2a,60335399758886],{120:function(t,e){t.exports={layoutContext:{}}},211:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=n(2),i=a(r),l=n(214),u=a(l),s=n(120),c=a(s);e.default=function(t){return i.default.createElement(u.default,o({},t,c.default))},t.exports=e.default},217:function(t,e,n){t.exports={default:n(227),__esModule:!0}},219:function(t,e,n){t.exports={default:n(229),__esModule:!0}},223:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(217),r=a(o);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},224:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}},227:function(t,e,n){n(252),t.exports=n(19).Object.assign},229:function(t,e,n){n(254),t.exports=n(19).Object.keys},242:function(t,e,n){"use strict";var a=n(44),o=n(94),r=n(57),i=n(99),l=n(149),u=Object.assign;t.exports=!u||n(29)(function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=a})?function(t,e){for(var n=i(t),u=arguments.length,s=1,c=o.f,f=r.f;u>s;)for(var d,p=l(arguments[s++]),v=c?a(p).concat(c(p)):a(p),h=v.length,m=0;h>m;)f.call(p,d=v[m++])&&(n[d]=p[d]);return n}:u},246:function(t,e,n){var a=n(28),o=n(19),r=n(29);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*r(function(){n(1)}),"Object",i)}},252:function(t,e,n){var a=n(28);a(a.S+a.F,"Object",{assign:n(242)})},254:function(t,e,n){var a=n(99),o=n(44);n(246)("keys",function(){return function(t){return o(a(t))}})},314:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return r(j+t)}function r(t){return t.replace(/^\/\//g,"/")}function i(t,e){var n=(0,O.createLocation)(t,null,null,e.location);return n.pathname=o(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var l=n(223),u=a(l),s=n(219),c=a(s),f=n(224),d=a(f),p=n(56),v=a(p),h=n(87),m=a(h),y=n(86),g=a(y);e.withPrefix=o;var _=n(2),b=a(_),k=n(72),x=n(8),w=a(x),O=n(119),j="/",E={activeClassName:w.default.string,activeStyle:w.default.object,exact:w.default.bool,strict:w.default.bool,isActive:w.default.func,location:w.default.object},M=function(t,e){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){t===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},R=function(t){function e(n,a){(0,v.default)(this,e);var o=(0,m.default)(this,t.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var l=a.router.history,u=i(n.to,l);return o.state={path:(0,O.createPath)(u),to:u,IOSupported:r},o.handleRef=o.handleRef.bind(o),o}return(0,g.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=i(t.to,history);this.setState({path:(0,O.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.path)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&M(t,function(){___loader.enqueue(e.state.path)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,a=(0,d.default)(e,["onClick"]),o=void 0;return o=(0,c.default)(E).some(function(e){return t.props[e]})?k.NavLink:k.Link,b.default.createElement(o,(0,u.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var a=t.state.path;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(o);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},e}(b.default.Component);R.propTypes=(0,u.default)({},E,{innerRef:w.default.func,onClick:w.default.func,to:w.default.oneOfType([w.default.string,w.default.object]).isRequired}),R.contextTypes={router:w.default.object},e.default=R;e.navigateTo=function(t){window.___navigateTo(t)}},214:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),r=a(o),i=n(314),l=a(i),u=n(113),s=a(u),c=function(t){return r.default.createElement("div",{className:s.default["nav-link"]},r.default.createElement(l.default,{to:t.to,activeClassName:s.default["link-active"]},t.children))};e.default=function(t){var e=t.children;return r.default.createElement("div",{className:s.default["two-column"]},r.default.createElement("div",{className:s.default.nav},r.default.createElement(l.default,{className:s.default["link-secondary"],to:"/"},r.default.createElement("h1",null,"OTKit Style Guide")),r.default.createElement(c,{to:"/otkit-colors/"},"Colors"),r.default.createElement(c,{to:"/otkit-typography"},"Typography"),r.default.createElement(c,{to:"/otkit-spacing/"},"Spacing"),r.default.createElement(c,{to:"/otkit-borders/"},"Borders"),r.default.createElement(c,{to:"/otkit-breakpoints/"},"Breakpoints"),r.default.createElement(c,{to:"/otkit-shadows/"},"Shadows"),r.default.createElement("div",{className:s.default["nav-link"]},r.default.createElement("a",{href:"https://github.com/opentable/design-tokens",target:"_blank"},"Github repo / design-tokens"))),r.default.createElement("div",{className:s.default.main},e()))},t.exports=e.default},113:function(t,e){t.exports={"heading-xlarge-font-size":"48px","spacing-medium":"16px","spacing-large":"32px","spacing-xlarge":"64px","color-primary":"rgb(218, 55, 67)","color-gray-primary":"rgb(51, 51, 51)","width-two-column":"992px","width-nav":"320px","width-main":"640px","two-column":"src-styles----index-module---two-column---1h8gm",nav:"src-styles----index-module---nav---19JTv","nav-link":"src-styles----index-module---nav-link---1neRi","link-active":"src-styles----index-module---link-active---2as_d",main:"src-styles----index-module---main---2l2QX","link-secondary":"src-styles----index-module---link-secondary---ffkBd"}}});
//# sourceMappingURL=component---src-layouts-index-js-6bcfd46cff65e8f846ff.js.map