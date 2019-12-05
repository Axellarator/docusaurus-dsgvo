/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * FOOTER.js This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : 'en/'}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
		  <div>
            <h5>Wichtiges</h5>
			<a href={this.docUrl('datenschutz.html', this.props.language)}>
              Unsere Datenschutz-Hinweise
            </a>
			<a href={this.docUrl('impressum.html', this.props.language)}>
              Impressum
            </a>
          </div>
         <div>
            <h5>Community</h5>
			<a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
           <a href="https://discordapp.com/">Project Chat</a>
         </div>
         <div>
            <h5>Mehr</h5>
            <a href={`${this.props.config.baseUrl}blog`}>News</a>
            <a href="https://github.com/">GitHub</a>
            <a className="github-button"
               href={this.props.config.repoUrl} ></a>
       </div>
        </section>

<section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
