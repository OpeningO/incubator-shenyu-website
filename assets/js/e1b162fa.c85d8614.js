"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41036:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"2.2.0",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},u="2.2.0",s={unversionedId:"2.2.0-release",id:"2.2.0-release",isDocsHomePage:!1,title:"2.2.0",description:"release-notes",source:"@site/event/2.2.0-release.md",sourceDirName:".",slug:"/2.2.0-release",permalink:"/event/2.2.0-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/event/2.2.0-release.md",version:"current",lastUpdatedBy:"xiaoyu",lastUpdatedAt:1632736445,formattedLastUpdatedAt:"9/27/2021",sidebarPosition:3,frontMatter:{title:"2.2.0",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},sidebar:"community",previous:{title:"2.3.0",permalink:"/event/2.3.0-release"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"220"},"2.2.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complete plug-in architecture design, plug-in hot-swappable."),(0,o.kt)("li",{parentName:"ul"},"Fully supports all versions of dubbo, alibaba-dubbo, apache-dubbo."),(0,o.kt)("li",{parentName:"ul"},"Support dubbo generalization call, multi-parameter, complex parameter interface."),(0,o.kt)("li",{parentName:"ul"},"Enhance the monitoring plug-in, remove influxdb support, increase memory, CPU, QPS, TPS, response delay and other indicators, and support access to Prometheus."),(0,o.kt)("li",{parentName:"ul"},"The springCloud plug-in supports two registration centers, eureka and nacos."),(0,o.kt)("li",{parentName:"ul"},"Waf plug-in enhancements, black and white albums, and mixed modes."),(0,o.kt)("li",{parentName:"ul"},"Removed the Hystrix fuse function, independent as a plug-in support."),(0,o.kt)("li",{parentName:"ul"},"Modify the data synchronization method bug in Zookeeper, and add the nacos synchronization method."),(0,o.kt)("li",{parentName:"ul"},"Diversified customer support, providing traditional and springboot access to spring."),(0,o.kt)("li",{parentName:"ul"},"Optimize the soul-background control interface."),(0,o.kt)("li",{parentName:"ul"},"Load balancing algorithm bug repair."),(0,o.kt)("li",{parentName:"ul"},"Fix bugs when uploading large files.")))}d.isMDXComponent=!0}}]);