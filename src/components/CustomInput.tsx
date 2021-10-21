import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsApp} from 'utils/enums';
interface CustomInputProps {
  iconName?: string;
  iconNameRigth?: string;
  placeholder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value?: string;
  errorMessage?: string;
  editable?: boolean;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconName,
  iconNameRigth,
  placeholder,
  autoCapitalize = 'none',
  autoCorrect = false,
  keyboardType = 'default',
  secureTextEntry = false,
  value = '',
  errorMessage,
  editable = true,
  onChangeText,
  onPressIcon,
}) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainerInput}>
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={ColorsApp.PRIMARY_COLOR}
            style={styles.iconStyle}
          />
        )}

        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={ColorsApp.PRIMARY_COLOR}
          style={{
            ...styles.inputText,
            paddingLeft: iconName ? 40 : 15,
            paddingRight: iconNameRigth ? 40 : 15,
          }}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          value={value}
          editable={editable}
          onChangeText={text => onChangeText(text)}
        />
        {iconNameRigth && (
          <TouchableOpacity
            style={{...styles.iconStyle, ...styles.iconStyleRight}}
            activeOpacity={0.7}
            onPress={() => (onPressIcon ? onPressIcon() : null)}>
            <Icon
              name={iconNameRigth}
              size={20}
              color={ColorsApp.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text style={styles.txtErrorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    // borderWidth: 1,
    marginVertical: 10,
  },
  viewContainerInput: {
    position: 'relative',
    justifyContent: 'center',
  },
  iconStyle: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    paddingHorizontal: 10,
  },
  iconStyleRight: {
    right: 0,
  },
  inputText: {
    margin: 0,
    height: 35,
    backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
    borderRadius: 20,
    padding: 0,
    // paddingLeft: 40,
    // paddingVertical: 10,
    color: ColorsApp.PRIMARY_COLOR,
  },
  txtErrorMessage: {
    color: ColorsApp.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 12,
    // borderWidth: 1,
  },
});

export default CustomInput;
