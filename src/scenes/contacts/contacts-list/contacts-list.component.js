import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { ContactsListItem } from './contacts-list-item.component';

import type { Contact } from '../contacts.types';

type Props = {
  contacts: Contact[],
  onContactSelect: (Contact) => void,
  refreshing: boolean,
  onRefresh: () => void,
};

export const ContactsList = ({
  contacts,
  onContactSelect,
  refreshing,
  onRefresh,
}: Props) => ( // eslint-disable-line
  <FlatList
    data={contacts}
    keyExtractor={item => item.recordID}
    renderItem={({ item }) => (
      <ContactsListItem
        contact={item}
        handleToggleSelect={onContactSelect}
      />
    )}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
  />
);
