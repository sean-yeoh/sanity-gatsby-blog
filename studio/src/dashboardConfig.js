export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb109456ef4388603f6aa3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nou8hmc8',
                  apiId: '39bb41f4-cd17-45af-915d-13b2db023bcc'
                },
                {
                  buildHookId: '5eb10945268b39a87d90419d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dr8bx21r',
                  apiId: 'c7c2fa9e-3d05-496b-a303-ecca5f3ffb30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sean-yeoh/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dr8bx21r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
