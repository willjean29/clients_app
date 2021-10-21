import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsApp} from 'utils/enums';

interface ButtonProps {
  title: string;
  uppercase?: boolean;
  onPress: Function;
  btnStyle?: StyleProp<ViewStyle>;
  txtStyle?: StyleProp<TextStyle>;
  rightIcon?: string;
  rightTxt?: string;
  txtRightStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  uppercase = false,
  onPress,
  btnStyle,
  txtStyle,
  rightIcon,
  rightTxt,
  txtRightStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.btnContainer, ...(btnStyle as any)}}
      onPress={() => onPress()}>
      {rightIcon && (
        <Icon name={rightIcon} color={ColorsApp.WHITE_COLOR} size={20} />
      )}
      <Text
        style={{
          ...styles.btnText,
          textTransform: uppercase ? 'uppercase' : 'none',
          ...(txtStyle as any),
        }}>
        {title}
      </Text>
      {rightTxt && (
        <Text style={{...styles.txtRight, ...(txtRightStyle as any)}}>
          {rightTxt}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: ColorsApp.PRIMARY_COLOR,
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  btnText: {
    color: ColorsApp.WHITE_COLOR,
    textAlign: 'center',
    // textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  txtRight: {
    color: ColorsApp.WHITE_COLOR,
  },
});

export default React.memo(Button);
