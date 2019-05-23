import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

const MAY = 4;
const TENTH = 10;

export default class App extends React.Component {
  render() {
    const now = new Date();
    const currYear = now.getFullYear();
    const afterBday = now.getMonth() > MAY || (now.getMonth() == MAY && now.getDate() > TENTH);

    const nextBday = new Date(afterBday ? currYear + 1 : currYear, MAY, TENTH);
    const secondsLeft = Math.floor((nextBday - (now))/1000);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Time until Sergei's 21st Birthday</Text>
        <CountDown
          until={secondsLeft}
          onFinish={() => alert('Time to turn up!')}
          size={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
});
