import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import i18next from 'i18next';
import { s } from 'styles';
import type { StyleType } from 'common';

import { LocalizedText } from '../localized-text';

type Props = {
  style: StyleType,
  errorStyle: StyleType,
  placeholderTextKey: string,
  errorTextKey: string,
  otherProps: any,
};

export const LocalizedInput = ({
  style = [],
  errorStyle = [],
  placeholderTextKey,
  errorTextKey,
  ...otherProps
}: Props) => ( // eslint-disable-line
  <View>
    <TextInput
      style={[
        s.f5,
        s.bw2,
        s.br4,
        s.ph2,
        Platform.OS === 'ios' ? s.pv2 : {},
        ...style,
        ...errorTextKey.length ? errorStyle : [],
      ]}
      placeholder={i18next.t(placeholderTextKey)}
      underlineColorAndroid="transparent"
      {...otherProps}
    />
    {
      errorTextKey.length ?
        <LocalizedText
          style={[s.error, s.f5, s.b]}
          textKey={errorTextKey}
        /> : null
    }
  </View>
);
