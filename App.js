import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

// May 10th
const SERGEIS_BIRTHDAY = new Date(2019, 4, 10);
export default class App extends React.Component {
  render() {
    const now = new Date();
    const seconds_left = Math.floor((SERGEIS_BIRTHDAY - (now))/1000);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Time until Sergei's Birthday</Text>
        <CountDown
          until={seconds_left}
          onFinish={() => alert('Time to turn up!')}
          size={20}
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
    paddingBottom: 10,
  },
});
