import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import styles from './Toggle.styles';

const Toggle = ({ label, options, value, onChange }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.optionsContainer}>
      {options?.map((option) => (
        <Button
          color={option === value ? '#3B6CD4' : '#AAA'}
          onPress={() => onChange(option)}
          title={option}
          key={option}
        />
      ))}
    </View>
  </View>
);

Toggle.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  label: undefined,
  options: undefined,
  value: undefined,
  onChange: undefined,
};

export default Toggle;
