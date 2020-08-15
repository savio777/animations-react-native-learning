import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const App = () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ballY, {toValue: 500, duration: 1000}).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY}]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 30},
  ball: {width: 70, height: 70, borderRadius: 35, backgroundColor: '#0dff00'},
});

export default App;
