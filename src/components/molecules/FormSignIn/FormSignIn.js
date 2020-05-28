import React from 'react';
import { Input } from '../../atoms';

const FormSignIn = ({ placeholder, type, name }) => {
  return (
    <form>
      <Input placeholder={placeholder} type={type} name={name} />
    </form>
  );
};

export default FormSignIn;
