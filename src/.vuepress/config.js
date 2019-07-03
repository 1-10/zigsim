module.exports = {
  base: '/zigsim/',
  dest: '../docs',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Features',
        collapsable: false,
        children: [
          '/features/touch'
        ],
      },
    ]
  }
}
