module.exports = {
  base: '/zigsim/',
  dest: '../docs',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: '1→10', link: 'https://1-10.com/' },
    ],
    sidebar: [
      '/',
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
          '/features/mic-level',
          '/features/beacon',
          '/features/arkit',
          '/features/ndi',
          '/features/image-detection',
        ],
      },
    ]
  }
}
