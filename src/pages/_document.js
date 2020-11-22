import Document, { Html, Head, Main, NextScript } from "next/document";
import favicon from "assets/favicon.png";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href={favicon} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Coiny&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script
            async
            data-id="67310"
            src="https://cdn.widgetwhats.com/script.min.js"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
