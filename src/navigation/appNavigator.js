import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddPlayerScreen from '../screens/addPlayer';
import EditPlayerScreen from '../screens/editPlayer';
import DetailScreen from '../screens/detail';
import React from 'react';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="addPlayer"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}>
        <Stack.Screen
          name="editPlayer"
          component={EditPlayerScreen}
          options={{title: 'Tạo trò chơi'}}
        />
        <Stack.Screen
          name="addPlayer"
          component={AddPlayerScreen}
          options={{title: 'Tạo trò chơi'}}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={{title: 'Chi tiết trò chơi'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#FFCA28'},
  headerTitle: {color: '#303030', fontFamily: 'sans-serif', fontWeight: 'bold'},
});
