import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from './CustomInput';
import Button from 'components/Button';
import {ColorsApp} from 'utils/enums';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate} from 'utils/methods';
import useForm from 'hooks/useForm';
import ModalAlert from 'components/ModalAlert';

interface FormAddClientProps {}

const FormAddClient: React.FC<FormAddClientProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {form, onChangeValue, setFormValue} = useForm({
    name: '',
    lastName: '',
    dateOfBirth: '',
    date: '',
  });
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const dateFormat = formatDate(date);
    setFormValue({
      ...form,
      date: dateFormat,
      dateOfBirth: date,
    });
    hideDatePicker();
  };

  const handleCreateClient = async () => {
    // validation inputs
    const handleEmptyFields = Object.values(form).some(value => value === '');
    if (handleEmptyFields) {
      setMessageModal('Todos los campos son obligatorios');
      setShowModal(true);
      return;
    }
    // register client
    const response = await fetch(
      'https://clients-backend.herokuapp.com/api/clients',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );
    const client = await response.json();
    console.log({client});
    if (response.ok) {
      setMessageModal('Cliente registrado');
      setFormValue({name: '', lastName: '', dateOfBirth: '', date: ''});
      setShowModal(true);
    } else {
      setMessageModal('Error al registrar cliente');
      setShowModal(true);
    }
  };
  return (
    <View style={styles.viewContainerForm}>
      <Text style={styles.txtTtile}>Agregar Cliente</Text>

      <CustomInput
        placeholder="Nombre"
        onChangeText={txt => {
          onChangeValue(txt, 'name');
        }}
        iconName="person"
        value={form.name}
      />
      <CustomInput
        placeholder="Apellido"
        onChangeText={txt => {
          onChangeValue(txt, 'lastName');
        }}
        iconName="person-outline"
        value={form.lastName}
      />
      <CustomInput
        editable={false}
        placeholder="Fecha de Nacimiento"
        value={form.date}
        onChangeText={txt => {
          onChangeValue(txt, 'date');
        }}
        iconName="calendar-today"
        iconNameRigth="arrow-drop-down"
        onPressIcon={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
        title="Registrar"
        onPress={() => {
          handleCreateClient();
        }}
      />
      <ModalAlert
        title={messageModal}
        isVisible={showModal}
        setIsVisible={setShowModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerForm: {
    marginHorizontal: 15,
  },
  txtTtile: {
    textAlign: 'center',
    color: ColorsApp.PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default FormAddClient;
