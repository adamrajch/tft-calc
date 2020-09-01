import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Nav from "../components/Nav";
import App from "next/app";
import styles from "../styles/Home.module.css";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
export default MyApp;
