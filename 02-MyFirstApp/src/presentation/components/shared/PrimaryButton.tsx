import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Props {
  label: string;
  buttonStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
}

const PrimaryButton = ({
  label,
  onPress,
  onLongPress,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={buttonStyle}>
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
