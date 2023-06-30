import { useState } from "react";

const useForm = (object) => {
  const [inputs, setInputs] = useState(object);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...inputs,
      [name]: value,
    };

    setInputs(newValues);
  };

  return {
    handleChange,
    inputs,
  };
};

export default useForm;
