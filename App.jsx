import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FlexboxDemo from '@/pages/FlexboxDemo/FlexboxDemo';
import Home from '@/pages/Home';
import TextDemo from '@/pages/TextDemo';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlexboxDemo" component={FlexboxDemo} />
      <Stack.Screen name="TextDemo" component={TextDemo} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
