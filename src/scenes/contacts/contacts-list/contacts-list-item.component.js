import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PrimaryCheckBox } from 'components';
import { s } from 'styles';

import type { Contact } from '../contacts.types';

type Props = {
  contact: Contact,
  handleToggleSelect: () => void,
}

export const ContactsListItem = ({ contact, handleToggleSelect }: Props) => (
  <View
    style={[
      s.flx_row,
      s.pv3,
      s.ph4,
      s.bb,
      s.b__light_silver,
      contact.isSelected ? s.bg_tertiary : s.bg_white,
    ]}
  >
    <View
      style={[s.flx_i]}
    >
      <Text
        style={[s.near_black, s.f4]}
      >
        {contact.givenName} {contact.familyName}
      </Text>
      {
        contact.phoneNumbers.map(({ label, number }, index) => (
          <Text
            key={`phoneNumber-${index + 1}`}
            style={[s.light_silver, s.f5]}
          >
            {`${label}: ${number}`}
          </Text>
        ))
      }
    </View>
    <View
      style={[s.aic, s.jcc]}
    >
      <PrimaryCheckBox
        isActive={contact.isSelected}
        onPress={() => handleToggleSelect(contact)}
      >
        <Icon
          name="done"
          size={26}
          style={[s.bg_transparent]}
          color={contact.isSelected ? 'white' : 'transparent'}
        />
      </PrimaryCheckBox>
    </View>
  </View>
);
