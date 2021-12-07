import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const OutlinedButton = extend(BaseButton, () => ({
  color: 'black',
  bg: 'transparent',
  ':hover': {
    bg: '#FFF7E5',
  },
  ':focus': {
    bg: '#FFF2D6',
  },
  ':disabled': {
    color: '#7D7D7D',
  }
}));

export default OutlinedButton;