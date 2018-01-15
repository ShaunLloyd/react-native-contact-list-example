import React from 'react';
import type { Component, Element } from 'react';
import { View } from 'react-native';
import { s } from 'styles';
import { LocalizedText } from '../localized-text';

type Props = {
  headerTextKey: string,
  RightButtonComponent: Component | Element,
};

export const SceneHeader = ({
  headerTextKey,
  RightButtonComponent = () => null,
}: Props) => ( // eslint-disable-line
  <View
    style={[s.flx_row, s.aic, s.jcsb, s.pv3, s.ph4, s.bg_primary]}
  >
    <LocalizedText
      textKey={headerTextKey}
      style={[s.white, s.f3, s.b]}
    />
    <RightButtonComponent />
  </View>
);
