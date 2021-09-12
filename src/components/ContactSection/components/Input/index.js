import React from 'react';

const Input = ({
  id,
  name,
  type = 'text',
  placeholder ='',
  onChange,
  ...rest
}) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    required
    onChange={(event) => onChange(event.target.value)}
    {...rest}
  />
);

export default Input;
