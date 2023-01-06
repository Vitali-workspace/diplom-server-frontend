import { useState } from 'react';

function useFormValidator() {

  const [isErrors, setErrors] = useState({});
  const [isValues, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChangeInput(evt) {
    const input = evt.target;
    const nameInput = input.name;
    const valueInput = input.value;

    setErrors({ ...isErrors, [nameInput]: input.validationMessage });
    setValues({ ...isValues, [nameInput]: valueInput });
    setIsValid(input.closest('form').checkValidity());
  };

  return { isErrors, isValues, isValid, handleChangeInput, setErrors, setValues, setIsValid };
}

export default useFormValidator;
