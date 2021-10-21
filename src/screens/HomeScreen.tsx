import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
// import components
import FadeImage from 'components/FadeImage';
import FormAddClient from 'components/Form';
import LeftTitle from 'components/LeftTitle';
// import utils
import ClientImage from 'assets/client.png';
import {ColorsApp} from 'utils/enums';
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.viewContainer}>
        <LeftTitle title="Client" />
        <View style={styles.viewContainerImage}>
          <FadeImage uri={ClientImage} style={{width: 200, height: 200}} />
        </View>
        <FormAddClient />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: ColorsApp.WHITE_COLOR,
  },
  viewContainerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;
