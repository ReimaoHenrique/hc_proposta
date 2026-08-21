// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HC Project',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-hc.jpeg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  clientModules: [
    require.resolve('./src/auth-guard.js'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HC Project',
        logo: {
          alt: 'HC Logo',
          src: 'img/logo-hc.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'hc-generators/intro',
            position: 'left',
            label: 'Pitch Deck',
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
                label: 'Pitch Deck',
                to: '/docs/hc-generators/intro',
              },
{
                label: 'Pitch HC Guardian',
                to: '/docs/hc-guardian/introducao',
              },
            ],
          },
          {
            title: 'Ecossistema',
            items: [
              {
                label: 'HC Guardian Edge',
                to: '/docs/hc-guardian/ecossistema',
              },
              {
                label: 'RHINOS',
                to: '/docs/hc-guardian/ecossistema',
              },
              {
                label: 'ARGUS e SENTRY',
                to: '/docs/hc-guardian/inteligencias-artificiais',
              },
            ],
          },
          {
            title: 'Tecnologia',
            items: [
              {
                label: 'Indução por Sobrepolos',
                to: '/docs/hc-generators/inducao-por-sobrepolos',
              },
              {
                label: 'Digital Twin',
                to: '/docs/hc-guardian/digital-twin',
              },
              {
                label: 'Health Score e RUL',
                to: '/docs/hc-guardian/health-score-rul',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HC Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
