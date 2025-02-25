const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Fossabot',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.fossabot.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fossadev', // Usually your GitHub org/user name.
  projectName: 'fossabot-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fossadev/fossabot-docs/edit/main/website/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Fossabot',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'welcome',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://github.com/fossadev/fossabot-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
            ],
          },
          {
            title: 'Stay Connected',
            items: [
              {
                label: 'Twitch',
                href: 'https://twitch.tv/Fossabot',
              },
              {
                label: 'Discord',
                href: 'https://fossabot.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Fossabot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Terms of Serivce',
                to: 'https://fossadev.com/tos',
              },
              {
                label: 'Privacy Policy',
                href: 'https://fossadev.com/privacy',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}, FossaDev Ltd. Not affiliated with Twitch. Registered in England and Wales (No. 12219499).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
