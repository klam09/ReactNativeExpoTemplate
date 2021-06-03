import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';

import styles from './Home.styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <GridContainer spacing={2}>
        <GridItem col={6} spacing={2}>
          <Button title="Go to Flexbox" onPress={() => navigation.navigate('FlexboxDemo')} />
        </GridItem>
        <GridItem col={6} spacing={2}>
          <Button title="Go to Text" onPress={() => navigation.navigate('TextDemo')} />
        </GridItem>
      </GridContainer>
    </View>
  );
};

export default Home;
