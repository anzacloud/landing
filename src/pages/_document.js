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
          {/* <!-- Chrome, Firefox OS and Opera --> */}
          <meta name="theme-color" content="#E9F8F6" />
          {/* <!-- Windows Phone --> */}
          <meta name="msapplication-navbutton-color" content="#E9F8F6" />
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Anza Cloud - Begin Cloud Migration" />
          <meta
            name="description"
            content="Anza Cloud is focussed on helping businesses transform to cloud enterprises. We provide tools that help businesses keep up with the rapidly changing technology."
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anza.cloud" />
          <meta
            property="og:title"
            content="Anza Cloud - Begin Cloud Migration"
          />
          <meta
            property="og:description"
            content="Anza Cloud is focussed on helping businesses transform to cloud enterprises. We provide tools that help businesses keep up with the rapidly changing technology."
          />
          <meta property="og:image" content="assets/images/favicon.png" />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://anza.cloud" />
          <meta
            property="twitter:title"
            content="Anza Cloud - Begin Cloud Migration"
          />
          <meta
            property="twitter:description"
            content="Anza Cloud is focussed on helping businesses transform to cloud enterprises. We provide tools that help businesses keep up with the rapidly changing technology."
          />
          <meta property="twitter:image" content={favicon} />
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
