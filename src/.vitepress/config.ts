import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'jCamp.me',
  description: 'Personal blog of John Campion',
  themeConfig: {
    blog: {
      title: 'My Personal Blog',
      description: "A resource of useful tools and techniques I've found over the years.",
      defaultAuthor: 'John Campion',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Drivers', link: '/reference/drivers/2023' },
      { text: 'Utilities', link: '/reference/utilities' },
      { text: 'Wallpapers', link: '/reference/wallpapers' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          {
            text: 'RSS Feed',
            link: '/blog/feed.rss',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          { text: 'Drivers', link: '/reference/drivers/2023' },
          { text: 'Utilities', link: '/reference/utilities' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jcamp-code/jcamp.me',
      },
    ],
  },
})
