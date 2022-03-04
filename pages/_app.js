import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "@styles/globals.css";
import { BaseLayout } from "@components/ui/layout";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <ToastContainer />
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
