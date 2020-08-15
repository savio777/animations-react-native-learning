import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

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
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      Animated.spring(ballY, {
        toValue: 400,
        bounciness: 10,
        //useNativeDriver: true,
      }).start();
      Animated.timing(ballX, {
        toValue: 150,
        duration: 1000,
      }).start();
    }, 300);

    setTimeout(() => {
      Animated.timing(ballY, {
        toValue: 200,
        duration: 1000,
      }).start();
      Animated.timing(ballX, {
        toValue: 300,
        duration: 1000,
      }).start();
    }, 1000);

    setTimeout(() => {
      Animated.spring(ballY, {
        toValue: 0,
        bounciness: 10,
      }).start();
      Animated.spring(ballX, {
        toValue: 0,
        bounciness: 10,
      }).start();
    }, 1500);
  }, [test]);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setTest(test + 1)}>
          <Text style={styles.textButton}>de novo</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.ball, {top: ballY, left: ballX}]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  ball: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 35,
    backgroundColor: '#3a4f41',
    borderColor: '#b9314f',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    borderColor: '#3a4f41',
  },
  textButton: {textAlign: 'center', color: '#3a4f41'},
});

export default App;
