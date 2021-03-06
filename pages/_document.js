import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            hid="description"
            name="description"
            content="Native-like Page Transitions with React and NextJS, A Travel App"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
