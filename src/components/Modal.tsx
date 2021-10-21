import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal as Overlay,
} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface ModalProps {
  children: React.ReactNode;
  type?: 'content' | 'message';
  closePress?: boolean;
  isVisible: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  closePress = true,
  type = 'content',
  setIsVisible,
}) => {
  return (
    <Overlay animationType="fade" visible={isVisible} transparent={true}>
      {/* background */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          closePress ? setIsVisible && setIsVisible(false) : null
        }
        style={styles.containerMdal}>
        {/* modal content */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => null}
          style={{
            ...styles.containerContentModal,
            width: type === 'content' ? '90%' : '60%',
          }}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  containerMdal: {
    flex: 1,
    backgroundColor: ColorsApp.BACKGROUND_MODAL_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContentModal: {
    // width: '90%',
    height: 'auto',
    padding: 10,
    borderRadius: 10,
    backgroundColor: ColorsApp.WHITE_COLOR,
    borderColor: ColorsApp.PRIMARY_COLOR,
    borderWidth: 1,
  },
});

export default Modal;
