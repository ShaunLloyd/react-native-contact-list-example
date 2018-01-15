import type { Component, Element } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type UUID = string;

export interface Scene {
  screen: string,
  component: Component | Element,
  title: string,
  label?: string,
  navigatorStyle?: any,
}

export type ReduxAction<P, M> = {
  type: string,
  payload?: P,
  meta?: M,
}

export type StyleType = Array<StyleObj>;
