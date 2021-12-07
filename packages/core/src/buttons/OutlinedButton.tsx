import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const OutlinedButton = extend(BaseButton, () => ({
  color: 'black',
  bg: 'white',
  borderColor: '#F4B728',
  borderStyle: 'solid',
  borderWidth: 1,
  outlined: true, // FIXME: work with `borderWidth: 1` only
  ':hover': {
    bg: '#FFF7E5',
  },
  ':focus': {
    bg: '#FFEDC5',
  },
  ':disabled': {
    borderColor: '#E4E2E2',
    color: '#7D7D7D',
  }
}));

export default OutlinedButton;