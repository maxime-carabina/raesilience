import Document, { Html, Head, Main, NextScript } from "next/document";

const FONTS = [
  {
    key: "font1",
    rel: "preload",
    href: "/fonts/Helvetica-Light/HelveticaLt.ttf",
    as: "font",
    crossOrigin: ""
  },
  {
    key: "font2",
    rel: "preload",
    href: "/fonts/Helvetica-Neue/HelveticaNeue-Medium.ttf",
    as: "font",
    crossOrigin: ""
  }
];

function renderFonts(): JSX.Element[] {
  return FONTS.map((font) => (
    <link key={font.key} rel={font.rel} href={font.href} as={font.as} crossOrigin={font.crossOrigin} />
  ));
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/style.scss" rel="stylesheet" />
          {renderFonts()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}