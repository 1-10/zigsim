const url = "https://1-10.github.io/zigsim/";
const title = "ZIG SIM by 1→10 #ZIGSIM";
const image = "zigsim-ogp.png";
const description = "ZIG SIM is an application to develop prototypes utilizing sensors on smartphones.";
const sitename = "ZIG SIM by 1→10 #ZIGSIM";

module.exports = {
  title: title,
  base: '/zigsim/',
  dest: '../docs',
  description: 'ZIG SIM is an application to develop prototypes utilizing sensors on smartphones.',
  head: [
    // Facebook
    ['meta', { property: "og:url", content: url }],
    ['meta', { property: "og:type", content: "website" }],
    ['meta', { property: "og:title", content: title }],
    ['meta', { property: "og:image", content: image }],
    ['meta', { property: "og:description", content: description }],
    ['meta', { property: "og:site_name", content: sitename }],
    ['meta', { property: "og:locale", content: "en_US" }],

    // Twitter Cards
    ['meta', { name: "twitter:card", content: "summary" }],
    ['meta', { name: "twitter:url", content: url }],
    ['meta', { name: "twitter:title", content: title }],
    ['meta', { name: "twitter:description", content: description }],
    ['meta', { name: "twitter:image", content: image }],

    ['meta', { name: "theme-color", content: "#02C65A" }],

    // Favicons
    ['link', { rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    ['link', {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16 32x32",
      href: "favicon.ico"
    }],
    ['link', {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "favicon-180.png"
    }],
    ['link', {
      rel: "icon",
      sizes: "192x192",
      href: "favicon-192.png"
    }],
  ],
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
