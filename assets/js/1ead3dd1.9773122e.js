"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9901],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Custom Filter",keywords:["Custom Filter"],description:"custom filter"},s=void 0,c={unversionedId:"developer/custom-filter",id:"developer/custom-filter",isDocsHomePage:!1,title:"Custom Filter",description:"custom filter",source:"@site/docs/developer/custom-filter.md",sourceDirName:"developer",slug:"/developer/custom-filter",permalink:"/docs/next/developer/custom-filter",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/developer/custom-filter.md",version:"current",frontMatter:{title:"Custom Filter",keywords:["Custom Filter"],description:"custom filter"},sidebar:"tutorialSidebar",previous:{title:"Custom Rate Limiter",permalink:"/docs/next/developer/spi/custom-rate-limiter"},next:{title:"Fetching Correct IP Address And Host",permalink:"/docs/next/developer/custom-parsing-ip-and-host"}},p=[{value:"Description",id:"description",children:[]},{value:"CORS Support",id:"cors-support",children:[]},{value:"Filtering Spring Boot health check",id:"filtering-spring-boot-health-check",children:[]},{value:"Extending <code>org.apache.shenyu.web.filter.AbstractWebFilter</code>",id:"extending-orgapacheshenyuwebfilterabstractwebfilter",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This doc shows a demo for how to extend ",(0,a.kt)("inlineCode",{parentName:"li"},"org.springframework.web.server.WebFliter"),".")),(0,a.kt)("h2",{id:"cors-support"},"CORS Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.filter.CrossFilter")," is designed for ",(0,a.kt)("inlineCode",{parentName:"p"},"WebFilter")," implementation."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CrossFilter implements WebFilter {\n\n    private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,token,username,client";\n\n    private static final String ALLOWED_METHODS = "*";\n\n    private static final String ALLOWED_ORIGIN = "*";\n\n    private static final String ALLOWED_EXPOSE = "*";\n\n    private static final String MAX_AGE = "18000";\n\n    @Override\n    @SuppressWarnings("all")\n    public Mono<Void> filter(final ServerWebExchange exchange, final WebFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        if (CorsUtils.isCorsRequest(request)) {\n            ServerHttpResponse response = exchange.getResponse();\n            HttpHeaders headers = response.getHeaders();\n            headers.add("Access-Control-Allow-Origin", ALLOWED_ORIGIN);\n            headers.add("Access-Control-Allow-Methods", ALLOWED_METHODS);\n            headers.add("Access-Control-Max-Age", MAX_AGE);\n            headers.add("Access-Control-Allow-Headers", ALLOWED_HEADERS);\n            headers.add("Access-Control-Expose-Headers", ALLOWED_EXPOSE);\n            headers.add("Access-Control-Allow-Credentials", "true");\n            if (request.getMethod() == HttpMethod.OPTIONS) {\n                response.setStatusCode(HttpStatus.OK);\n                return Mono.empty();\n            }\n        }\n        return chain.filter(exchange);\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registering ",(0,a.kt)("inlineCode",{parentName:"p"},"CrossFilter")," as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Bean"),"."))),(0,a.kt)("h2",{id:"filtering-spring-boot-health-check"},"Filtering Spring Boot health check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can control the order by applying ",(0,a.kt)("inlineCode",{parentName:"li"},"@Order")," to the implementation class .")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Order(-99)\npublic final class HealthFilter implements WebFilter {\n\n    private static final String[] FILTER_TAG = {"/actuator/health", "/health_check"};\n\n    @Override\n    public Mono<Void> filter(@Nullable final ServerWebExchange exchange, @Nullable final WebFilterChain chain) {\n        ServerHttpRequest request = Objects.requireNonNull(exchange).getRequest();\n        String urlPath = request.getURI().getPath();\n        for (String check : FILTER_TAG) {\n            if (check.equals(urlPath)) {\n                String result = JsonUtils.toJson(new Health.Builder().up().build());\n                DataBuffer dataBuffer = exchange.getResponse().bufferFactory().wrap(result.getBytes());\n                return exchange.getResponse().writeWith(Mono.just(dataBuffer));\n            }\n        }\n        return Objects.requireNonNull(chain).filter(exchange);\n    }\n}\n\n')),(0,a.kt)("h2",{id:"extending-orgapacheshenyuwebfilterabstractwebfilter"},"Extending ",(0,a.kt)("inlineCode",{parentName:"h2"},"org.apache.shenyu.web.filter.AbstractWebFilter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new class and inherit from ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.web.filter.AbstractWebFilter"),"."),(0,a.kt)("li",{parentName:"ul"},"Implement abstract methods of parent class.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"   /**\n     * this is Template Method ,children Implement your own filtering logic.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Boolean>} result\uff1aTRUE (is pass)\uff0cand flow next filter\uff1bFALSE (is not pass) execute doDenyResponse(ServerWebExchange exchange)\n     */\n    protected abstract Mono<Boolean> doFilter(ServerWebExchange exchange, WebFilterChain chain);\n\n    /**\n     * this is Template Method ,children Implement your own And response client.\n     *\n     * @param exchange the current server exchange.\n     * @return {@code Mono<Void>} response msg.\n     */\n    protected abstract Mono<Void> doDenyResponse(ServerWebExchange exchange);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if method ",(0,a.kt)("inlineCode",{parentName:"li"},"doFilter")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"Mono<true>"),", this filter is passing, While rejecting, it will call method ",(0,a.kt)("inlineCode",{parentName:"li"},"doDenyResponse")," and sending infos in response body to frontend.")))}d.isMDXComponent=!0}}]);