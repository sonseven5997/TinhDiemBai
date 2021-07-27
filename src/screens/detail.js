import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Table, Row} from 'react-native-table-component';
import {PlayerScore} from '../components/playerScore/index.js';
import {StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native';

const DetailScreen = ({route}) => {
  const players = route.params.players;
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
    <View style={styles.container}>
      <Table>
        <Row
          style={{...styles.headerRow, borderBottomColor: color[0]}}
          data={players.map((e) => e.name)}
          textStyle={styles.headerText}
        />
        {score.map((e, i) => {
          return (
            <Row
              key={i.toString()}
              data={e}
              style={styles.contentRow}
              textStyle={styles.contentText}
            />
          );
        })}
      </Table>
      <Modal
        isVisible={modalVisible}
        style={styles.modalContainer}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <SafeAreaView style={styles.modalWrapper}>
          <Text style={styles.modalTitle}>Ghi điểm ván chơi</Text>
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
                  console.log('score arr = ', tempScore);
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
        </SafeAreaView>
        <Text style={styles.modalTotal}>Tổng: {total} </Text>
        <Button
          title="Save"
          buttonStyle={styles.modalBtn}
          titleStyle={styles.modalBtnTitle}
          onPress={() => {
            console.log('temp score = ', tempScore);
            if (total !== 0) {
              alert('Tổng phải bằng 0');
            } else {
              if (
                tempScore.filter((e) => e == '').length == 0 &&
                tempScore.filter((e) => e == undefined).length == 0 &&
                tempScore.length == players.length
              ) {
                let newScore = [...score];
                newScore.unshift(tempScore);
                setScore(newScore);
                setModalVisible(false);
                setTempScore([]);
              } else {
                alert('Hãy nhập điểm của tất cả người chơi');
              }
            }
          }}
        />
      </Modal>
      <Modal
        isVisible={modalScoreVisible}
        style={styles.modalContainer}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalWrapper}>
          <Text style={styles.modalTitle}>Tổng kết</Text>
          {players.map((e, i) => {
            return (
              <View style={styles.playerWrapper} key={i.toString()}>
                <View style={styles.modalWrapper}>
                  <Text
                    style={{
                      ...styles.playerName,
                      borderLeftColor: color[i % 4],
                    }}>
                    {e.name}
                  </Text>
                </View>
                <View style={styles.modalWrapper}>
                  <Text style={styles.playerScore}>
                    {renderScore(score, i)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <Button
          title="OK"
          buttonStyle={styles.modalBtn}
          titleStyle={styles.modalBtnTitle}
          onPress={() => {
            setModalScoreVisible(false);
          }}
        />
      </Modal>
      <View style={styles.btnWrapper}>
        <Button
          buttonStyle={styles.btnAdd}
          containerStyle={styles.btnAddContainer}
          icon={<Icon name="add-outline" type="ionicon" color="#FFFFFF" />}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Button
          buttonStyle={styles.btnScore}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  headerRow: {borderBottomWidth: 5},
  headerText: {color: '#FFFFFF', textAlign: 'center', fontSize: 20},
  contentRow: {borderBottomWidth: 1, borderBottomColor: '#FFFFFF'},
  contentText: {color: '#FFFFFF', textAlign: 'center', fontSize: 15},
  modalContainer: {flex: 1, backgroundColor: '#424242'},
  modalTitle: {
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 10,
    marginLeft: 10,
  },
  modalWrapper: {flex: 1},
  modalTotal: {color: '#FFFFFF'},
  modalBtn: {backgroundColor: '#FFCA28'},
  modalBtnTitle: {color: '#000000'},
  playerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  playerName: {
    textAlign: 'center',
    borderLeftWidth: 10,
    justifyContent: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  playerScore: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    flex: 1,
  },
  btnWrapper: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 16,
    flexDirection: 'row-reverse',
  },
  btnAdd: {
    backgroundColor: '#ef5350',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  btnAddContainer: {marginLeft: 8},
  btnScore: {
    backgroundColor: '#42A5F5',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default DetailScreen;
