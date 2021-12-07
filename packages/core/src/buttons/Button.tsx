import React from 'react';

import DefaultButton from './DefaultButton';
import RaisedButton from './RaisedButton';
import UnelevatedButton from './UnelevatedButton';
import OutlinedButton from './OutlinedButton';

const getButtonFromType = (props: { 
  raised?: boolean,
  outlined?: boolean,
  danger?: boolean,
  unelevated?: boolean,
}) => {
  const { raised, outlined, danger, unelevated } = props;

  if (raised) {
    return RaisedButton;
  }
  if (unelevated) {
    return UnelevatedButton;
  }
  if (outlined) {
    return OutlinedButton;
  }

  return DefaultButton;
}

const Button = (props: any) => {
  const ButtonComp = getButtonFromType(props);

  return (
    <ButtonComp {...props} />
  );
}

export default Button;
