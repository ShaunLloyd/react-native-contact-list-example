import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  SceneHeader,
  PrimaryPillButton,
  PrimaryKnockoutPillButton,
  LocalizedText,
  LocalizedInput,
} from 'components';
import { s, palette } from 'styles';

type Props = {
  firstNameInput: string,
  firstNameError: string,
  updateFirstName: (string) => void,
  validateFirstName: () => void,
  lastNameInput: string,
  lastNameError: string,
  updateLastName: (string) => void,
  validateLastName: () => void,
  phoneNumberInput: string,
  phoneNumberError: string,
  updatePhoneNumber: (string) => void,
  validatePhoneNumber: () => void,
  isFormValid: boolean,
  submitContact: () => void,
  navigateBackToContacts: () => void,
}

export const AddContactFormComponent = ({
  firstNameInput,
  firstNameError,
  updateFirstName,
  validateFirstName,
  lastNameInput,
  lastNameError,
  updateLastName,
  validateLastName,
  phoneNumberInput,
  phoneNumberError,
  updatePhoneNumber,
  validatePhoneNumber,
  isFormValid,
  submitContact,
  navigateBackToContacts,
}: Props) => ( // eslint-disable-line
  <View
    style={[s.flx_i, s.bg_white]}
  >
    <SceneHeader
      headerTextKey="addContact:header"
    />
    <KeyboardAwareScrollView
      style={[s.flx_i]}
      contentContainerStyle={[s.flx_i]}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <View
        style={[s.flx_i, s.mh4, s.mt3]}
      >
        <View style={[s.mv2]}>
          <LocalizedInput
            placeholderTextKey="addContact:firstName"
            style={[s.b__primary_60, s.primary]}
            placeholderTextColor={firstNameError ? palette.error : palette.primary}
            value={firstNameInput}
            onChangeText={updateFirstName}
            onBlur={validateFirstName}
            errorTextKey={firstNameError}
            errorStyle={[s.b__error_60, s.error]}
          />
        </View>
        <View style={[s.mv2]}>
          <LocalizedInput
            placeholderTextKey="addContact:lastName"
            style={[s.b__primary_60, s.primary]}
            placeholderTextColor={lastNameError ? palette.error : palette.primary}
            value={lastNameInput}
            onChangeText={updateLastName}
            onBlur={validateLastName}
            errorTextKey={lastNameError}
            errorStyle={[s.b__error_60, s.error]}
          />
        </View>
        <View style={[s.mv2]}>
          <LocalizedInput
            placeholderTextKey="addContact:phoneNumber"
            style={[s.b__primary_60, s.primary]}
            placeholderTextColor={phoneNumberError ? palette.error : palette.primary}
            keyboardType="phone-pad"
            value={phoneNumberInput}
            onChangeText={updatePhoneNumber}
            onBlur={validatePhoneNumber}
            errorTextKey={phoneNumberError}
            errorStyle={[s.b__error_60, s.error]}
          />
        </View>
      </View>
      <View
        style={[s.pv3, s.ph4]}
      >
        <PrimaryPillButton
          style={[s.mb2]}
          disabled={!isFormValid}
          onPress={submitContact}
        >
          <LocalizedText
            style={[s.white, s.f5, s.b]}
            textKey="addContact:submit"
          />
        </PrimaryPillButton>
        <PrimaryKnockoutPillButton
          onPress={navigateBackToContacts}
        >
          <LocalizedText
            style={[s.primary, s.f5, s.b]}
            textKey="addContact:cancel"
          />
        </PrimaryKnockoutPillButton>
      </View>
    </KeyboardAwareScrollView>
  </View>
);
