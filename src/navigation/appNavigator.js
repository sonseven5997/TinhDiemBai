import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddPlayerScreen from '../screens/addPlayer';
import EditPlayerScreen from '../screens/editPlayer';
import DetailScreen from '../screens/detail';
import React from 'react';

//const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// export const PlayerTab = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: {backgroundColor: '#303030', borderBottomWidth: 3},
//         labelStyle: {
//           color: '#E5E5E5',
//           fontFamily: 'sans-serif',
//           textTransform: 'none',
//           fontSize:18
//         },
//       }}>
//       <Tab.Screen
//         name="addPlayer"
//         component={AddPlayerScreen}
//         options={{title: 'Nhập tên người chơi'}}
//       />
//       <Tab.Screen
//         name="editPlayer"
//         component={EditPlayerScreen}
//         options={{title: 'Chọn người chơi'}}
//       />
//     </Tab.Navigator>
//   );
// };

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="addPlayer"
        screenOptions={{
          headerStyle: {backgroundColor: '#FFCA28'},
          headerTitleStyle: {color: '#303030', fontFamily: 'sans-serif', fontWeight:'bold'},
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
