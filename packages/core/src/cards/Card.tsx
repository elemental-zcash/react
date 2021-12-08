import React from 'react';

import ElevatedCard from './ElevatedCard';
import FilledCard from './FilledCard';
import OutlinedCard from './OutlinedCard';

// TODO: Use theme/design context for default card type
const cardConfig = {
  defaultCard: OutlinedCard,
};

const getCardFromType = (props: { 
  elevated?: boolean,
  outlined?: boolean,
  filled?: boolean,
}) => {
  const { elevated, outlined, filled } = props;

  if (elevated) {
    return ElevatedCard;
  }
  if (filled) {
    return FilledCard;
  }
  if (outlined) {
    return OutlinedCard;
  }

  return cardConfig.defaultCard;
}

const Button = (props: any) => {
  const CardComp = getCardFromType(props);

  return (
    <CardComp {...props} />
  );
}

export default Button;
