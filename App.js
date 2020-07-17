import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, InsertInfo, News, History, ListMember, Bonus} from '@screens';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'ListMember'} headerMode={'none'}>
        <Stack.Screen name="ListMember" component={ListMember} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="InsertInfo" component={InsertInfo} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Bonus" component={Bonus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
