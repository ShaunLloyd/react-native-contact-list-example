import React from 'react';
import type { Children } from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from 'styles';
import type { StyleType } from 'common';

type Props = {
  isActive: boolean,
  style: StyleType,
  activeStyle: StyleType,
  onPress: () => void,
  children: Children,
}

export const CheckBox = ({
  isActive,
  style = [],
  activeStyle = [],
  onPress,
  children,
}: Props) => ( // eslint-disable-line
  <TouchableOpacity
    onPress={onPress}
    style={[
      s.aic,
      s.jcc,
      s.w2,
      s.ar_1,
      s.br_circle,
      s.bg_transparent,
      ...style,
      ...isActive ? activeStyle : [],
    ]}
  >
    {children}
  </TouchableOpacity>
);
