import "../styles/globals.css";
import "../components/TopBar/TopBar.css";
import "../components/header/header.css";
import "../components/posts/index.css";
import "../components/sidebar/index.css";
import "../components/post/index.css";
import 'bootstrap/dist/css/bootstrap.css'
import "../pages/single-post/index.css"
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
