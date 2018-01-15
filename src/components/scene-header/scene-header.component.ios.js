import React from 'react';
import type { Component, Element } from 'react';
import { View } from 'react-native';
import { s } from 'styles';
import { OrangeGradient } from '../linear-gradients';
import { LocalizedText } from '../localized-text';

type Props = {
  headerTextKey: string,
  RightButtonComponent: Component | Element,
};

export const SceneHeader = ({
  headerTextKey,
  RightButtonComponent = () => null,
}: Props) => ( // eslint-disable-line
  <OrangeGradient>
    <View style={[s.h_ios_bar]} />
    <View
      style={[s.flx_row, s.jcsb, s.pv3, s.ph4]}
    >
      <LocalizedText
        textKey={headerTextKey}
        style={[s.white, s.f3, s.b]}
      />
      <RightButtonComponent />
    </View>
  </OrangeGradient>
);
