import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nigel White Counselling",
  description: "One-to-one counselling for adults",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: "Cost", link: "/cost" },
          { text: "About", link: "/about" },
        ],
      },
    ],
  },
});
