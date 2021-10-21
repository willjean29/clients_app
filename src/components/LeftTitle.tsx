import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {ColorsApp, DimensionsDevice} from 'utils/enums';

interface LeftTitleProps {
  title: string;
}

const LeftTitle: React.FC<LeftTitleProps> = ({title}) => {
  return (
    <View style={{...styles.viewContainer}}>
      <Text
        style={{
          ...styles.txtTitle,
          paddingVertical: Platform.OS === 'ios' ? 60 : 40,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: ColorsApp.PRIMARY_COLOR,
    width: DimensionsDevice.WIDTH_DEVICE * 0.3,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    color: ColorsApp.WHITE_COLOR,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default LeftTitle;
