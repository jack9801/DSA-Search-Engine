(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{26515:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(74572)}])},15653:function(e,r,t){"use strict";var l=t(85893),o=t(67294),s=t(24112),n=t.n(s),a=t(94184),i=t.n(a);let c=!1;r.Z=()=>{let[e,r]=o.useState("light"),[t,s]=o.useState(!1),a=()=>{localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")},d=()=>{localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light")};c=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,("dark"===e||null===e&&c)&&a();let h=e=>{"light"===e.currentTarget.dataset.theme?a():d()},m=()=>{s(window.matchMedia("(max-width: 960px)").matches)};return o.useEffect(()=>{m()},[]),o.useEffect(()=>{window.addEventListener("resize",m)}),o.useEffect(()=>{let e=localStorage.getItem("theme");e&&("dark"==e?a():d())},[]),(0,l.jsx)("div",{className:i()({[n().darkMode]:!0}),"data-theme":e,onClick:e=>{r(e=>"light"===e?"dark":"light"),h(e)},children:"light"===e?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,l.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,l.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})})}},34652:function(e,r,t){"use strict";var l=t(85893),o=t(9008),s=t.n(o);r.Z=e=>{let{title:r="AlgoSearch: Algo Problems Search Engine",desc:t="Discover a world of algorithmic problems effortlessly with AlgoSearch"}=e;return(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:r}),(0,l.jsx)("meta",{name:"description",content:t}),(0,l.jsx)("meta",{charSet:"UTF-8"}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]})}},74572:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var l=t(85893),o=t(15653),s=t(34652),n=t(15927),a=t(59335),i=t(41664),c=t.n(i),d=t(67294);function h(){let[e,r]=d.useState(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{title:"About AlgoSearch"}),(0,l.jsxs)("main",{className:"w-screen min-h-screen",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center w-[95vw] mx-auto mt-4",children:[(0,l.jsxs)("div",{className:"flex justify-start items-center gap-2 ",children:[(0,l.jsx)(c(),{href:"/",children:(0,l.jsxs)("h1",{className:"monu text-sm md:text-2xl tracking-wider caret-transparent cursor-pointer",children:[(0,l.jsx)("span",{className:"text-blue-600",children:"Algo"}),"Search"]})}),(0,l.jsx)("p",{className:"text-blue-600 border-[1px] border-blue-600 rounded-md md:px-2 md:py-[2px] p-1 text-xs md:text-sm font-extrabold comfort",children:"Beta"})]}),(0,l.jsxs)("div",{className:"flex justify-start items-center gap-3",children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(a.IconButton,{size:"sm",color:"blue-gray",variant:"text",onClick:()=>r(e=>!e),children:(0,l.jsx)(n.Z,{className:"h-6 w-6 cursor-pointer"})})]}),(0,l.jsxs)("div",{className:"w-48 text-gray-900 bg-white border border-gray-500 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white absolute top-[4rem] right-0  transition-transform ease-in-out ".concat(e?"translate-x-full":"translate-x-0 z-50"," "),children:[(0,l.jsx)(c(),{href:"/about",children:(0,l.jsxs)("button",{type:"button",class:"relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",children:[(0,l.jsx)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})}),"About"]})}),(0,l.jsx)(c(),{href:"/howtw",children:(0,l.jsxs)("button",{type:"button",class:"relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",children:[(0,l.jsx)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2 fill-current",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"})}),"How it Works"]})})]})]}),(0,l.jsxs)("div",{className:"w-[90vw] h-full bg-[#eaeaeaec] dark:bg-[#232327]  mx-auto rounded-md my-10 p-4 flex justify-start items-center flex-col gap-5 comfort",children:[(0,l.jsxs)("p",{children:["Welcome to ",(0,l.jsx)("span",{className:"monu",children:"AlgoSearch"}),", the ultimate algorithmic problems search engine. Developed for the prestigious Algozenith Web Dev Hackathon, AlgoSearch is your go-to platform for finding the perfect DSA (Data Structures and Algorithms) or CP (Competitive Programming) problem."]}),(0,l.jsx)("p",{children:"Our mission is to make your coding journey more efficient and enjoyable. Whether you're a beginner looking to sharpen your skills or a seasoned programmer in need of a challenge, AlgoSearch is here to help."}),(0,l.jsx)("p",{children:"With a simple keyword search, you can easily explore a vast collection of problems curated by industry experts. AlgoSearch leverages powerful algorithms and intelligent indexing techniques to deliver accurate and relevant results for your specific needs. We understand that time is precious, and our aim is to save you valuable hours spent on searching for the right problem."}),(0,l.jsxs)("p",{children:["AlgoSearch owes its success to the invaluable guidance of mentors  ",(0,l.jsx)("span",{className:"text-blue-600 cursor-pointer",children:(0,l.jsx)("a",{href:"https://www.linkedin.com/in/acraider/",target:"_blank",children:"Vivek Gupta"})})," and ",(0,l.jsx)("span",{href:"https://www.linkedin.com/in/prabaljainn/",target:"_blank",className:"text-blue-600 cursor-pointer",children:(0,l.jsx)("a",{children:"Prabal Jain"})})," . With their extensive knowledge and expertise, they have shaped AlgoSearch into an indispensable tool for every aspiring coder."]}),(0,l.jsx)("p",{children:"Join the AlgoSearch community today and unlock a world of challenging and engaging algorithmic problems. Whether you're preparing for coding interviews, participating in programming competitions, or simply honing your problem-solving skills, AlgoSearch has got you covered."}),(0,l.jsxs)("p",{children:["Embrace the power of algorithms and embark on an exciting problem-solving adventure with ",(0,l.jsx)("span",{className:"monu",children:"AlgoSearch!"})]}),(0,l.jsxs)("p",{children:["Developer  ",(0,l.jsx)("span",{className:"text-blue-600 cursor-pointer",children:(0,l.jsx)("a",{href:"https://www.linkedin.com/in/shishupal-151652243/",target:"_blank",children:"shishupal"})})]})]}),(0,l.jsxs)("div",{className:"my-10 w-[90vw] mx-auto",children:[(0,l.jsx)("h1",{className:"monu text-3xl text-blue-600 my-10",children:"Features"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Theme Switch: Dark and Light Mode, Auto Fetch Theme"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Seamlessly switch between dark and light modes with automatic theme detection."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Platform Tag for a Particular Problem"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Categorizing and organizing problems based on the platform they belong to."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Difficulty Criteria of the Problem"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Classifying problems based on their level of difficulty to aid user selection."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Server Side Rendering for Query Predictions"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Enhancing query predictions with efficient rendering techniques."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Top 20 Results from the Algorithmic Predictions"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Providing the most relevant and accurate results based on advanced algorithms."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"Simple and User-Friendly UI"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Streamlined interface designed for easy navigation and optimal user experience."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"One Click Solution / Editorial of the Problem"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Instant access to problem solutions and detailed editorials with a single click."}),(0,l.jsx)("h1",{class:"mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600",children:"More New Features with Upcoming Updates"}),(0,l.jsx)("p",{class:"mb-4 py-0 flex flex-col comfort",children:"Exciting new features and enhancements coming soon to further improve the platform."})]})]})]})]})}},24112:function(e){e.exports={darkMode:"DarkMode_darkMode__hqWpZ"}}},function(e){e.O(0,[277,394,888,774,179],function(){return e(e.s=26515)}),_N_E=e.O()}]);