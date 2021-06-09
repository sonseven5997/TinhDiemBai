import {Text, View, TextInput} from 'react-native';
import React from 'react';

export const Player = (props) => {
  return (
    <View
      style={{flexDirection: 'row', flex: 1, marginBottom: 8}}>
      <Text
        style={{
          width: 60,
          height: 60,
          backgroundColor: props.color,
          color: '#E5E5E5',
          fontSize: 40,
          justifyContent: 'center',
          textAlign: 'center',
          marginRight: 10,
        }}>
        {props.name !== undefined ? props.name.charAt(0).toUpperCase(): ''}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.name}
        onChangeText={props.onChange}
        style={{
          color: '#E5E5E5',
          fontSize: 20,
          borderBottomWidth: 3,
          borderBottomColor: '#D3D3D3',
          height: 60,
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'bottom',
        }}
        placeholderTextColor="#C9C9C9"
      />
    </View>
  );
};