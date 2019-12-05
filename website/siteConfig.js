/** SITECONFIG.JS C:\Users\Klaus\GitHub\dsgvo\website
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * See https://docusaurus.io/docs/site-config for all 
 * the possible site configuration options.
 */

const path = require('path'); // Input von Zeit-now

// List of projects/orgs using your project for the users page.

const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.wikipedia.de/',
    pinned: true,
  },
];

const siteConfig = {
    
  customDocsPath: path.basename(__dirname) + '/docs', // Input von Zeit-now

  title: 'Digital Audit', // Titel für die Webseite.

  tagline: 'Die Webseite für den Auditor',

  url: 'https://website.axellarator.now.sh/', // Your website URL

  baseUrl: '/', // Base URL for your project
  
  useEnglishUrl: true,
  
  
// Used for publishing and more

projectName: 'docusaurus-dsgvo',
 
organizationName: 'axellarator', 
  
// For no header links in the top nav bar -> headerLinks: [],

headerLinks: [
  {blog: true, label: 'News'},
  {doc: 'gesetze', label: 'Gesetze'},
  {doc: 'dsa', label: 'DSA'},
  {doc: 'dsb', label: 'DSB'},
  {doc: 'foerderung', label: 'Förderung'},
  {doc: 'projekt', label: 'Projekte'},
  {doc: 'kino', label: 'Kino'},
  {doc: 'splan', label: 'Stundenplan'},
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
//  algoliaOptions: {
//      autofocus: true,
//      showReset: false,
//    }
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

// usePrism: true,

highlight: { theme: 'default', }, // theme: 'dracula'

// Add custom scripts here that would be placed in <script> tags.
scripts: [
  'https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/js/code-block-buttons.js',
  {src: '/js/flash01-dsa.js', type: 'text/javascript',},
  {src: '/js/flash01-dsa-data.js', type: 'text/javascript',},
],
stylesheets: [
  'https://docusaurus.io/style.css',
  '/css/code-block-buttons.css',
  {href: '/css/flash01-dsb.css', type: 'text/css'},
  {href: '/css/flash01-dsa.css', type: 'text/css',},
],

// On page navigation for the current documentation page.

onPageNav: 'separate',
  
// No .html extensions for paths.

cleanUrl: true,

// Markdown Sub und Sup

markdownPlugins: [ function foo(md) { md.inline.ruler.enable(['sub', 'sup']); }, ],
 
// Open Graph and Twitter card images.
  ogImage: 'img/undraw_gdpr_3xfb.svg',
  
  twitterImage: 'img/undraw_gdpr_3xfb.svg',

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
  
// You may provide arbitrary config keys to be used as needed by your
// template. For example, if you need your repo's URL...
repoUrl: 'https://github.com/axellarator/docusaurus-dsgvo',
};

module.exports = siteConfig;
