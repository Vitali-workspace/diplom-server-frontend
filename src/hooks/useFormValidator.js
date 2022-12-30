import { useState } from 'react';

function useFormValidator() {

  const [isErrors, setErrors] = useState({});
  const [isValues, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChangeInput(evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setErrors({ ...isErrors, [name]: input.validationMessage });
    setValues({ ...isValues, [name]: value });
    setIsValid(input.closest('form').checkValidity());
  };

  return { isErrors, isValues, isValid, handleChangeInput, setErrors, setValues, setIsValid };
}

export default useFormValidator;
