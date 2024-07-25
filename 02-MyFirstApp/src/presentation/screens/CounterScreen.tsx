import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="+1"
      />

      <Button
        onPress={() => {
          setCount(count - 1);
        }}
        title="-1"
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
