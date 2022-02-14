import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const DefaultButton = extend(BaseButton, () => ({
  color: 'black',
  ':hover': {
    bg: 'btn.hoverBg',
  },
  ':focus': {
    bg: 'btn.focusBg',
  },
  ':disabled': {
    bg: 'btn.disabledBg',
    color: 'btn.disabledText', // FIXME: elemental-react bug, we need to move this into context state that can be accessed by <Button>
  },
}));

export default DefaultButton;