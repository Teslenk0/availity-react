(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(169)),i={title:"<Input />"},c={unversionedId:"form/components/input",id:"form/components/input",isDocsHomePage:!1,title:"<Input />",description:"Basic Input field that utilizes the Form validation",source:"@site/docs/form/components/input.md",slug:"/form/components/input",permalink:"/availity-react/form/components/input",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/components/input.md",version:"current",sidebar:"someSidebar",previous:{title:"<Form />",permalink:"/availity-react/form/components/form"},next:{title:"<RadioGroup />",permalink:"/availity-react/form/components/radio-group"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Basic Input field that utilizes the Form validation"),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { Form, Input } from \'@availity/form\';\nimport { Button } from \'reacstrap\';\nimport * as yup from \'yup\';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      hello: \'\',\n    }}\n    onSubmit={(values) => alert(JSON.stringify(values))}\n    validationSchema={yup.object({\n      hello: yup.string().required(),\n    })}\n    className="d-flex"\n  >\n    <Input name="hello" placeholder="Say Hello..." />\n    <Button type="submit" className="ml-1" color="primary">\n      Submit\n    </Button>\n  </Form>\n);\n')),Object(a.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(a.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/formik-form--input"}," Storybook")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("h4",{id:"name-string"},Object(a.b)("inlineCode",{parentName:"h4"},"name: string")),Object(a.b)("p",null,"Identifies the field and matches the validation"),Object(a.b)("h4",{id:"tag-reactcomponenttype--string"},Object(a.b)("inlineCode",{parentName:"h4"},"tag?: React.ComponentType | string")),Object(a.b)("p",null,"The Node or tag to substitute as the input field. Default is reactstrap ",Object(a.b)("inlineCode",{parentName:"p"},"Input")," tag."))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,b=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);