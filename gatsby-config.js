/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    home: {
      title: 'Adobe Analytics',
      path: '/analytics-apis/'
    },
    versions: [
      {
        title: 'v2.0',
        selected: true
      },
      {
        title: 'v1.4',
        path: '/analytics-apis/docs/1.4/'
      }
    ],
    pages: [
      {
        title: 'Overview',
        path: 'index.md'
      },
      {
        title: 'Guides',
        path: 'guides'
      },
      {
        title: 'API References',
        menu: [
          {
            title: 'Adobe Analytics 2.0 APIs',
            path: 'apis/index.md'
          },
          {
            title: 'Bulk Data Insertion API Reference',
            path: 'apis/bulk-data-insertion.md'
          },
          {
            title: 'Data Repair API Reference',
            path: 'apis/data-repair.md'
          }
        ]
      },
      {
        title: 'Support',
        path: 'support.md'
      }
    ],
    subPages: [
      {
        title: 'Getting Started',
        path: 'guides/index.md',
        pages: [
          {
            title: 'JWT',
            path: 'guides/jwt.md'
          },
          {
            title: 'Migrating from 1.4',
            path: 'guides/migration.md'
          },
          {
            title: 'FAQ',
            path: 'guides/faq.md'
          }
        ]
      },
      {
        title: 'Endpoint guides',
        path: 'guides/endpoints/index.md',
        pages: [
          {
            title: 'Bulk data insertion',
            path: 'guides/endpoints/bulk-data-insertion/index.md',
            pages: [
              {
                title: 'Column reference',
                path: 'guides/endpoints/bulk-data-insertion/column-reference.md'
              },
              {
                title: 'Validate',
                path: 'guides/endpoints/bulk-data-insertion/validate.md'
              },
              {
                title: 'Visitor groups',
                path: 'guides/endpoints/bulk-data-insertion/visitor-groups.md'
              },
              {
                title: 'Customer ID',
                path: 'guides/endpoints/bulk-data-insertion/customer-id.md'
              },
              {
                title: 'Examples',
                path: 'guides/endpoints/bulk-data-insertion/example.md'
              },
              {
                title: 'Troubleshooting',
                path: 'guides/endpoints/bulk-data-insertion/troubleshooting.md'
              },
              {
                title: 'FAQ',
                path: 'guides/endpoints/bulk-data-insertion/faq.md'
              }
            ]
          },
          {
            title: 'Calculated metrics',
            path: 'guides/endpoints/calculatedmetrics/index.md',
            pages: [
              {
                title: 'Functions',
                path: 'guides/endpoints/calculatedmetrics/functions.md'
              },
              {
                title: 'Validate',
                path: 'guides/endpoints/calculatedmetrics/validate.md'
              },
              {
                title: 'FAQ',
                path: 'guides/endpoints/calculatedmetrics/faq.md'
              }
            ]
          },
          {
            title: 'Component Meta Data',
            pages: [
              {
                title: 'Tags',
                path: 'guides/endpoints/componentmetadata/tags/index.md',
                pages: [
                  {
                    title: 'Examples',
                    path: 'guides/endpoints/componentmetadata/tags/examples.md'
                  }
                ]
              }
            ]
          },
          {
            title: 'Data repair',
            path: 'guides/endpoints/data-repair/index.md',
            pages: [
              {
                title: 'Variables',
                path: 'guides/endpoints/data-repair/variables.md'
              },
              {
                title: 'Server call estimate',
                path: 'guides/endpoints/data-repair/server-call-estimate.md'
              },
              {
                title: 'Job',
                path: 'guides/endpoints/data-repair/job.md'
              },
              {
                title: 'Job ID',
                path: 'guides/endpoints/data-repair/job-id.md'
              },
              {
                title: 'FAQ',
                path: 'guides/endpoints/data-repair/faq.md'
              }
            ]
          },
          {
            title: 'Discovery',
            path: 'guides/endpoints/discovery.md'
          },
          {
            title: 'Reports',
            path: 'guides/endpoints/reports/index.md',
            pages: [
              {
                title: 'Breakdowns',
                path: 'guides/endpoints/reports/breakdowns.md'
              },
              {
                title: 'Debugger',
                path: 'guides/endpoints/reports/debugger.md'
              },
              {
                title: 'Examples',
                path: 'guides/endpoints/reports/examples.md'
              },
              {
                title: 'Search filters',
                path: 'guides/endpoints/reports/search-filters.md'
              },
              {
                title: 'Segments',
                path: 'guides/endpoints/reports/segments.md'
              }
            ]
          },
          {
            title: 'Report suites',
            path: 'guides/endpoints/report-suites.md'
          },
          {
            title: 'Segments',
            path: 'guides/endpoints/segments/index.md',
            pages: [
              {
                title: 'Definitions',
                path: 'guides/endpoints/segments/definition.md'
              },
              {
                title: 'Validate',
                path: 'guides/endpoints/segments/validate.md'
              },
              {
                title: 'Examples',
                path: 'guides/endpoints/segments/examples.md'
              },
              {
                title: 'FAQ',
                path: 'guides/endpoints/segments/faq.md'
              }
            ]
          },
          {
            title: 'Usage',
            path: 'guides/endpoints/usage.md'
          },
          {
            title: 'Virtual report suites',
            path: 'guides/endpoints/vrs/index.md',
            pages: [
              {
                title: 'JSON body reference',
                path: 'guides/endpoints/vrs/reference.md'
              },
              {
                title: 'Examples',
                path: 'guides/endpoints/vrs/examples.md'
              }
            ]
          }
        ]
      },
      {
        title: 'Use cases',
        path: 'guides/use-cases/index.md',
        pages: [
          {
            title: 'cURL',
            path: 'guides/use-cases/curl.md'
          },
          {
            title: 'Java',
            path: 'guides/use-cases/java.md'
          },
          {
            title: 'Postman',
            path: 'guides/use-cases/postman.md'
          },
          {
            title: 'Python',
            path: 'guides/use-cases/python.md'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/analytics-apis/docs/2.0/'
};
