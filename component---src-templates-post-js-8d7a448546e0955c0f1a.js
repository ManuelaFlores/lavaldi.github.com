(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4M6O":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){var r=this,o=arguments,i=function(){a=null,n||e.apply(r,o)},s=n&&!a;window.clearTimeout(a),a=setTimeout(i,t),s&&e.apply(r,o)}},t.isReactElement=i,t.shallowComparison=function e(t,n){var a,o=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(a=[]).concat.apply(a,(0,r.default)(o)).filter((function(a){if("object"==typeof t[a]){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!i(t[a]))return!0})).length};var r=a(n("RIqP")),o=a(n("q1tI"));function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I})),n.d(t,"pageQuery",(function(){return q}));var a=n("zLVn"),r=n("q1tI"),o=n.n(r),i=n("qhky"),s=n("9eSz"),l=n.n(s),c=n("T/ZZ"),u=n.n(c),d=n("7oih"),m=n("Wbzz"),f=n("kuv2"),p=n.n(f),h=n("L6NH");function g(e){var t=e.post,n=(Object(a.a)(e,["post"]),t.frontmatter.tags);return o.a.createElement("aside",null,o.a.createElement("div",{className:"aside-content"},o.a.createElement("section",null,o.a.createElement("img",{src:p.a,alt:"Claudia Valdivieso",className:"avatar"}),o.a.createElement("p",null,"I'm Claudia, christian, wife, mother and a software engineer, and sometimes I write about christianity and programming.")),o.a.createElement("section",null,o.a.createElement("h3",null,"Tags"),o.a.createElement("div",{className:"cell tags"},n&&n.map((function(e){return o.a.createElement(m.Link,{key:e,to:"/tags/"+Object(h.b)(e),className:"tag-"+e},e)})))),o.a.createElement("section",null,o.a.createElement("h3",null,"Published"),o.a.createElement("time",null,t.frontmatter.date)),o.a.createElement("section",null,o.a.createElement("h3",null,"Stay in touch"),o.a.createElement("nav",null,o.a.createElement("a",{href:"https://twitter.com/lavaldi_",target:"_blank",rel:"noreferrer",className:"link"},o.a.createElement("span",{className:"emoji"},"🐦")," Twitter: @lavaldi_"),o.a.createElement("a",{href:"https://github.com/lavaldi",target:"_blank",rel:"noreferrer",className:"link"},o.a.createElement("span",{className:"emoji"},"🐙")," GitHub: @lavaldi"),o.a.createElement(m.Link,{to:"/rss.xml",target:"_blank",rel:"noreferrer",className:"link"},o.a.createElement("span",{className:"emoji"},"☢️")," RSS feed")))))}function v(e){var t=e.previous,n=e.next;return o.a.createElement("nav",{className:"flex container suggested"},t&&o.a.createElement(m.Link,{to:t.fields.slug,rel:"prev"},o.a.createElement("span",null,"Previous"),t.frontmatter.title),n&&o.a.createElement(m.Link,{to:n.fields.slug,rel:"next"},o.a.createElement("span",null,"Next"),n.frontmatter.title))}var b=n("EYWl"),w=n("dI71"),E=n("ORnI"),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={toasts:[]},t.onSnackbarDismiss=function(){var e=t.state.toasts.slice(1);t.setState({toasts:e})},t.notifyAboutComment=function(){var e=t.state.toasts.slice();e.push({text:"New comment available!"}),t.setState({toasts:e})},t}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props.postNode.frontmatter,t={url:u()("https://lavaldi.com",e.slug),identifier:e.id,title:e.title};return o.a.createElement(E.Disqus,{config:t})},t}(r.Component),S=n("Aeqt");function I(e){var t=e.data,n=e.pageContext,s=Object(a.a)(e,["data","pageContext"]),c=t.markdownRemark,m=n.previous,f=n.next,p=c.frontmatter,h=p.thumbnail,w=p.slug,E=u()("https://lavaldi.com",w),I="https://mobile.twitter.com/search?q="+encodeURIComponent(E);return Object(r.useEffect)((function(){"undefined"!=typeof window&&localStorage.getItem("theme")}),[]),o.a.createElement(d.a,null,o.a.createElement(i.a,{title:c.frontmatter.title+" | "+S.a.siteTitle}),o.a.createElement(b.a,{postPath:c.fields.slug,postNode:c,postSEO:!0}),o.a.createElement("div",{className:"container"},o.a.createElement("section",{className:"grid post"},o.a.createElement("article",null,o.a.createElement("header",{className:"article-header"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"thumb"},h&&o.a.createElement(l.a,{fixed:h.childImageSharp.fixed,className:"post-thumbnail"}),o.a.createElement("h1",null,c.frontmatter.title)),c.frontmatter.description&&o.a.createElement("p",{className:"description"},c.frontmatter.description))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.html}}),o.a.createElement("div",{id:"comments"},o.a.createElement("h2",null,"Comment or let's ",o.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer"},"discuss on Twitter")),o.a.createElement(y,{postNode:c}))),o.a.createElement(g,Object.assign({post:c},s))),o.a.createElement(v,{previous:m,next:f})))}var q="3225832417"},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},ORnI:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("VUT9"));t.Disqus=r.default;var o=a(n("qASQ"));t.CommentCount=o.default;var i=a(n("vAJ3"));t.CommentEmbed=i.default;var s=r.default;t.default=s},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},"T/ZZ":function(e,t,n){var a,r,o;o=function(){function e(e,t){return e=(e=(e=function(e,t){return e.substr(0,t.length)===t}(e,"file://")?e.replace(/(\/{0,3})\/*/g,"$1"):(e=e.replace(/:\//g,"://")).replace(/([^:\s\%\3\A])\/+/g,"$1/")).replace(/\/(\?|&|#[^!])/g,"$1")).replace(/(\?.+)\?/g,"$1&")}return function(){var t=arguments;"object"==typeof arguments[0]&&(t=arguments[0]);var n=[].slice.call(t,0).join("/");return e(n)}},e.exports?e.exports=o():void 0===(r="function"==typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r)},VUT9:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("pVnL")),o=a(n("8OQS")),i=a(n("VbXa")),s=a(n("q1tI")),l=a(n("17x9")),c=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="lavaldi",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},kuv2:function(e,t,n){e.exports=n.p+"static/lavaldi-8926e428d8d1d0bbb0ca41096e3ec873.jpg"},qASQ:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("pVnL")),o=a(n("8OQS")),i=a(n("VbXa")),s=a(n("q1tI")),l=a(n("17x9")),c=n("4M6O"),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="lavaldi",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,a=(0,o.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},vAJ3:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("VbXa")),o=a(n("q1tI")),i=a(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(o.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:i.default.string.isRequired,width:i.default.number,height:i.default.number,showMedia:i.default.bool,showParentComment:i.default.bool}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-templates-post-js-8d7a448546e0955c0f1a.js.map