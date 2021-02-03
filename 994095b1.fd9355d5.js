(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(169)),l={title:"<Upload /> ( Default Export )"},r={unversionedId:"form/upload/upload",id:"form/upload/upload",isDocsHomePage:!1,title:"<Upload /> ( Default Export )",description:"The default export is an all-in-one solution which handles uploads, encrypted file password requests and file state management for you.",source:"@site/docs/form/upload/upload.md",slug:"/form/upload/upload",permalink:"/availity-react/form/upload/upload",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/upload/upload.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/availity-react/form/upload/index"},next:{title:"<FilePicker />",permalink:"/availity-react/form/upload/file-picker"}},c=[{value:"Basic Example",id:"basic-example",children:[]},{value:"Callback Function Example",id:"callback-function-example",children:[]},{value:"File Delivery Metadata Function Example",id:"file-delivery-metadata-function-example",children:[]},{value:"Props",id:"props",children:[]}],d={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The default export is an all-in-one solution which handles uploads, encrypted file password requests and file state management for you."),Object(o.b)("h3",{id:"basic-example"},"Basic Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { Form } from \'@availity/form\';\nimport Upload from \'@availity/form-upload\';\n\nconst Example = () => (\n  <Form initialValues={{ myFile: undefined }}>\n    <Upload\n      name="myFile"\n      btnText="Upload a claim"\n      clientId="a"\n      bucketId="b"\n      customerId="c"\n      multiple={false}\n      max={1}\n    />\n  </Form>\n);\n')),Object(o.b)("h3",{id:"callback-function-example"},"Callback Function Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { Form } from \'@availity/form\';\nimport Upload from \'@availity/form-upload\';\n\nconst Example = () => {\n  const onUpload = (upload) => {\n    if (upload) {\n      upload.onSuccess.push(async () => {\n        // success action\n      });\n      upload.onError.push(() => {\n        // error action\n      });\n    }\n  };\n\n  const onRemove = (file) => {\n    // remove action\n  };\n\n  return (\n    <Form initialValues={{ myFile: undefined }}>\n      <Upload\n        name="myFile"\n        btnText="Upload a claim"\n        clientId="a"\n        bucketId="b"\n        customerId="c"\n        onFileUpload={onUpload} // <-- add file callback function\n        onFileRemove={onRemove} // <-- remove file callback function\n        max={1}\n      />\n    </Form>\n  );\n};\n')),Object(o.b)("h3",{id:"file-delivery-metadata-function-example"},"File Delivery Metadata Function Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { Form } from \'@availity/form\';\nimport Upload from \'@availity/form-upload\';\n\nconst Example = () => (\n  <Form initialValues={{ myFile: undefined }}>\n    <Upload\n      name="myFile"\n      btnText="Upload a claim"\n      clientId="a"\n      bucketId="b"\n      customerId="c"\n      max={1}\n      deliverFileOnSubmit={false} // can be true or false\n      deliveryChannel="test"\n      fileDeliveryMetadata={(upload) => {\n        // execute any logic needed\n        // return metadata object with your needed properties\n        return {\n          payerId: \'testPayer\',\n          dynamicNameBasedOnUpload: upload.id,\n          filetype: upload.file.type,\n        };\n      }}\n    />\n  </Form>\n);\n')),Object(o.b)("h4",{id:"live-example--storybook"},"Live example: ",Object(o.b)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-upload--default"}," Storybook")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("h4",{id:"name-string"},Object(o.b)("inlineCode",{parentName:"h4"},"name: string")),Object(o.b)("p",null,"Identifies the field and matches the validation schema."),Object(o.b)("h4",{id:"btntext-reactnode"},Object(o.b)("inlineCode",{parentName:"h4"},"btnText?: ReactNode")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"+ Add File")," for initial file or ",Object(o.b)("inlineCode",{parentName:"p"},"+ Add Another File Attachment")," if an attachment already have been selected. | The text that appears on the button."),Object(o.b)("h4",{id:"bucketid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"bucketId: string")),Object(o.b)("p",null,"The ID of the bucket you want to upload to."),Object(o.b)("h4",{id:"customerid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"customerId: string")),Object(o.b)("p",null,"The customer ID for the organization the user is uploading on behalf of."),Object(o.b)("h4",{id:"clientid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientId: string")),Object(o.b)("p",null,"The ID obtained from APIConnect. Must be subscribed to the resumeable uploads API."),Object(o.b)("h4",{id:"allowedfilenamecharacters-string"},Object(o.b)("inlineCode",{parentName:"h4"},"allowedFileNameCharacters?: string")),Object(o.b)("p",null,"Restrict the file name characters to a regex set."),Object(o.b)("h4",{id:"allowedfiletypes-string"},Object(o.b)("inlineCode",{parentName:"h4"},"allowedFileTypes?: string[]")),Object(o.b)("p",null,"Restrict the file types allowed to be uploaded to. eg: ",Object(o.b)("inlineCode",{parentName:"p"},"['.jpeg', '.jpg']"),"."),Object(o.b)("h4",{id:"onfileupload-upload-uploadcore--void"},Object(o.b)("inlineCode",{parentName:"h4"},"onFileUpload?: (upload: UploadCore) => void")),Object(o.b)("p",null,"Callback to be executed when file is uploaded. The callback is provided the ",Object(o.b)("inlineCode",{parentName:"p"},"Upload")," instance from upload-core SDK. Use this callback to hook into the ",Object(o.b)("inlineCode",{parentName:"p"},"upload.onSuccess")," and ",Object(o.b)("inlineCode",{parentName:"p"},"upload.onError")," events and track which files have been uploaded and get references returned by the API if needed. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"###Callback-Function-Example"}),"example callback function above")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"onFileUpload")," callback takes precedence over the combination of ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryMetadata"),", ",Object(o.b)("inlineCode",{parentName:"p"},"deliveryChannel"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"deliverFileSubmit"),". If all four properties are defined, only ",Object(o.b)("inlineCode",{parentName:"p"},"onFileUpload")," will be used.")),Object(o.b)("h4",{id:"onfileremove-files-file-fileid-string--void"},Object(o.b)("inlineCode",{parentName:"h4"},"onFileRemove?: (files: File[], fileId: String) => void")),Object(o.b)("p",null,"Callback called when file is removed. The callback is provided two arguments. 1. the updated files and 2. the id of the file that was removed"),Object(o.b)("h4",{id:"filedeliverymetadata-object--upload-uploadcore--object"},Object(o.b)("inlineCode",{parentName:"h4"},"fileDeliveryMetadata?: object | (upload: UploadCore) => object")),Object(o.b)("p",null,"The metadata properties that have been configured for the delivery channel you are trying to reach with ",Object(o.b)("inlineCode",{parentName:"p"},"avFilesDeliveryApi"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use this prop together with ",Object(o.b)("inlineCode",{parentName:"p"},"deliveryChannel")," and ",Object(o.b)("inlineCode",{parentName:"p"},"deliverFileOnSubmit")," to have uploads automatically sent to the file delivery API with the proper configuration, without the need to define a custom ",Object(o.b)("inlineCode",{parentName:"p"},"onFileUpload")," function."))),Object(o.b)("p",null,"If you have a use case where some of your metadata is dependent on information from the upload, you can define ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryMetadata")," as a function that accepts an upload variable. The upload will be passed to your function before the file delivery API call, and you can assign any dynamic props that you need to before returning the metadata object. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"###File-Delivery-Metadata-Function-Example"}),"example File Delivery Metadata Function Example above")),Object(o.b)("h4",{id:"deliverychannel-string"},Object(o.b)("inlineCode",{parentName:"h4"},"deliveryChannel?: string")),Object(o.b)("p",null,"The name of the delivery channel that is unique to where you will deliver files via the ",Object(o.b)("inlineCode",{parentName:"p"},"avFileDeliveryApi"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use this prop together with ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryMetadata")," and ",Object(o.b)("inlineCode",{parentName:"p"},"deliverFileOnSubmit")," to have uploads automatically sent to the file delivery API with the proper configuration, without the need to define a custom ",Object(o.b)("inlineCode",{parentName:"p"},"onFileUpload")," function."))),Object(o.b)("h4",{id:"deliverfileonsubmit-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"deliverFileOnSubmit?: boolean")),Object(o.b)("p",null,"This prop is used in tandem with ",Object(o.b)("inlineCode",{parentName:"p"},"deliveryChannel")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryMetadata")," so that your files will only get delivered to ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryApi")," when the form is being submitted. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use this prop together with ",Object(o.b)("inlineCode",{parentName:"p"},"fileDeliveryMetadata")," and ",Object(o.b)("inlineCode",{parentName:"p"},"deliveryChannel")," to have uploads automatically sent to the file delivery API with the proper configuration, without the need to define a custom ",Object(o.b)("inlineCode",{parentName:"p"},"onFileUpload")," function."))),Object(o.b)("h4",{id:"maxsize-number"},Object(o.b)("inlineCode",{parentName:"h4"},"maxSize?: number")),Object(o.b)("p",null,"The maximum file size (in bytes) for a file to be uploaded."),Object(o.b)("h4",{id:"max-number"},Object(o.b)("inlineCode",{parentName:"h4"},"max?: number")),Object(o.b)("p",null,"The maximum number of files allowed to be uploaded. ",Object(o.b)("inlineCode",{parentName:"p"},"0")," (or a falsey value) means unlimited. When the max number has been reached, the add button will disappear."),Object(o.b)("h4",{id:"multiple-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"multiple?: boolean")),Object(o.b)("p",null,"Indicates that the user will be allowed to select multiple files when selecting files from the OS prompt. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"disabled-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"disabled?: boolean")),Object(o.b)("p",null,"Disable the file input ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h4",{id:"showfiledrop-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"showFileDrop?: boolean")),Object(o.b)("p",null,"Set as true to show a drag and drop file upload option instead of a button (file explorer still available on click)."),Object(o.b)("h4",{id:"getdroprejectionmessage-errors-fileerror-file-file--string"},Object(o.b)("inlineCode",{parentName:"h4"},"getDropRejectionMessage?: (errors: FileError[], file: File) => String")),Object(o.b)("p",null,"Override the default error message for files rejected when ",Object(o.b)("inlineCode",{parentName:"p"},"showFileDrop")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."))}b.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=b(a),s=n,u=p["".concat(l,".").concat(s)]||p[s]||m[s]||o;return a?i.a.createElement(u,r(r({ref:t},d),{},{components:a})):i.a.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var d=2;d<o;d++)l[d]=a[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);