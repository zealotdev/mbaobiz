import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';

import { AppLayout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
