import React from 'react';
import type { Children } from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from 'styles';
import type { StyleType } from 'common';

type Props = {
  onPress: () => void,
  disabled: boolean,
  style: StyleType,
  disabledStyle: StyleType,
  children: Children,
};

export const PillButton = ({
  onPress,
  disabled = false,
  style = [],
  disabledStyle = [],
  children,
}: Props) => ( // eslint-disable-line
  <TouchableOpacity
    onPress={onPress}
    style={[
      s.jcfe,
      s.aic,
      s.ass,
      s.br5,
      s.pv2,
      s.ph3,
      ...style,
      ...disabled ? disabledStyle : [],
    ]}
    activeOpacity={0.5}
    disabled={disabled}
  >
    {children}
  </TouchableOpacity>
);
