import {Text, TextInput} from 'react-native';
import {View} from 'react-native';
import React from 'react';

export const PlayerScore = (props) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5, marginHorizontal:10}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            borderLeftWidth: 10,
            borderLeftColor: props.color,
            flex: 1,
            justifyContent: 'center',
            fontSize: 25,
            color: '#FFFFFF',
            paddingTop:10
          }}>
          {props.name}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TextInput
          keyboardType="number-pad"
          value={props.score}
          onChangeText={props.onChange}
          placeholder="-"
          placeholderTextColor="#FFFFFF"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#FFFFFF',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 20,
          }}
        />
      </View>
    </View>
  );
};
