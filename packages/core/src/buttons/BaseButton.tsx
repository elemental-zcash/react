import React, { ReactNode } from 'react';
import { extend, Button as __Button } from 'elemental-react';

const _Button = ({ label, children, ...props }: { label?: string, children?: any }) => (
  <__Button
    outlined={false}
    label={(label && typeof label === 'string') ? label.toUpperCase() : label}
    {...props}
  >
    {(children && typeof children === 'string') ? children.toUpperCase() : children}
  </__Button>
);

const BaseButton = extend(_Button, () => ({
  m: 2,
  px: '20px',
  borderRadius: 2,
  bg: 'btn.bg',
  height: 36,
  color: 'white',
  fontSize: 16,
  lineHeight: 20,
  fontFamily: 'Roboto Mono',
  fontWeight: 'bold',
  letterSpacing: 1,
}));

export default BaseButton;