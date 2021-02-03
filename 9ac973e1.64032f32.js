(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(169)),a={title:"<Checkbox />"},i={unversionedId:"form/components/checkbox",id:"form/components/checkbox",isDocsHomePage:!1,title:"<Checkbox />",description:"Inputs of type checkbox. Checkboxes should be wrapped in a CheckboxGroup.",source:"@site/docs/form/components/checkbox.md",slug:"/form/components/checkbox",permalink:"/availity-react/form/components/checkbox",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/components/checkbox.md",version:"current",sidebar:"someSidebar",previous:{title:"<CheckboxGroup />",permalink:"/availity-react/form/components/checkbox-group"},next:{title:"<Feedback />",permalink:"/availity-react/form/components/feedback"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inputs of type checkbox. Checkboxes should be wrapped in a CheckboxGroup."),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { Form, Checkbox, CheckboxGroup } from \'@availity/form\';\nimport { Button } from \'reactstrap\';\nimport * as yup from \'yup\';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      hello: [],\n    }}\n    onSubmit={() => {}}\n    validationSchema={yup.object().shape({\n      hello: yup.array().required(\'At least one checkbox is required\'),\n    })}\n  >\n    <CheckboxGroup name="hello" label="Checkbox Group">\n      <Checkbox label="Check One" value="uno" />\n      <Checkbox label="Check Two" value="dos" />\n      <Checkbox label="Check Three" value="tres" />\n    </CheckboxGroup>\n    <Button type="submit" color="primary">\n      Submit\n    </Button>\n  </Form>\n);\n')),Object(c.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(c.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/formik-form--checkbox"}," Storybook")),Object(c.b)("h3",{id:"props"},"Props"),Object(c.b)("h4",{id:"id-string"},Object(c.b)("inlineCode",{parentName:"h4"},"id?: string")),Object(c.b)("p",null,"Should match ",Object(c.b)("inlineCode",{parentName:"p"},"<CheckboxGroup />")," name for validation."),Object(c.b)("h4",{id:"label-reactnode"},Object(c.b)("inlineCode",{parentName:"h4"},"label?: ReactNode")),Object(c.b)("p",null,"Label for the checkbox."),Object(c.b)("h4",{id:"value-string"},Object(c.b)("inlineCode",{parentName:"h4"},"value?: string")),Object(c.b)("p",null,"Value of the checkbox."),Object(c.b)("h4",{id:"disabled-boolean"},Object(c.b)("inlineCode",{parentName:"h4"},"disabled?: boolean")),Object(c.b)("p",null,"Disables the checkbox."),Object(c.b)("h4",{id:"inline-boolean"},Object(c.b)("inlineCode",{parentName:"h4"},"inline?: boolean")),Object(c.b)("p",null,"Will render the checkbox inline with other checkboxes. ",Object(c.b)("strong",{parentName:"p"},"Default:")," true."))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(a,".").concat(m)]||u[m]||s[m]||c;return n?o.a.createElement(h,i(i({ref:t},b),{},{components:n})):o.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var b=2;b<c;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);