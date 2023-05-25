import{a9 as k,l as j,r as z,d3 as T,u as U,j as e,B as l}from"./index-cd3532b2.js";import{c as D,g as y,I as u,u as S}from"./index-98170c40.js";import{d as C}from"./index.modern-df609371.js";import{P as m,S as r}from"./login-layout-881c45e8.js";import{S as c}from"./index-68a5d5fc.js";import{F as t}from"./index-39d55669.js";const A=()=>{const d=k(),a=j.parse(d.search.substring(1)),[p,v]=z.useState(!1);let i=null;if(a!=null&&a.token)try{i=C(a.token)}catch{i=null}const{register:o,handleSubmit:f,formState:{errors:n},setError:N}=D({defaultValues:{first_name:"",last_name:"",password:"",repeat_password:""}}),{mutate:b,isLoading:h}=T(),g=U(),x=S(),w=f(s=>{if(s.password!==s.repeat_password){N("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}b({token:a.token,user:{first_name:s.first_name,last_name:s.last_name,password:s.password}},{onSuccess:()=>{g("/login")},onError:_=>{x("Error",y(_),"error")}})});return i?e(m,{children:[e(c,{title:"Create Account"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:113,columnNumber:7},globalThis),p?e("form",{onSubmit:w,children:e("div",{className:"flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold mb-large text-[20px]",children:"Create your Medusa account"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:117,columnNumber:13},globalThis),e("div",{className:"gap-y-small flex flex-col",children:[e("div",{children:[e(r,{placeholder:"First name",...o("first_name",{required:t.required("First name")}),autoComplete:"given-name"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:122,columnNumber:17},globalThis),e(u,{errors:n,name:"first_name"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:129,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:121,columnNumber:15},globalThis),e("div",{children:[e(r,{placeholder:"Last name",...o("last_name",{required:t.required("Last name")}),autoComplete:"family-name"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:132,columnNumber:17},globalThis),e(u,{errors:n,name:"last_name"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:139,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:131,columnNumber:15},globalThis),e("div",{children:e(r,{placeholder:"Password",type:"password",...o("password",{required:t.required("Password")}),autoComplete:"new-password"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:142,columnNumber:17},globalThis)},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:141,columnNumber:15},globalThis),e("div",{children:[e(r,{placeholder:"Confirm password",type:"password",...o("repeat_password",{required:"You must confirm your password"}),autoComplete:"new-password"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:152,columnNumber:17},globalThis),e(u,{errors:n,name:"repeat_password"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:160,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:151,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:120,columnNumber:13},globalThis),e(l,{variant:"secondary",size:"medium",className:"mt-large w-[280px]",loading:h,children:"Create account"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:163,columnNumber:13},globalThis),e("p",{className:"inter-small-regular text-grey-50 mt-xlarge",children:["Already signed up? ",e("a",{href:"/login",children:"Log in"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:172,columnNumber:34},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:171,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:116,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:115,columnNumber:9},globalThis):e("div",{className:"flex flex-col items-center text-center",children:[e("h1",{className:"inter-xlarge-semibold text-[20px]",children:"You have been invited to join the team"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:178,columnNumber:11},globalThis),e("p",{className:"inter-base-regular text-grey-50 mt-xsmall",children:["You can now join the team. Sign up below and get started",e("br",{},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:183,columnNumber:13},globalThis),"with your Medusa account right away."]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:181,columnNumber:11},globalThis),e(l,{variant:"secondary",size:"medium",className:"mt-xlarge w-[280px]",onClick:()=>v(!0),children:"Sign up"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:186,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:177,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:112,columnNumber:5},globalThis):e(m,{children:[e(c,{title:"Create Account"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:94,columnNumber:9},globalThis),e("div",{className:"gap-y-xsmall flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold mb- text-[20px]",children:"Invalid invite"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:96,columnNumber:11},globalThis),e("p",{className:"inter-base-regular text-grey-50 w-[280px] text-center",children:"The invite link you have used is invalid. Please contact your administrator."},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:99,columnNumber:11},globalThis),e("p",{className:"inter-small-regular text-grey-40 mt-xlarge",children:["Already have an account? ",e("a",{href:"/login",children:"Log in"},void 0,!1,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:104,columnNumber:38},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:103,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:95,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/cervarl/Documents/workspace/horizon/test/medusa-contentful/node_modules/@medusajs/admin-ui/ui/src/pages/invite.tsx",lineNumber:93,columnNumber:7},globalThis)};export{A as default};
