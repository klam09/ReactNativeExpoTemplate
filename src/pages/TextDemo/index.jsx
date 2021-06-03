import React from 'react';
import { Text, View } from 'react-native';

import styles from './TextDemo.styles';

const TextDemo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello!</Text>
  </View>
);

export default TextDemo;
