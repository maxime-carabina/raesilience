import Document, { Html, Head, Main, NextScript } from "next/document";

const FONTS = [
  {
    key: "font1",
    rel: "preload",
    href: "/fonts/Helvetica-Light/HelveticaLt.ttf",
    as: "font",
    type: "font/ttf",
    crossOrigin: "",
  },
  {
    key: "font2",
    rel: "preload",
    href: "/fonts/Helvetica-Neue/HelveticaNeue-Medium.otf",
    as: "font",
    type: "font/otf",
    crossOrigin: "",
  },
];

function renderFonts(): JSX.Element[] {
  return FONTS.map((font) => (
    <link
      rel={font.rel}
      key={font.key}
      href={font.href}
      as={font.as}
      type={font.type}
      crossOrigin={font.crossOrigin}
    />
  ));
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/style.scss" as="style" />
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