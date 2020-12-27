export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe8b18002f86ee7991ccd81',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x3uta76i',
                  apiId: 'd3233705-e84e-47ad-b4ba-d432c8229309'
                },
                {
                  buildHookId: '5fe8b18032319c271cea6403',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vrgwmq15',
                  apiId: '829b21d5-05b1-4499-805f-33cfdf7728ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndreaInfUFSM/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vrgwmq15.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
