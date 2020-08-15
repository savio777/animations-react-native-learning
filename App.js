import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const TRANSFORM_WHITELIST = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true,
};

const App = () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
      //useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(ballX, {
        toValue: 100,
        duration: 1000,
      }).start();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, {top: ballY, left: ballX}]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 30},
  ball: {width: 70, height: 70, borderRadius: 35, backgroundColor: '#0dff00'},
});

export default App;
