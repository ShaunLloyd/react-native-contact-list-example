import { palette } from 'styles';
import type { Scene } from 'common';
import { ContactsContainer } from './contacts.container';

export const ContactsScene: Scene = {
  screen: 'view.contacts-list',
  component: ContactsContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: palette.primary,
    statusBarTextColorScheme: 'light',
  },
};
