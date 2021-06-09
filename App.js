import React from "react"
import { View, Text } from "react-native";
import { AppNavigator } from "./src/navigation/appNavigator";


const App = () => {
  return(
    <View style={{flex:1}}>
      <AppNavigator/>
      
    </View>
  )
};

export default App;
