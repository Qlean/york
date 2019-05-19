import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@qlean/york-core';

const sizes = {
  m: {
    height: 50,
    width: '100%', // FIXME: no percents
    borderRadius: 4,
  },
  s: {
    height: 35,
    width: 120,
    borderRadius: 4,
  },
};

const presets = {
  green: {
    button: { backgroundColor: colors.green },
  },
  black: {
    button: { backgroundColor: colors.black },
  },
  greenLinear: {
    button: {
      backgroundColor: colors.white,
      borderColor: colors.green,
      borderWidth: 1,
    },
    text: { color: colors.green },
  },
  blackLinear: {
    button: {
      backgroundColor: colors.white,
      borderColor: colors.black,
      borderWidth: 1,
    },
    text: {
      color: colors.black,
    },
  },
};

const style = StyleSheet.create({
  main: { alignItems: 'center', justifyContent: 'center' },
  text: { color: colors.white },
  disabled: { backgroundColor: colors.smoke, borderColor: colors.smoke },
  disabledText: { color: colors.silver },
  s: { ...sizes.s },
  m: { ...sizes.m },
  green: { ...presets.green.button },
  black: { ...presets.black.button },
  greenLinear: { ...presets.greenLinear.button },
  greenLinearText: { ...presets.greenLinear.text },
  blackLinear: { ...presets.blackLinear.button },
  blackLinearText: { ...presets.blackLinear.text },
  text1: {},
  greenRound: {},
  yellowRound: {},
});

/**
 * Компонент кнопки.
 */
const Button = ({ children, isDisabled, preset, size = "m" }) => (
  <TouchableOpacity
    style={[style.main, style[size], style[preset], isDisabled && style.disabled]}
    disabled={isDisabled}
  >
    <Text style={[style.text, style[`${preset}Text`], isDisabled && style.disabledText]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  /** Управление preset самой кнопки. */
  preset: PropTypes.oneOf(Object.keys(presets)),
}

export default Button;
