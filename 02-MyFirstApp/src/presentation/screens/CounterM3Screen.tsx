import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.style';
import {FAB} from 'react-native-paper';

const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.subtitle}>Contador</Text>
      <Text style={globalStyles.title}>{count}</Text>

      <FAB
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => {
          setCount(0);
        }}
        icon="add"
      />
    </View>
  );
};

export default CounterM3Screen;
