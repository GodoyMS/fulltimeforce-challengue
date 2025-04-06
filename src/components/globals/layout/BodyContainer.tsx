import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BodyContainerProps } from './types';
import { SIZES } from '@constants/theme';

const BodyContainer = ({ children, style }: BodyContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default BodyContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding * 2,
  },
});
