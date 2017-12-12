import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const color = '#222';

const appStyle = StyleSheet.create({
  font: {
    fontFamily: 'MuseoSansCyrl-500',
    color,
  },
});

const AppText = ({ children, style, ...rest }) => {
  Text.defaultProps.allowFontScaling = false;
  return (
    <Text style={[appStyle.font, style]} {...rest}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.obj,
};

export default AppText;
