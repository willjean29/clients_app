import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import components
import Modal from 'components/Modal';
import Button from 'components/Button';
// import utils
import {ColorsApp} from 'utils/enums';

interface ModalAlertProps {
  title: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  title,
  isVisible,
  setIsVisible,
}) => {
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={{marginHorizontal: 5}}>
        <Text style={styles.txtTtile}>Mensaje</Text>
        <Text style={styles.txtDescription}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button
            title="Ok"
            onPress={() => {
              setIsVisible(false);
            }}
            btnStyle={{
              width: '20%',
              paddingVertical: 5,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  txtTtile: {
    color: ColorsApp.BLACK_COLOR,
    fontWeight: 'bold',
    fontSize: 22,
  },
  txtDescription: {
    color: ColorsApp.BLACK_COLOR,
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ModalAlert;
