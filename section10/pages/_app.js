import Head from "next/head";

import Layout from "../components/layout/layout";
import Notification from '../components/ui/notification';
import "../styles/globals.css";
import NotificationContextProvider from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <title>MeetUp Events</title>
        <meta name="description" content="Events"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
