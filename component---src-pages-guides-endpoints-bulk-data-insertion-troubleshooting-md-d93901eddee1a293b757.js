(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2283],{1231:function(e,n,i){"use strict";i.r(n),i.d(n,{_frontmatter:function(){return r},default:function(){return c}});var o=i(2122),s=i(9756),t=(i(5007),i(4983)),a=i(9536),d=["components"],r={},l={_frontmatter:r},u=a.Z;function c(e){var n=e.components,i=(0,s.Z)(e,d);return(0,t.mdx)(u,(0,o.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"troubleshoot-uploads"},"Troubleshoot uploads"),(0,t.mdx)("p",null,"Use the following possible solutions to help determine why an upload failed."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"IMPORTANT:")," Adobe highly encourages you to use the ",(0,t.mdx)("a",{parentName:"p",href:"validate.md"},"Validate")," endpoint when establishing a BDIA workflow. If you do not first validate a file, you could end up with a combination of invalid and valid hits. The valid hits are processed, while the invalid hits are discarded. If you repair the file and upload it again, the originally valid hits are counted twice."),(0,t.mdx)("h2",{id:"file-not-in-gzip-format"},"File Not in GZIP Format"),(0,t.mdx)("p",null,'If a file is not in proper GZIP format, it results in the state of "File Error" and no rows are processed. Adobe recommendeds that the file creation process is checked to ensure that it properly compresses files.'),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file_id":"3ae262c5-cdea-4bdb-a41c-fbd2c2004c4d",\n  ...\n  "status_code":"REJECTED",\n  "processing_log":"An error occurred: Not in GZIP format",\n  "error":"No hits were found in the file."\n}\n')),(0,t.mdx)("h2",{id:"does-not-contain-a-required-header-column"},"Does not contain a required header column"),(0,t.mdx)("p",null,"Each hit requires at least one identifier:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"VisitorID"),(0,t.mdx)("li",{parentName:"ul"},"MarketingCloudVisitorID"),(0,t.mdx)("li",{parentName:"ul"},"IPAddress"),(0,t.mdx)("li",{parentName:"ul"},"CustomerID")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file_id":"3ae262c5-cdea-4bdb-a41c-fbd2c2004c4d",\n  ...\n  "status_code":"REJECTED",\n  "processing_log":"No visitor ID found in the file header.  There must be one of VisitorID, MarketingCloudVisitorID, IPAddress, or CustomerID defined...",\n  "error":"No valid rows were found in the file."\n}\n')),(0,t.mdx)("h2",{id:"missing-timestamp"},"Missing timestamp"),(0,t.mdx)("p",null,"Each hit must have an associated timestamp."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file_id":"3ae262c5-cdea-4bdb-a41c-fbd2c2004c4d",\n  ...\n  "status_code":"REJECTED",\n  "processing_log":"No timestamp field found in the file header. Processing complete: 0 rows will be submitted. 5000 rows were invalid.",\n  "error":"No valid rows were found in the file."\n}\n')),(0,t.mdx)("h2",{id:"some-rows-missing-values"},"Some rows missing values"),(0,t.mdx)("p",null,"If some rows have missing required values, those hits are skipped."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file_id":"3ae262c5-cdea-4bdb-a41c-fbd2c2004c4d",\n  ...\n  "status_code":"UPLOADED",\n  "processing_log":"On row: 1, missing \'UserAgent\'. This row will not be submitted. On row: 57, missing \'ReportSuiteId\'. This row will not be submitted. Processing complete: 4998 rows will be submitted. 2 rows were invalid."\n}\n')),(0,t.mdx)("h2",{id:"inconsistent-column-count"},"Inconsistent column count"),(0,t.mdx)("p",null,"If some rows have the wrong number of columns, those hits are skipped."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file_id":"3ae262c5-cdea-4bdb-a41c-fbd2c2004c4d",\n  ...\n  "status_code":"UPLOADED",\n  "processing_log":"On row: 1, inconsistent column count. Expected 5 columns, but found 6. On row: 3, inconsistent column count.  Expected 5 columns, but found 4. Processing complete: 4998 rows will be submitted.  2 rows were invalid."\n}\n')),(0,t.mdx)("h2",{id:"product-availability"},"Product availability"),(0,t.mdx)("p",null,"BDIA is built with redundancy and safeguards to ensure that issues due to unexpected system failures are rare. If it occurs, Adobe's monitoring alerts on-call staff to address the availability issue as quickly as possible. All files received are stored safely server-side for ingestion once the system stabilizes."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-troubleshooting-md-d93901eddee1a293b757.js.map