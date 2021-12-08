import React from 'react';
import { extend } from 'elemental-react';
import BaseCard from './BaseCard';

const ElevatedCard = extend(BaseCard, () => ({
  // bg: 'green',
  boxShadow: '0 1px 2px rgba(0,0,0,0.24)',
  // shadows: [ { shadowColor: '#000000',
  // shadowInner: false,
  // shadowOffset: {
  //   x: 1, y: 1,
  // },
  // shadowOpacity: 0.24,
  // shadowRadius: 2,
  // shadowSpread: 0 } ]
}));

export default ElevatedCard;