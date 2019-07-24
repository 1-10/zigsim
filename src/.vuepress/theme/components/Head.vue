<template></template>

<script>
const url = "https://1-10.github.io/zigsim/";
const image = "zigsim-ogp.png";
const description = "ZIG SIM is an application to develop prototypes utilizing sensors on smartphones.";
const sitename = "ZIG SIM by 1→10, Inc. #ZIGSIM";

export default {
  props: ['title'],
  head: {
    meta () {
      return [
        // { name: "description", content: description },

        // Facebook
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.title },
        { property: "og:image", content: image },
        { property: "og:description", content: description },
        { property: "og:site_name", content: sitename },
        { property: "og:locale", content: "en_US" },

        // Twitter Cards
        { name: "twitter:card", content: "summary" },
        { name: "twitter:url", content: url },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },

        { name: "theme-color", content: "#02C65A" }
      ];
    },
    link: [
      // Favicons
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "16x16 32x32",
        href: "favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "favicon-180.png"
      },
      {
        rel: "icon",
        sizes: "192x192",
        href: "favicon-192.png"
      }
    ]
  }
};
</script>
