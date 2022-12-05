import "../styles/globals.css";
import "../components/TopBar/TopBar.css";
import "../components/header/header.css";
import "../components/posts/index.css";
import "../components/sidebar/index.css";
import "../components/post/index.css";
import 'bootstrap/dist/css/bootstrap.css'
import "../pages/single-post/index.css"
import "../components/single-post/index.css"
import "../pages/settings/index.css"
import Layout from "../components/layout";
import "../pages/write/index.css"
import Head from "next/head";
import '../styles/index.css'
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Head>
    <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600;1,700&family=Roboto:wght@300&family=Varela&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
