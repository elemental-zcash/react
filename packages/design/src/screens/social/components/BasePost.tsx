import { extend, Text } from 'elemental-react';

export const NameText = extend(Text as any, () => ({
  fontFamily: 'Helvetica',
  fontSize: 16,
  lineHeight: 20,
  bold: true,
}));
export const UsernameText = extend(Text as any, () => ({
  fontFamily: 'Helvetica',
  fontSize: 12,
  color: '#737373'
}));
