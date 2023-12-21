import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nigel White Counselling",
  description: "One-to-one counselling for adults",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Nigel White Counselling",
    nav: [
      { text: "Counselling", link: "/counselling" },
      { text: "Supervision", link: "/supervision" },
    ],

    sidebar: [
      {
        items: [
          { text: "Counselling", link: "/counselling" },
          { text: "Supervision", link: "/supervision" },
          { text: "Experience", link: "/experience" },
          { text: "Training", link: "/training" },
          { text: "Topics", link: "/topics" },
          { text: "About", link: "/about" },
        ],
      },
    ],
  },
});
