// src/components/CustomModal.js
import React from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const CustomModal = ({
  visible,
  onClose,
  children,
  overlayStyle,
  contentStyle,
  dismissOnTouchOutside = true,
  animationType = 'fade',
  transparent = true,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback
        onPress={dismissOnTouchOutside ? onClose : undefined}
      >
        <View style={[styles.modalOverlay, overlayStyle]}>
          <Pressable
            onPress={() => {}}
            style={[styles.modalContent, contentStyle]}
          >
            {children}
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    minWidth: '80%',
  },
});

export default CustomModal;
