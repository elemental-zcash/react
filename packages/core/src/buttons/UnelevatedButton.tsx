import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const DefaultButton = extend(BaseButton, () => ({
  color: 'black',
  ':hover': {
    bg: '#FFCF60',
  },
}));

export default DefaultButton;