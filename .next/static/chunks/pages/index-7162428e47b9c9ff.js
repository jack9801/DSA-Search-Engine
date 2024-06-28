(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(47097)}])},15653:function(e,t,r){"use strict";var a=r(85893),l=r(67294),s=r(24112),n=r.n(s),i=r(94184),o=r.n(i);let d=!1;t.Z=()=>{let[e,t]=l.useState("light"),[r,s]=l.useState(!1),i=()=>{localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")},c=()=>{localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light")};d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,("dark"===e||null===e&&d)&&i();let x=e=>{"light"===e.currentTarget.dataset.theme?i():c()},h=()=>{s(window.matchMedia("(max-width: 960px)").matches)};return l.useEffect(()=>{h()},[]),l.useEffect(()=>{window.addEventListener("resize",h)}),l.useEffect(()=>{let e=localStorage.getItem("theme");e&&("dark"==e?i():c())},[]),(0,a.jsx)("div",{className:o()({[n().darkMode]:!0}),"data-theme":e,onClick:e=>{t(e=>"light"===e?"dark":"light"),x(e)},children:"light"===e?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})})}},34652:function(e,t,r){"use strict";var a=r(85893),l=r(9008),s=r.n(l);t.Z=e=>{let{title:t="AlgoSearch: Algo Problems Search Engine",desc:r="Discover a world of algorithmic problems effortlessly with AlgoSearch"}=e;return(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]})}},47097:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(85893),l=r(53772),s=r.n(l),n=r(34652),i=r(15653),o=r(59335),d=r(15927),c=r(67294),x=r(87066),h=()=>(0,a.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,a.jsx)("svg",{className:"loadersvg",viewBox:"25 25 50 50",children:(0,a.jsx)("circle",{r:"20",cy:"50",cx:"50"})})}),u=r(41664),m=r.n(u);function g(){return(0,a.jsxs)("div",{className:"bg-transparent h-fit w-screen flex flex-col items-center justify-center ".concat(s().className),children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(p,{})]})}function p(){let[e,t]=(0,c.useState)(""),[r,l]=c.useState(!0),[s,n]=c.useState(null),[u,g]=c.useState([]);async function p(r){r.preventDefault(),n(!0),g([]);let a=e.split(" ");console.log(a),await x.Z.get("https://algosearch-backend.onrender.com/search",{headers:{"Content-Type":"application/json"},params:{strings:JSON.stringify(a)}}).then(e=>{g(e.data)}).catch(e=>{console.error(e)}),t(""),n(!1)}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{className:"w-screen h-screen",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-[95vw] mx-auto mt-4",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center gap-2 ",children:[(0,a.jsxs)("h1",{className:"monu text-sm md:text-2xl tracking-wider caret-transparent",children:[(0,a.jsx)("span",{className:"text-blue-600",children:"Algo"}),"Search"]}),(0,a.jsx)("p",{className:"text-blue-600 border-[1px] border-blue-600 rounded-md p-1 text-xs font-extrabold comfort",children:"Beta"})]}),(0,a.jsxs)("div",{className:"flex justify-start items-center gap-3",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(o.IconButton,{size:"sm",color:"blue-gray",variant:"text",onClick:()=>l(e=>!e),children:(0,a.jsx)(d.Z,{className:"h-6 w-6 cursor-pointer"})})]}),(0,a.jsxs)("div",{className:"w-48 text-gray-900 bg-white border border-gray-500 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white absolute top-[4rem] right-0  transition-transform ease-in-out ".concat(r?"translate-x-full":"translate-x-0 z-50"," "),children:[(0,a.jsx)(m(),{href:"/about",children:(0,a.jsxs)("button",{type:"button",class:"relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",children:[(0,a.jsx)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})}),"About"]})}),(0,a.jsx)(m(),{href:"/howtw",children:(0,a.jsxs)("button",{type:"button",class:"relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",children:[(0,a.jsx)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"})}),"How it Works"]})})]})]}),(0,a.jsx)("div",{className:"w-[90vw] mx-auto",children:(0,a.jsxs)("div",{className:"w-full h-[80vh] rounded-xl bg-[#eaeaeaec] dark:bg-[#232327] mt-5 overflow-y-scroll p-2",children:[s?(0,a.jsx)(h,{}):(0,a.jsx)("div",{class:"w-full mx-auto flex justify-center pt-6 ",children:(0,a.jsx)("ul",{class:"grid-list pl-0 mx-auto mb-5 ",children:u.map(e=>(0,a.jsx)(b,{title:e.QuestionName,QuestionLink:e.QuestionLink,diff:e.Diff}))})}),(0,a.jsxs)("div",{class:"absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2 ",children:[(0,a.jsx)("form",{onSubmit:p,class:"stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl",children:(0,a.jsx)("div",{class:"relative flex h-full flex-1 items-stretch md:flex-col",role:"presentation",children:(0,a.jsxs)("div",{class:"flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black bg-white dark:border-gray-50 dark:text-white dark:bg-[#131314] rounded-[30px] shadow-xs dark:shadow-xs",children:[(0,a.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),id:"prompt-textarea",tabindex:"0","data-id":"root",rows:"1",placeholder:"Search here ...",class:"m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 outline-none placeholder-gray-900 dark:placeholder-gray-50 text-sm"}),(0,a.jsx)("button",{onClick:p,disabled:!e,class:"absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 dark:stroke-white stroke-black ",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})})})]})})}),(0,a.jsx)("div",{class:"px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",children:(0,a.jsxs)("span",{children:["AlgoSearch in beta testing may produce inaccurate predictions. ",(0,a.jsx)("a",{href:"https://www.linkedin.com/in/shishupal-151652243/",target:"_blank",rel:"noreferrer",class:"underline",children:"Developer AlgoSearch"})]})})]})]})})]})})}function b(e){let{title:t="Link",platformLink:r="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",QuestionLink:l="/  ",diff:s=""}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("li",{class:"bg-gray-50 dark:bg-gray-800 text-black shadow-lg max-w-sm bg-gray6 p-4 md:p-5 rounded-xl relative",children:[(0,a.jsx)("span",{class:"absolute -top-4 right-2 font-display leading-6 text-center text-3xl w-8 h-8 md:w-10 md:h-10 rounded-full p-2 bg-gray-100 dark:bg-[#525256] shadow-lg",children:(0,a.jsx)("img",{width:"24",height:"24",src:r,alt:"external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"})}),(0,a.jsx)("a",{href:l,target:"_blank",children:(0,a.jsx)("h5",{className:"monu text-[#1d1d1d] dark:text-[#e0e0e0] text-sm  md:text-lg",children:t})}),"Easy"==s&&(0,a.jsx)("div",{class:"bg-green-400 dark:bg-dark-green-400 text-green-600 dark:text-dark-green-400 inline-block rounded-md bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15] comfort",children:"Easy"}),"Medium"==s&&(0,a.jsx)("div",{class:"bg-yellow-600 dark:bg-dark-yellow-500 text-yellow-700 dark:text-dark-yellow-700 inline-block rounded-md bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15] comfort",children:"Medium"}),"Hard"==s&&(0,a.jsx)("div",{class:"bg-pink-400 dark:bg-dark-pink-400 text-pink-500 dark:text-dark-pink-400 inline-block rounded-md bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15] comfort",children:"Hard"}),(0,a.jsx)("div",{className:"inline-block justify-start items-center gap-1 pt-2 mx-1",children:(0,a.jsx)("a",{href:l+"solution",target:"_blank",children:(0,a.jsxs)("div",{class:"bg-blue-500 dark:bg-dark-blue-500 text-blue-500 dark:text-dark-blue-500 rounded-md bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15] comfort flex justify-start items-center gap-1",children:["Solution",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"",class:"w-5 h-5 rotate-45 stroke-blue-600",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})})})]})})}},24112:function(e){e.exports={darkMode:"DarkMode_darkMode__hqWpZ"}}},function(e){e.O(0,[277,394,47,888,774,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);