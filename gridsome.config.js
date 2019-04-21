// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Insan3Lik3',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'stuff/**/*.md',
        typeName: 'Stuff',
        route: '/stuff/:slug',
      },
    },
  ],
}
