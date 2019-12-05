/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Mehr erfahren zur [Installation dieser Seiten und dem Aufbau.](${docUrl( 'readme.html', )}). Dem Original auf dem alles basiert mit vollständiger Dokumentation und vielen Tips und Tricks [Docusaurus.](https://docusaurus.io/)`,
      title: 'Dokumentationen anschauen zum Weitermachen',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Unterstützung benötigt?</h1>
          </header>
          <p>Bei Fragen immer fragen!</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
