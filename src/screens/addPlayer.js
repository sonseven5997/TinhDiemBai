import {Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Icon, Button} from 'react-native-elements';

export default AddPlayerScreen = ({navigation}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#303030',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'sans-serif',
            color: '#E5E5E5',
            textAlign: 'center',
          }}>
          Nhập số người chơi
        </Text>
        <TextInput
          style={{
            color: '#E5E5E5',
            fontSize: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#D3D3D3',
            height: 60,

            textAlign: 'center',
            marginTop: 16,
          }}
          keyboardType="number-pad"
          value={quantity.toString()}
          onChangeText={(text) => {
            text == '' ? setQuantity('') : setQuantity(parseInt(text));
          }}
          autoFocus={true}
        />
      </View>
      <Button
        buttonStyle={{
          backgroundColor: '#ef5350',
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
        containerStyle={{
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginRight: 16,
          marginBottom: 16,
        }}
        icon={
          <Icon name="arrow-forward-outline" type="ionicon" color="#FFFFFF" />
        }
        onPress={() => {
          navigation.navigate('editPlayer', {quantity: quantity});
        }}
      />
    </View>
  );
};
