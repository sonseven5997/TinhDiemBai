import {Text, TextInput} from 'react-native';
import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

export const PlayerScore = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{...styles.name, borderLeftColor: props.color}}>
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
          style={styles.nameInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  wrapper: {flex: 1},
  name: {
    textAlign: 'center',
    borderLeftWidth: 10,

    flex: 1,
    justifyContent: 'center',
    fontSize: 25,
    color: '#FFFFFF',
    paddingTop: 10,
  },
  nameInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
});
