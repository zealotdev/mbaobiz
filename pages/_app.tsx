import { Provider } from 'react-redux';
import { store } from './../app/store';

import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';

import { AppLayout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
