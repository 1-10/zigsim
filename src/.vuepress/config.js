module.exports = {
  title: 'ZIG SIM',
  base: '/zigsim/',
  dest: '../docs',
  description: 'ZIG SIM is an application to develop prototypes utilizing sensors on smartphones.',
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: '1→10', link: 'https://1-10.com/' },
    ],
    sidebar: [
      ['/docs', 'Introduction'],
      {
        title: 'Usage',
        collapsable: false,
        children: [
          '/getting-started',
          '/tutorial',
        ],
      },
      {
        title: 'Features',
        collapsable: false,
        children: [
          '/features/touch',
          '/features/apple-pencil',
          '/features/battery',
          '/features/motion',
          '/features/compass',
          '/features/gps',
          '/features/pressure',
          '/features/proximity',
          '/features/mic-level',
          '/features/remote-control',
          '/features/beacon',
          '/features/arkit',
          '/features/ndi',
          '/features/image-detection',
        ],
      },
      {
        title: 'Legal Information',
        collapsable: false,
        children: [
          '/legal/terms-of-use',
          '/legal/privacy-policy',
          '/legal/act-on-specified-commercial-transactions',
        ],
      },
    ]
  },
  markdown: {
    breaks: true,
  },
}
