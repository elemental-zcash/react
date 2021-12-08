import React from 'react';
import { extend } from 'elemental-react';

import BaseCard from './BaseCard';

const FilledCard = extend(BaseCard, () => ({
  bg: '#222',
}));

export default FilledCard;