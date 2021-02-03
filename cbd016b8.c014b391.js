(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(169)),c={title:"<SpacesGhostText />"},i={unversionedId:"components/spaces/ghost-text",id:"components/spaces/ghost-text",isDocsHomePage:!1,title:"<SpacesGhostText />",description:"Display the ghost text for a given space. Renders null if the ghost text should not display.",source:"@site/docs/components/spaces/ghost-text.md",slug:"/components/spaces/ghost-text",permalink:"/availity-react/components/spaces/ghost-text",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/spaces/ghost-text.md",version:"current",sidebar:"someSidebar",previous:{title:"<SpacesAgreement />",permalink:"/availity-react/components/spaces/agreement"},next:{title:"Getting Started",permalink:"/availity-react/components/step-wizard/index"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Display the ghost text for a given space. Renders ",Object(a.b)("inlineCode",{parentName:"p"},"null")," if the ghost text should not display."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Spaces, { SpacesGhostText } from '@availity/spaces';\n\nconst Example = () => (\n  <Spaces\n    spaceIds={['73162546201441126239486200007187']}\n    clientId=\"my-client-id\"\n  >\n    <SpacesGhostText />\n  </Spaces>\n);\n")),Object(a.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(a.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-spaces--ghost-text"}," Storybook")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("h4",{id:"spaceid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"spaceId?: string")),Object(a.b)("p",null,"The id of the space to render the ghost text for. If no ",Object(a.b)("inlineCode",{parentName:"p"},"spaceId")," is provided, the first space in the ",Object(a.b)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space. |"))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);