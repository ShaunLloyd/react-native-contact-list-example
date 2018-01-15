import { palette } from 'styles';
import type { Scene } from 'common';
import { AddContactFormContainer } from './add-contact-form.container';
import { SCENE_IDS } from '../scenes.constants';

export const AddContactFormScene: Scene = {
  screen: SCENE_IDS.ADD_CONTACT,
  component: AddContactFormContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: palette.primary,
    statusBarTextColorScheme: 'light',
  },
};
