import {useState} from 'react';

const useForm = <T extends Object>(data: T) => {
  const [dataForm, setDataForm] = useState(data);

  const onChangeValue = (value: string | Date, key: keyof T) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };
  const setFormValue = (form: T) => {
    setDataForm(form);
  };

  return {
    ...dataForm,
    form: dataForm,
    onChangeValue,
    setFormValue,
  };
};

export default useForm;
