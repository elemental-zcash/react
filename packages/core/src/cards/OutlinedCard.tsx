import React from 'react';
import { extend } from 'elemental-react';

import BaseCard from './BaseCard';

const OutlinedCard = extend(BaseCard, () => ({
  borderWidth: 1,
  borderColor: '#231F20',
}));

export default OutlinedCard;