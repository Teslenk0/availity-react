(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(169)),o={title:"<FilePickerBtn />"},l={unversionedId:"form/upload/file-picker-btn",id:"form/upload/file-picker-btn",isDocsHomePage:!1,title:"<FilePickerBtn />",description:"The raw file picker button that masks the file input with a button.",source:"@site/docs/form/upload/file-picker-btn.md",slug:"/form/upload/file-picker-btn",permalink:"/availity-react/form/upload/file-picker-btn",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/upload/file-picker-btn.md",version:"current",sidebar:"someSidebar",previous:{title:"<FilePicker />",permalink:"/availity-react/form/upload/file-picker"},next:{title:"<UploadProgressBar />",permalink:"/availity-react/form/upload/upload-progress-bar"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The raw file picker button that masks the file input with a button."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Form } from '@availity/form';\nimport { FilePickerBtn } from '@availity/form-upload';\n\nconst Example = () => {\n  const handleFileSelection = (event) => {\n    const { files } = event.target;\n    // do something with the files.\n  };\n\n  return (\n    <Form initialValues={{ myFile: undefined }}>\n      <FilePickerBtn name=\"myFile\" onChange={this.handleFileSelection} />\n    </Form>\n  );\n};\n")),Object(a.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(a.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-upload--picker-button"}," Storybook")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("h4",{id:"name-string"},Object(a.b)("inlineCode",{parentName:"h4"},"name: string")),Object(a.b)("p",null,"Identifies the field and matches the validation schema."),Object(a.b)("h4",{id:"onclick-event-event--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onClick?: (event: Event) => void")),Object(a.b)("p",null,"Callback when the button is clicked."),Object(a.b)("h4",{id:"onchange-event-event--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onChange?: (event: Event) => void")),Object(a.b)("p",null,"Callback when the user has selected a file or multiple files."),Object(a.b)("h4",{id:"multiple-boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"multiple?: boolean")),Object(a.b)("p",null,"Indicates that the user will be allowed to select multiple files when selecting files from the OS prompt."),Object(a.b)("h4",{id:"disabled-boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"disabled?: boolean")),Object(a.b)("p",null,"Disable the file input ",Object(a.b)("strong",{parentName:"p"},"Default:")," ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h4",{id:"allowedfiletypes-string"},Object(a.b)("inlineCode",{parentName:"h4"},"allowedFileTypes?: string[]")),Object(a.b)("p",null,"The file types you want to restrict uploading to. eg: ",Object(a.b)("inlineCode",{parentName:"p"},"['.jpeg', '.jpg']"),"."),Object(a.b)("h4",{id:"maxsize-number"},Object(a.b)("inlineCode",{parentName:"h4"},"maxSize?: number")),Object(a.b)("p",null,"The maximum file size (in bytes) for a file to be uploaded."))}b.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||a;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);