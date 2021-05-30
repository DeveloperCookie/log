const { description } = require("../../../package.json");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Docs Boilerplate",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: "/log/",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "TIL",
        link: "/til/",
      },
      {
        text: "Post",
        link: "/post/",
      },
      {
        text: "Reference",
        link: "/reference/",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/woolim-ryu-98b351147/",
      },
    ],
    sidebar: {
      "/til/": [
        {
          title: "2021",
          collapsable: true,
          children: ["", "2021-2Q", "2021-1Q"],
        },
        {
          title: "2020",
          collapsable: true,
          children: ["", "2020-4Q", "2020-3Q", "2020-2Q", "2020-1Q"],
        },
      ],
      "/reference/": [
        {
          title: "Web",
          collapsable: true,
          children: ["", "others"],
        },
        {
          title: "Design",
          collapsable: true,
          children: ["design"],
        },
        {
          title: "Cloud",
          collapsable: true,
          children: ["cloud"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
