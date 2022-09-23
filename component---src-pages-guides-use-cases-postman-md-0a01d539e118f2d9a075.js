(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7684],{85e3:function(t,e,a){"use strict";a.r(e),a.d(e,{_frontmatter:function(){return m},default:function(){return l}});var n=a(22122),i=a(19756),p=(a(15007),a(64983)),o=a(99536),s=["components"],m={},r={_frontmatter:m},d=o.Z;function l(t){var e=t.components,a=(0,i.Z)(t,s);return(0,p.mdx)(d,(0,n.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,p.mdx)("p",null,"title: Use Postman with Adobe Analytics\ndescription: Send API calls to Adobe using the Postman API client."),(0,p.mdx)("h1",{id:"oauth-in-postman"},"OAuth in Postman"),(0,p.mdx)("h2",{id:"whats-needed"},"What's Needed"),(0,p.mdx)("p",null,"For OAuth authentication in Postman, you will need the following:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},"The ",(0,p.mdx)("strong",{parentName:"li"},"Client ID"),", ",(0,p.mdx)("strong",{parentName:"li"},"Client Secret"),", and ",(0,p.mdx)("strong",{parentName:"li"},"Default Redirect URI")," from your integration on the Adobe Developer console."),(0,p.mdx)("li",{parentName:"ul"},"Your ",(0,p.mdx)("strong",{parentName:"li"},"Global Company ID"),".")),(0,p.mdx)("h2",{id:"configure-the-request"},"Configure the Request"),(0,p.mdx)("h3",{id:"video-tutorials"},"Video tutorials"),(0,p.mdx)("p",null,"You can also refer to the video tutorials:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=lrg1MuVi0Fo"},"Using Postman to Make Adobe Analytics 2.0 API Requests")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=j1kI3peSXhY"},"Using Analysis Workspace to Build Adobe Analytics API 2.0 Requests"))),(0,p.mdx)("h3",{id:"to-configure-the-oauth-authentication-request"},"To configure the OAuth authentication request:"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click the ",(0,p.mdx)("strong",{parentName:"p"},"Authorization")," tab on the Request screen.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"TYPE")," dropdown, select ",(0,p.mdx)("strong",{parentName:"p"},"OAuth 2.0"),".")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click the ",(0,p.mdx)("strong",{parentName:"p"},"Get New Access Token")," button."),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"653px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/cb523/configure-Postman-request1.webp 320w","/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/797b9/configure-Postman-request1.webp 640w","/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/2523c/configure-Postman-request1.webp 653w"],sizes:"(max-width: 653px) 100vw, 653px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/72799/configure-Postman-request1.png 320w","/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/6af66/configure-Postman-request1.png 640w","/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/e7dce/configure-Postman-request1.png 653w"],sizes:"(max-width: 653px) 100vw, 653px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/4ba711874a4f8d02bdcea4145b108838/e7dce/configure-Postman-request1.png",alt:"configure Postman request 1",title:"configure Postman request 1",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"On the ",(0,p.mdx)("strong",{parentName:"p"},"GET NEW ACCESS TOKEN")," form, provide the following values:"),(0,p.mdx)("table",{parentName:"li"},(0,p.mdx)("thead",{parentName:"table"},(0,p.mdx)("tr",{parentName:"thead"},(0,p.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,p.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,p.mdx)("tbody",{parentName:"table"},(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Token Name"),(0,p.mdx)("td",{parentName:"tr",align:null},"Specify a name")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Grant Type"),(0,p.mdx)("td",{parentName:"tr",align:null},"Select ",(0,p.mdx)("strong",{parentName:"td"},"Authorization Code")," from the dropdown")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Callback URL"),(0,p.mdx)("td",{parentName:"tr",align:null},"Enter your OAuth client default redirect URI")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Auth URL"),(0,p.mdx)("td",{parentName:"tr",align:null},(0,p.mdx)("a",{parentName:"td",href:"https://ims-na1.adobelogin.com/ims/authorize/v1"},"https://ims-na1.adobelogin.com/ims/authorize/v1"))),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Access Token URL"),(0,p.mdx)("td",{parentName:"tr",align:null},(0,p.mdx)("a",{parentName:"td",href:"https://ims-na1.adobelogin.com/ims/token/v1"},"https://ims-na1.adobelogin.com/ims/token/v1"))),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Client ID"),(0,p.mdx)("td",{parentName:"tr",align:null},"Enter your Client ID from Adobe Developer")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Client Secret"),(0,p.mdx)("td",{parentName:"tr",align:null},"Enter your Client Secret from Adobe Developer")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Scope"),(0,p.mdx)("td",{parentName:"tr",align:null},"Enter ",(0,p.mdx)("inlineCode",{parentName:"td"},"openid,AdobeID,read_organizations,additional_info.projectedProductContext,additional_info.job_function"))),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Client Authentication"),(0,p.mdx)("td",{parentName:"tr",align:null},"Select ",(0,p.mdx)("strong",{parentName:"td"},"Send client credentials in body")," from the dropdown")))),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/d515f94b1cab265d619e1506f5bcc88d/cb523/postman-oauth2-step3.webp 320w","/analytics-2.0-apis/static/d515f94b1cab265d619e1506f5bcc88d/61907/postman-oauth2-step3.webp 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/d515f94b1cab265d619e1506f5bcc88d/72799/postman-oauth2-step3.png 320w","/analytics-2.0-apis/static/d515f94b1cab265d619e1506f5bcc88d/3075e/postman-oauth2-step3.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/d515f94b1cab265d619e1506f5bcc88d/3075e/postman-oauth2-step3.png",alt:"Postman Oauth Step 3",title:"Postman Oauth Step 3",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click ",(0,p.mdx)("strong",{parentName:"p"},"Request Token"),". You will be prompted to login. Click the ",(0,p.mdx)("strong",{parentName:"p"},"Use Token")," button at the bottom of the resulting pop up screen. The token automatically populates the ",(0,p.mdx)("strong",{parentName:"p"},"Available Token")," field.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Enter the request URI path you want to call, including your Global Company ID as shown below, and then click the ",(0,p.mdx)("strong",{parentName:"p"},"Preview Request")," button. This updates the request header with the token value."),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1179px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.49999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/cb523/postman-oauth2-step4.webp 320w","/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/797b9/postman-oauth2-step4.webp 640w","/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/6d476/postman-oauth2-step4.webp 1179w"],sizes:"(max-width: 1179px) 100vw, 1179px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/72799/postman-oauth2-step4.png 320w","/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/6af66/postman-oauth2-step4.png 640w","/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/60b3a/postman-oauth2-step4.png 1179w"],sizes:"(max-width: 1179px) 100vw, 1179px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/11bc29311297e5ccf6fc6b61b908f69d/60b3a/postman-oauth2-step4.png",alt:"Postman Oauth Step 4",title:"Postman Oauth Step 4",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("em",{parentName:"p"},"If you have already requested other tokens in Postman, you can select them from the ",(0,p.mdx)("strong",{parentName:"em"},"Available Tokens")," dropdown."))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Specify the method from the Postman request dropdown. Click the ",(0,p.mdx)("strong",{parentName:"p"},"Headers")," tab. In the Postman Headers table, the ",(0,p.mdx)("strong",{parentName:"p"},"Authorization")," KEY contains a corresponding ",(0,p.mdx)("strong",{parentName:"p"},"Bearer")," token VALUE.")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"On the next row, add the header KEY ",(0,p.mdx)("inlineCode",{parentName:"p"},"x-api-key")," and enter your Client ID as the value."),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1178px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/cb523/postman-oauth2-step5.webp 320w","/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/797b9/postman-oauth2-step5.webp 640w","/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/dc9fb/postman-oauth2-step5.webp 1178w"],sizes:"(max-width: 1178px) 100vw, 1178px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/72799/postman-oauth2-step5.png 320w","/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/6af66/postman-oauth2-step5.png 640w","/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/a13c9/postman-oauth2-step5.png 1178w"],sizes:"(max-width: 1178px) 100vw, 1178px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/627235a55aa61bfdc3eb0ed8f850cc4f/a13c9/postman-oauth2-step5.png",alt:"Postman Oauth Step 5",title:"Postman Oauth Step 5",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click the ",(0,p.mdx)("strong",{parentName:"p"},"Send")," button. The ",(0,p.mdx)("inlineCode",{parentName:"p"},"GET/users")," response includes the first 10 users for your Analytics company. You are now also authorized to work with other Analytics endpoints."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-use-cases-postman-md-0a01d539e118f2d9a075.js.map