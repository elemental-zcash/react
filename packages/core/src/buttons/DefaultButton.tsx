import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const DefaultButton = extend(BaseButton, () => ({
  color: 'black',
  ':hover': {
    bg: '#FFCF60',
  },
  ':focus': {
    bg: '#FFDE93',
  },
  ':disabled': {
    bg: '#E4E2E2',
    color: '#7D7D7D',
  },
}));

export default DefaultButton;