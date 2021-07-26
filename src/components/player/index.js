import {Text, View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export const Player = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.textWrapper, backgroundColor: props.color}}>
        {props.name !== undefined ? props.name.charAt(0).toUpperCase() : ''}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.name}
        onChangeText={props.onChange}
        style={styles.textInputWrapper}
        placeholderTextColor="#C9C9C9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 8,
  },
  textWrapper: {
    width: 60,
    height: 60,
    color: '#E5E5E5',
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 10,
  },
  textInputWrapper: {
    color: '#E5E5E5',
    fontSize: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#D3D3D3',
    height: 60,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
});
