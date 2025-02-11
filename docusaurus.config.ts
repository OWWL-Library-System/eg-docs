import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OWWL Library System Technical Documentation',
  tagline: '',
  favicon: 'img/cropped-OWWL-favicon-1-32x32.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OWWL-Library-System', // Usually your GitHub org/user name.
  projectName: 'eg-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      "@orama/plugin-docusaurus-v3",
      {
        cloud: {
          indexId: process.env.ORAMA_CLOUD_INDEX_ID,
          oramaCloudAPIKey: process.env.ORAMA_CLOUD_API_KEY, // Env variable suggested
          deploy: "default", // Enables deploy while building/starting
        },
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OWWL-Library-System/eg-docs/tree/main/',
        },
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OWWL-Library-System/eg-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cropped-OWWL-favicon-1-32x32.png',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: 'OWWL Documentation',
      logo: {
        alt: 'OWWL Logo',
        src: 'img/cropped-OWWL-favicon-1-32x32.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'egdocsSidebar',
          position: 'left',
          label: 'Evergreen Documentation',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          href: 'https://owwl.org',
          label: 'owwl.org',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Evergreen Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Other OWWL sites',
          items: [
            {
              label: 'search.owwl.org',
              href: 'https://search.owwl.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
      ],
      copyright: `This work is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
