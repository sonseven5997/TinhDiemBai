import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Icon, Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const AddPlayerScreen = ({navigation}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.quantityWrapper}>
        <Text style={styles.quantityText}>Nhập số người chơi</Text>
        <TextInput
          style={styles.quantityTextInput}
          keyboardType="number-pad"
          value={quantity.toString()}
          onChangeText={(text) => {
            setQuantity(text);
          }}
          autoFocus={true}
        />
      </View>
      <Button
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        icon={
          <Icon name="arrow-forward-outline" type="ionicon" color="#FFFFFF" />
        }
        onPress={() => {
          if (isNaN(quantity)) {
            alert('Số lượng người chơi không chính xác');
          } else {
            if (parseFloat(quantity) <= 0) {
              alert('Số lượng người chơi không chính xác');
            } else {
              navigation.navigate('editPlayer', {quantity: quantity});
            }
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  quantityWrapper: {justifyContent: 'center', alignItems: 'center', flex: 1},
  quantityText: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: '#E5E5E5',
    textAlign: 'center',
  },
  quantityTextInput: {
    color: '#E5E5E5',
    fontSize: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#D3D3D3',
    height: 60,
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#ef5350',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  buttonContainer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 16,
  },
});

export default AddPlayerScreen