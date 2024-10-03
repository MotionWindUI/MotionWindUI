import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MotionWindUI Contributors Guide',
  tagline: 'Welcome to the MotionWindUI Contributors Guide!',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  // This will only be run locally so set it to localhost
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MotionWindUI', // Usually your GitHub org/user name.
  projectName: 'MotionWindUI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/MotionWindUI/MotionWindUI/tree/main/packages/docs/contributorsGuide',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: 'Contributors Guide',
      logo: {
        alt: 'MotionWindUI Logo',
        src: 'img/shorthand_light.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSideBar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/MotionWindUI/MotionWindUI',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'External Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MotionWindUI/MotionWindUI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MotionWindUI, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
