(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7617],{39107:function(e,t,i){"use strict";i.r(t),i.d(t,{_frontmatter:function(){return d},default:function(){return u}});var n=i(22122),o=i(19756),r=(i(15007),i(64983)),a=i(99536),s=["components"],d={},m={_frontmatter:d},l=a.Z;function u(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.mdx)(l,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"use-customer-id-to-identify-visitors"},"Use customer ID to identify visitors"),(0,r.mdx)("p",null,"Adobe offers a way to simplify the process of generating an identifier used by the Adobe Experience Cloud Identity Service. Adobe can use one of the customer IDs in the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/setcustomerids.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"setCustomerIDs"))," method as a seed for generating an Adobe Experience Cloud visitor ID for you."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"Before using this method to identify visitors, make sure that all of the following are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Communicate your intent to use this feature to the BDIA team. It requires coordination between the BDIA team and the Adobe Audience Manager team to provision the desired integration on the backend."),(0,r.mdx)("li",{parentName:"ul"},"Only one ",(0,r.mdx)("inlineCode",{parentName:"li"},"customerIDType")," can be used as a seed per IMS organization. If you attempt to set ",(0,r.mdx)("inlineCode",{parentName:"li"},"isMCSeed")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"true")," on a ",(0,r.mdx)("inlineCode",{parentName:"li"},"customerIDType")," other than the one provisioned by Adobe, it is ignored.")),(0,r.mdx)("h2",{id:"file-requirements"},"File requirements"),(0,r.mdx)("p",null,"When uploading files to the BDIA API and the customer ID is the desired visitor identifier for the row, make sure that all the following are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The case-sensitive ",(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," (i.e. Audience Manager's integration code) is specified in the file's column header row"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," contains a value for each row"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].isMCSeed")," is set to ",(0,r.mdx)("inlineCode",{parentName:"li"},"1")," (true) for each row")),(0,r.mdx)("p",null,"If either of these variables are blank, Adobe falls back to other visitor identification columns. If there are no other visitor identifiers present in the row, the row is skipped. Rows that fall back to other visitor identification columns are treated as separate visitors."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-mcseed-md-ffbad9bd031472fa966c.js.map