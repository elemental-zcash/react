import React from 'react';
import { extend, Box } from 'elemental-react';

const _Box = ({ children, ...props }: { children?: any }) => (
  <Box
    {...props}
  >
    {/* {(children && typeof children === 'string') ? children.toUpperCase() : children} */}
    {children}
  </Box>
);

const BaseCard = extend(_Box, () => ({
  bg: 'white',
  borderRadius: 8,
}));

export default BaseCard;