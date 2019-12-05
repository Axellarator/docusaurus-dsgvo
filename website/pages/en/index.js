/** INDEX.JS
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = 'EN'} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_gdpr_3xfb.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
			<Button href={docUrl('dsa.html')}>Datenschutz-Auditoren</Button>
            <Button href={docUrl('dsb.html')}>Datenschutz-Beauftragte</Button>
            <Button href="#try">Datenschutz lernen</Button>
            <Button href={docUrl('../blog')}>Neuigkeiten</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="justify"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div className="productShowcaseSection" style={{textAlign: 'center'}}>

		<h1>Fiktive Datenschutz-Hinweise anhand von Beispielen</h1>
        
      </div>
    );

    const TryOut = () => (
    <Block id="try"> 
        {[
          {
            content:
              'Hi Everyone,\r\nAlle hier aufgelisteten Lernkarten arbeiten nach ~Regeln~ und können beliebig modifiziert werden.\r\nDie zu erzielenden Punkte/Prozente sind wie folgt aufgebaut: Richtige Antworten werden `GRÜN` dargestellt, falsche Antworten `BLAU`. Richtig ist: `RICHTIGE Antworten` werden angekreuzt UND `FALSCHE Antworten` werden nicht angekreuzt. Korrekte Antworten/Nicht-Antworten werden mit jeweils einem `Plus-Punkt` versehen. Eine korrekte ausgefüllte Karte bekommt `100 Prozent`. Für falsche Antworten oder fehlendes Ankreuzen gibt es einen Minus-Punkt. Plus- und Minus-Punkte werden gegeneinander verrechnet. Beispiel: bei vier möglichen Antworten werden bei **einem Fehler** drei Plus- und ein Minus-Punkt vergeben, so dass die Karte nur einen 50% Erfolg aufweist, bei zwei Fragen, eine richtig eine falsch, bekäme die Karte `NULL Prozent`.\r\nDie Struktur der Karten kann angepasst werden: z.B. mit Zeitlimit gegen die Uhr ausfüllen, nur vorwärts ausfüllen ohne zurück, Die Reihenfolge der Lernkarten ist grundsätzlich zufällig. Die Listen zeigen den vollständigen Fragensatz an.\r\nKarten und Listen für Auditoren und Beauftragte sind hier zu finden: [DSA](/docs/dsa.html) und [DSB](/docs/dsb.html)', 
            image: `${baseUrl}img/undraw_personal_data_29co.svg`,
            imageAlign: 'left',
            title: 'Datenschutz lernen',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              '### Die Tücken der Datenschutz-Grundverordnung oder „Das Projekt Datenschutz“\n\nAuch hier könnte noch mehr nützliches stehen. Attraktiv präsentiert und vermittelt. Datenschutz betrifft jeden Einzelnen in Europa und praktisch alle Unternehmen mit Kundenkontakten. Jetzt, mit der Datenschutzgrundverordnung und der europaweiten Gültigkeit, wird der Datenschutz auch in rechtlicher Hinsicht verbindlich und erzwingt mit hohen Bussgeldern auch die entsprechenden Akzeptanz.',
            image: `${baseUrl}img/undraw_gdpr_3xfb.svg`,
            imageAlign: 'right',
            title: 'Beschreibung',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light" > 
        {[
          {
            content:
              '> ### 1. Datenschutz auf einen Blick\n#### Allgemeine Hinweise\nDie folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie eine Webseite besuchen.\n#### Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.\n Weitere Informationen zum Thema Datenschutz entnehmen Sie unserer [Datenschutzerklärung](datenschutz.md).\n> ### Datenerfassung auf einer Webseite\n#### Wer ist verantwortlich für die Datenerfassung auf einer Webseite?\nDie Datenverarbeitung auf einer Webseite erfolgt durch den Webseiten-Betreiber. Dessen Kontaktdaten können Sie dem Impressum einer Webseite entnehmen.\n#### Wie werden IHRE Daten erfasst?\nIhre Daten werden zum einen dadurch erhoben, dass Sie diese selbst mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.\nAndere Daten werden automatisch beim Besuch der Webseite durch IT-Systeme erfasst. Dies sind zumeist technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie eine Webseite aufsuchen.\n#### Wofür werden diese Daten genutzt?\nEin Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.\n#### Welche Rechte haben Sie bezüglich Ihrer Daten?\nSie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. \n#### Analyse-Tools und Tools von Drittanbietern\nBeim Besuch einer Webseite kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden FIKTIVEN  Datenschutzerklärung.\n Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.\n > ### 2. Allgemeine Hinweise und Pflichtinformationen\n#### Datenschutz\nDie Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Webseite benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten erhoben werden und wofür sie genutzt werden. Sie erläutert auch, wie und zu welchem Zweck das geschieht.\nWir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\n#### Hinweis zur verantwortlichen Stelle\nVerantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.Ä.) entscheidet.\n#### Widerruf Ihrer Einwilligung zur Datenverarbeitung\n Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.\n#### Beschwerderecht bei der zuständigen Aufsichtsbehörde\nIm Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem das jeweilige Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.\n#### Widerspruch gegen Werbe-Mails\nDer Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.\n> ### 3. Datenerfassung auf unserer Webseite\n#### Cookies\nInternetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, Web-Angebote nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf __Ihrem__ Rechner abgelegt werden und die Ihr Browser speichert.\nDie meisten der verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende __Ihres__ Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es, Ihren Browser beim nächsten Besuch wiederzuerkennen.\nSie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen, sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität einer Webseite eingeschränken.\nCookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.\n> ### 4. Analyse Tools und Werbung\n#### Google Analytics\n Diese Webseite nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.\n Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.\nDie Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.\n#### IP Anonymisierung\nWir haben auf dieser Webseite die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseiteaktivitäten zusammenzustellen und um weitere mit der Webseitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.\n#### Browser Plugin\nSie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.\n#### Widerspruch gegen Datenerfassung\nSie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Webseite verhindert: Google Analytics deaktivieren.\n Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de. \n#### Auftragsdatenverarbeitung\nWir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.\n#### Demografische Merkmale bei Google Analytics\nDiese Webseite nutzt die Funktion “demografische Merkmale” von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt “Widerspruch gegen Datenerfassung” dargestellt generell untersagen.\n>### 5. Plugins und Tools\n#### Google Web Fonts\n Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.\nZu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Webseite aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.\nWenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.\n Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/. ',
/*            image: `${baseUrl}img/undraw_privacy_protection_nlwy.svg`,
            imageAlign: 'right', */
            title: 'Datenschutz ganz praktisch',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Der Datenschutz-Auditor ist von der zu untersuchenden Firma unabhängig und überprüft im Auftrag im Rahmen der fortlaufenden Zertifizierung regelmäßig, meist jährlich, den aktuellen Stand des Datenschutzes. Die Haupttätigkeit besteht darin, systematisch zu beurteilen, ob das bestehende Datenschutzniveau eines Unternehmens ausreichend ist und überprüft und bewertet die umgesetzten technischen und organisatorischen Maßnahmen im Rahmen der gesetzlichen Grundlagen. Der Datenschutz-Auditor ist für die Entwicklung und Steuerung des Auditprogramms und die Erstellung der Checklisten für Stichprobenprüfungen und Interviews verantwortlich.',
            image: `${baseUrl}img/undraw_setup_wizard_r6mr.svg`,
            imageAlign: 'top',
            title: 'Datenschutz-Auditoren',
          },
		  {
            content: 'Erläuterungen zum Datenschutz anhand einer fiktiven Datenschutzerklärung weiter unten',
            image: `${baseUrl}img/undraw_light_the_fire_gt58.svg`,
            imageAlign: 'bottom',
            title: 'Datenschutz Informationen',
          },
          {
            content: 'Wikipedia: Ein Datenschutzbeauftragter (DSB) wirkt in einer Organisation auf die Einhaltung des Datenschutzes hin. Die Person kann Mitarbeiter dieser Organisation sein oder als externer Datenschutzbeauftragter bestellt werden. Der Datenschutzbeauftragte muss die notwendige Fachkunde für die Ausübung besitzen und darf nicht in einen Konflikt oder in die Gefahr der Selbstkontrolle geraten.<br />[Wikipedia DSB](https://de.wikipedia.org/wiki/Datenschutzbeauftragter)<br />      Seit Mai 2018 gelten die Datenschutzgrundverordnung (DSGVO) und das neue BundesdatenschutzGesetz (BDSG). Seit dem ist der Einsatz eines externen oder internen Datenschutzbeauftragten für Unternehmen die personalisierte Daten verarbeiten praktisch zwingend.',
            image: `${baseUrl}img/undraw_personal_settings_kihd.svg`,
            imageAlign: 'top',
            title: 'Datenschutz-Beauftragte',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Wer ist noch dabei ?</h2>
          <p>Datenschutz ist bitter nötig</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
