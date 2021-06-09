import {
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Table, Row} from 'react-native-table-component';
import {PlayerScore} from '../components/playerScore/index.js';

export default DetailScreen = ({route}) => {
  const players = route.params.players;
  console.log(players);
  const [tempScore, setTempScore] = useState([]);
  const [score, setScore] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalScoreVisible, setModalScoreVisible] = useState(false);
  const color = ['#EF5350', '#42A5F5', '#66BB6A', '#FFCA28'];
  const [total, setTotal] = useState(0);
  const renderScore = (arr, index) => {
    let sum = 0;
    arr.forEach((element) => {
      sum += parseFloat(element[index]);
    });
    return sum;
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#303030',
      }}>
      {/* <Text style={{color:'#FFFFFF'}}>This is detail screen</Text> */}
      <Table>
        <Row
          style={{borderBottomWidth:5, borderBottomColor: color[0]}}
          data={players.map((e) => e.name)}
          textStyle={{color: '#FFFFFF', textAlign: 'center', fontSize: 20}}
        />
        {score.map((e, i) => {
          return (
            <Row
              key={i.toString()}
              data={e}
              style={{borderBottomWidth:1, borderBottomColor:'#FFFFFF'}}
              textStyle={{color: '#FFFFFF', textAlign: 'center', fontSize: 15}}
            />
          );
        })}
      </Table>
      <Modal
        isVisible={modalVisible}
        style={{flex: 1, backgroundColor: '#424242'}}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 25,
              color: '#FFFFFF',
              marginBottom: 10,
              marginLeft: 10,
            }}>
            Enter score for players
          </Text>
          {players.map((e, i) => {
            return (
              <PlayerScore
                key={i.toString()}
                name={e.name}
                score={
                  tempScore[i] !== undefined ? tempScore[i].toString() : ''
                }
                color={color[i % 4]}
                onChange={(text) => {
                  let scoreArr = [...tempScore];
                  scoreArr[i] = text;
                  setTempScore(scoreArr);
                  console.log('score arr = ', scoreArr);
                  setTotal(
                    scoreArr
                      .filter((e) => e !== undefined && e !== '' && e !== '-')
                      .map((e) => parseFloat(e))
                      .reduce((a, b) => a + b, 0),
                  );
                }}
              />
            );
          })}
        </View>
        <Text style={{color: '#FFFFFF'}}>Total: {total} </Text>
        <Button
          title="Save"
          buttonStyle={{backgroundColor: '#FFCA28'}}
          titleStyle={{color: '#000000'}}
          onPress={() => {
            if (total !== 0) {
              alert('Total must be 0');
            } else {
              let newScore = [...score];
              newScore.unshift(tempScore);
              setScore(newScore);
              console.log(score);
              setModalVisible(false);
              setTempScore([]);
            }
          }}
        />
      </Modal>
      <Modal
        isVisible={modalScoreVisible}
        style={{flex: 1, backgroundColor: '#424242'}}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 25,
              color: '#FFFFFF',
              marginBottom: 10,
              marginLeft: 10,
            }}>
            Player score
          </Text>
          {players.map((e, i) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 5,
                  marginHorizontal: 10,
                }}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      borderLeftWidth: 10,
                      borderLeftColor: color[i % 4],
                      flex: 1,
                      justifyContent: 'center',
                      fontSize: 25,
                      color: '#FFFFFF',
                    }}>
                    {e.name}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#FFFFFF',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontSize: 20,
                    }}>
                    {renderScore(score, i)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <Button
          title="OK"
          buttonStyle={{backgroundColor: '#FFCA28'}}
          titleStyle={{color: '#000000'}}
          onPress={() => {
            setModalScoreVisible(false)
          }}
        />
      </Modal>
      <View
        style={{
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginRight: 16,
          marginBottom: 16,
          flexDirection: 'row-reverse',
        }}>
        <Button
          buttonStyle={{
            backgroundColor: '#ef5350',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          containerStyle={{marginLeft: 8}}
          icon={<Icon name="add-outline" type="ionicon" color="#FFFFFF" />}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#42A5F5',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          icon={<Icon name="list-outline" type="ionicon" color="#FFFFFF" />}
          onPress={() => {
            console.log(score);
            setModalScoreVisible(true);
          }}
        />
      </View>
    </View>
  );
};
