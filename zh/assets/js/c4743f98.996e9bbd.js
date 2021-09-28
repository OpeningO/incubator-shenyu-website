"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3524],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95588:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={sidebar_position:6,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},c=void 0,u={unversionedId:"deployment/deployment-custom",id:"deployment/deployment-custom",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-custom.md",sourceDirName:"deployment",slug:"/deployment/deployment-custom",permalink:"/zh/docs/next/deployment/deployment-custom",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-custom.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u81ea\u5b9a\u4e49\u90e8\u7f72",description:"\u81ea\u5b9a\u4e49\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"Helm\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-helm"},next:{title:"Dubbo\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/next/quick-start/quick-start-dubbo"}},l=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09",id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350",children:[]}],s={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u642d\u5efa\u5c5e\u4e8e\u4f60\u81ea\u5df1\u7684\u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker \u7528\u6237\u53c2\u8003 docker\u90e8\u7f72 Apache ShenYu Admin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"liunx/windows \u7528\u6237\u53c2\u8003\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 Apache ShenYu Admin"))),(0,a.kt)("h3",{id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350"},"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9996\u5148\u65b0\u5efa\u4e00\u4e2a\u7a7a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"springboot")," \u9879\u76ee\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\uff0c \u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"spring \u5b98\u7f51")," \u521b\u5efa\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f15\u5165\u5982\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.version}")," \u8bf7\u4f7f\u7528\u5f53\u524d\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u6587\u4ef6\u4e2d\u52a0\u4e0a\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\nmanagement:\n  health:\n    defaults:\n      enabled: false\nshenyu:\n  sync:\n    websocket:\n      urls: ws://localhost:9095/websocket  //\u8bbe\u7f6e\u6210\u4f60\u7684 shenyu-admin \u5730\u5740\n")))}d.isMDXComponent=!0}}]);