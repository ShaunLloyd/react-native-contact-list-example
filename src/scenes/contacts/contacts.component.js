import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SceneHeader, CheckBox } from 'components';
import { s } from 'styles';

import { ContactsList } from './contacts-list';
import type { Contact } from './contacts.types';

type Props = {
  contacts: Contact[],
  showOnlySelected: boolean,
  isFetchingContacts: boolean,
  fetchContacts: () => void,
  toggleShowSelectedOnly: () => void,
  toggleContact: (Contact) => void
}

export const ContactsComponent = ({
  contacts,
  showOnlySelected,
  isFetchingContacts,
  fetchContacts,
  toggleShowSelectedOnly,
  toggleContact,
}: Props) => ( // eslint-disable-line
  <View
    style={[s.flx_i]}
  >
    <SceneHeader
      headerTextKey="contactsList:header"
      RightButtonComponent={() => (
        <CheckBox onPress={toggleShowSelectedOnly}>
          <Icon
            size={24}
            color="white"
            name={showOnlySelected ? 'visibility' : 'visibility-off'}
          />
        </CheckBox>
      )}
    />
    <ContactsList
      contacts={contacts}
      onContactSelect={toggleContact}
      refreshing={isFetchingContacts}
      onRefresh={fetchContacts}
    />
  </View>
);
