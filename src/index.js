import { Provider } from 'react-redux';
import { initializeNavigation } from 'utils';
import { configureStore } from './store';
import { scenes } from './scenes';

const initializeApp = () => {
  const store = configureStore();

  initializeNavigation(
    scenes,
    store,
    Provider,
    {
      screen: {
        screen: 'view.contacts-list',
        navigatorStyle: {
          navBarHidden: true,
        },
      },
    },
  );
};

initializeApp();
