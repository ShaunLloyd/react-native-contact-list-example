import { Provider } from 'react-redux';
import { initializeNavigation } from 'utils';
import { configureStore } from './store';
import { scenes } from './scenes';
import { SCENE_IDS } from './scenes/scenes.constants';

const initializeApp = () => {
  const store = configureStore();

  initializeNavigation(
    scenes,
    store,
    Provider,
    {
      screen: {
        screen: SCENE_IDS.CONTACTS,
        navigatorStyle: {
          navBarHidden: true,
        },
      },
    },
  );
};

initializeApp();
