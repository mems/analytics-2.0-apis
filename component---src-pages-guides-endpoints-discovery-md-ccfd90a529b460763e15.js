(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1925],{1969:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var a,i=n(2122),r=n(9756),o=(n(5007),n(4983)),m=n(9536),d=["components"],l={},s=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:l},c=m.Z;function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"discovery-api"},"Discovery API"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"discovery/me")," API returns information on the user's company that is necessary for making other Adobe Analytics API calls. It returns information on who is making the call by inspecting the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Access Token")," that is sent for authentication. "),(0,o.mdx)("p",null,"For example, if you have multiple logins for various companies, you can use this API to return a list of the companies associated your Client ID. From the list you can then choose which company to call with other APIs."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/discovery/me")),(0,o.mdx)("h2",{id:"example-curl-request"},"Example cURL Request"),(0,o.mdx)("p",null,"The following example requests the user's information for company logins:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"request"},"Request"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET --header "x-api-key: {CLIENT_ID}" --header "Authorization: Bearer {ACCESS_TOKEN}" "https://analytics.adobe.io/discovery/me"\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "imsUserId": "1B..OMITTED..01@AdobeID",\n  "imsOrgs": [\n    {\n      "imsOrgId": "EA..OMITTED..29@AdobeOrg",\n      "companies": [\n        {\n          "globalCompanyId": "testco0",\n          "companyName": "Test Company",\n          "apiRateLimitPolicy": "aa_api_tier10_tp"\n        },\n        {\n          "globalCompanyId": "anothe0",\n          "companyName": "Another Test Company",\n          "apiRateLimitPolicy": "aa_api_tier10_tp"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.mdx)("h2",{id:"discovery-attributes"},"Discovery Attributes"),(0,o.mdx)("p",null,"The following table provides descriptions for attributes commonly used with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"discovery/me")," API:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"imsUserId")),(0,o.mdx)("td",{parentName:"tr",align:null},"The unique identifier for a user in the Adobe IMS system")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"imsOrgs")),(0,o.mdx)("td",{parentName:"tr",align:null},"List of the IMS Organization for which the user has access")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"imsOrgId")),(0,o.mdx)("td",{parentName:"tr",align:null},"The unique identifier for an IMS Organization")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"companies")),(0,o.mdx)("td",{parentName:"tr",align:null},"List of companies for which the user has access within an IMS Organization")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"globalCompanyId")),(0,o.mdx)("td",{parentName:"tr",align:null},"The globally unique identifier for an Analytics Company. This is needed as a path parameter to make API calls to the Adobe Analytics APIs.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"companyName")),(0,o.mdx)("td",{parentName:"tr",align:null},"The friendly name of the Analytics Company")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"apiRateLimitPolicy")),(0,o.mdx)("td",{parentName:"tr",align:null},"The API rate limiting policy setting for the given Analytics Company.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-discovery-md-ccfd90a529b460763e15.js.map