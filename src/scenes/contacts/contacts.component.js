import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SceneHeader, CheckBox, PrimaryPillButton, LocalizedText } from 'components';
import { s } from 'styles';

import { ContactsList } from './contacts-list';
import type { Contact } from './contacts.types';

type Props = {
  contacts: Contact[],
  showOnlySelected: boolean,
  isFetchingContacts: boolean,
  fetchContacts: () => void,
  toggleShowSelectedOnly: () => void,
  toggleContact: (Contact) => void,
  navigateToAddContactForm: () => void,
}

export const ContactsComponent = ({
  contacts,
  showOnlySelected,
  isFetchingContacts,
  fetchContacts,
  toggleShowSelectedOnly,
  toggleContact,
  navigateToAddContactForm,
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
    <View
      style={[s.w_100]}
    >
      <PrimaryPillButton
        style={[s.mv3, s.mh4]}
        onPress={navigateToAddContactForm}
      >
        <LocalizedText
          style={[s.white, s.f5, s.b]}
          textKey="contactsList:addContact"
        />
      </PrimaryPillButton>
    </View>
  </View>
);
