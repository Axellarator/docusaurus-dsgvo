/** 19/12/10:22:00 SITECONFIG.JS C:\Users\Klaus\GitHub\dsgvo\website
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path'); // Input von Zeit-now

const users = [                                         // List of projects/orgs using your project for the users page.
  {
    caption: 'User1',

    image: '/img/undraw_open_source.svg',               // You will need to prepend the image path with your baseUrl, if it is not '/', like: '/test-site/img/image.jpg'.
    infoLink: 'https://www.wikipedia.de/',
    pinned: true,
  },
];

const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',   // Input von Zeit-now
  title: 'Digital Audit',                               // Titel für Website.
  tagline: 'Die Webseite für den Auditor',
  url: 'https://axellarator.github.io',                 // Website URL auf GitHub
  baseUrl: '/',                                         // Basis-URL 
  
  // For github.io type URLs, you would set the url and baseUrl like: url: 'https://facebook.github.io', baseUrl: '/test-site/',

  projectName: 'docusaurus-dsgvo',                      // Used for publishing and more
  organizationName: 'axellarator',                      // For top-level user or org sites, the organization is still the same.
                                                        // e.g., for the https://JoelMarcey.github.io site, it would be set like...
                                                        // organizationName: 'JoelMarcey'
  useEnglishUrl: true,                                  // Behebt Probleme mit Aufruf Impressum via interne.JS und interne.doc 
  
 headerLinks: [                                         // For no header links in the top nav bar -> headerLinks: [],
  {blog: true, label: 'News'},
  {doc: 'gesetze', label: 'Gesetze'},
  {doc: 'dsa', label: 'DSA'},
  {doc: 'dsb', label: 'DSB'},
  {doc: 'foerderung', label: 'Förderung'},
  {doc: 'projekt', label: 'Projekte'},
  {doc: 'kino', label: 'Kino'},
  {doc: 'splan', label: 'Lehrplan'},
  {page: 'help', label: 'Hilfe'},
  { search: true },
  // {page: 'users', label: 'User'},
  {href : "https://github.com/axellarator/docusaurus-dsgvo", label : "Github"}, // GitHub Zugang
],

// Pfad zum editieren - Klappt noch nicht
// editUrl: 'file://%homepath%/Docusaurus/docs/',
 
// If you have users set above, you add it here:
  users,

algolia: {
  apiKey: 'a8381e4143dc1499f2a45c07148a2462',
  indexName: 'prod_VG',
  placeholder: 'Frag mich mal was',
  },

// path to images for header/footer 

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

// Colors for website

  colors: {
    primaryColor: '#3928d1',
    secondaryColor: '#5100ff',
  },

// Custom fonts for website

  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.

  copyright: `Copyright © ${new Date().getFullYear()} Value Grid Engineering Group`,

// Highlight.js theme to use for syntax highlighting in code blocks.

  highlight: { theme: 'default', },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
	{src: '/js/flash01-dsa.js', type: 'text/javascript',},
	{src: '/js/flash01-dsa-data.js', type: 'text/javascript',},
  ],
  stylesheets: [
    'https://docusaurus.io/style.css',
    {href: '/css/flash01-dsb.css', type: 'text/css'},
    {href: '/css/flash01-dsa.css', type: 'text/css',
    },
  ],	

  onPageNav: 'separate', // On page navigation for the current documentation page.
  
  cleanUrl: true, // No .html extensions for paths.

// Markdown Sub und Sup

  markdownPlugins: [ function foo(md) { md.inline.ruler.enable(['sub', 'sup']); }, ],
 
// Open Graph and Twitter card images.

  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

// Set this to true if you want to enable the scroll to top button at the bottom of your site.

  scrollToTop: true,

// For sites with a sizable amount of content, set collapsible to true.
// Expand/collapse the links and subcategories under categories.

  docsSideNavCollapsible: true,

  blogSidebarCount: 'ALL',

// Show documentation's last contributor's name.

  enableUpdateBy: true,

// Show documentation's last update time.

  enableUpdateTime: true,

/* Boolean flag to indicate whether HTML files in /pages should be wrapped with Docusaurus site styles, header and footer. This feature is experimental and relies on the files being HTML fragments instead of complete pages. It inserts the contents of your HTML file with no extra processing. Defaults to false. */ 
  
  wrapPagesHTML: true,
  
// Übernommen aus Example Siteconfigjs

  scrollToTop: true,
  scrollToTopOptions: {
	zIndex: 100,
  },
  
// You may provide arbitrary config keys to be used as needed by your template. For example, if you need your repo's URL...
  repoUrl: 'https://axellarator.github.io',
};

module.exports = siteConfig;
