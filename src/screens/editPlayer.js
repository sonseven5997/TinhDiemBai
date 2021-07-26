import {View, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Icon, Button} from 'react-native-elements';
import {Player} from '../components/player/index.js';

const EditPlayerScreen = ({navigation, route}) => {
  const quantity = route.params.quantity;
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    arr[i] = {name: '', index: i};
  }
  const [players, setPlayers] = useState(arr);
  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({item, index}) => {
          const color = ['#EF5350', '#42A5F5', '#66BB6A', '#FFCA28'];
          return (
            <View style={styles.flex1}>
              <Player
                name={item.name}
                // eslint-disable-next-line radix
                placeholder={'Player ' + parseInt(index + 1)}
                color={color[index % 4]}
                onChange={(text) => {
                  let newArr = [...players];
                  newArr[index] = {...newArr[index], name: text};
                  setPlayers(newArr);
                }}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.index.toString()}
      />

      <Button
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        icon={
          <Icon name="arrow-forward-outline" type="ionicon" color="#FFFFFF" />
        }
        onPress={() => {
          if (players.every((e) => e.name !== '') === true) {
            navigation.navigate('detail', {players: players});
          } else {
            // eslint-disable-next-line no-alert
            alert('Bạn hãy điền tên tất cả người chơi!');
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
  flex1: {flex: 1},
  buttonStyle: {
    backgroundColor: '#ef5350',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  containerStyle: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 16,
  },
});

export default EditPlayerScreen;
