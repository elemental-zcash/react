import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const OutlinedButton = extend(BaseButton, () => ({
  color: 'btn.textBtn.text',
  bg: 'transparent',
  ':hover': {
    bg: 'btn.textBtn.hoveredBg',
  },
  ':focus': {
    bg: 'btn.textBtn.focusedBg',
  },
  ':disabled': {
    color: 'btn.textBtn.disabledText',
  }
}));

export default OutlinedButton;