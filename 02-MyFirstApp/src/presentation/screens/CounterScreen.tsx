import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Contador</Text>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.buttonContainer}>
        {/* <PrimaryButton
          label="+1"
          buttonStyle={[styles.button, styles.incrementButton]}
          textStyle={styles.buttonText}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        /> */}
        <Button
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
          mode="contained">
          Incrementar
        </Button>

        <PrimaryButton
          label="-1"
          buttonStyle={[styles.button, styles.decrementButton]}
          textStyle={styles.buttonText}
          onPress={() => setCount(count - 1)}
          onLongPress={() => setCount(0)}
        />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 100,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 80,
    color: '#6f6f6f',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  incrementButton: {
    backgroundColor: '#5856D6',
  },
  incrementButtonPressed: {
    backgroundColor: '#3b39ae',
  },
  decrementButton: {
    backgroundColor: '#ff4500',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
