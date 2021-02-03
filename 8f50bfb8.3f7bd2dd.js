(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(169)),c={title:"<SpacesDisclaimer />"},o={unversionedId:"components/spaces/disclaimer",id:"components/spaces/disclaimer",isDocsHomePage:!1,title:"<SpacesDisclaimer />",description:"Display the disclaimer for a given space id.",source:"@site/docs/components/spaces/disclaimer.md",slug:"/components/spaces/disclaimer",permalink:"/availity-react/components/spaces/disclaimer",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/spaces/disclaimer.md",version:"current",sidebar:"someSidebar",previous:{title:"<SpacesImage />",permalink:"/availity-react/components/spaces/images"},next:{title:"<SpacesAgreement />",permalink:"/availity-react/components/spaces/agreement"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Display the disclaimer for a given space id."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Spaces, { SpacesDisclaimer } from '@availity/spaces';\n\nconst Example = () => (\n  <Spaces\n    spaceIds={['73162546201441126239486200007187']}\n    clientId=\"my-client-id\"\n  >\n    <SpacesDisclaimer markdown styled />\n  </Spaces>\n);\n")),Object(i.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(i.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-spaces--disclaimer"}," Storybook")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"spaceid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"spaceId?: string")),Object(i.b)("p",null,"The id of the space to render the disclaimer for. If no ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," is provided, the first space in the ",Object(i.b)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space."),Object(i.b)("h4",{id:"markdown-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"markdown?: boolean")),Object(i.b)("p",null,"Render the disclaimer as markdown."),Object(i.b)("h4",{id:"styled-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"styled?: boolean")),Object(i.b)("p",null,"When true, a vertical bar is displayed to the left of the disclaimer"))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.a.createElement(b,o(o({ref:t},p),{},{components:n})):a.a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);